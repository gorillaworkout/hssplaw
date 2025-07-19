# HSS Law Firm - Role-Based Authentication System

## Overview
This system implements role-based access control for the HSS Law Firm website, ensuring that only authorized admin users can access the admin panel.

## Authentication Flow

### 1. User Registration & Role Assignment
- When users sign up (email/password or Google), they are automatically assigned the "user" role
- Only users with "admin" role can access the admin panel
- User data is stored in Firestore with the following structure:
  ```json
  {
    "uid": "user-unique-id",
    "email": "user@example.com",
    "displayName": "User Name",
    "role": "user" | "admin",
    "createdAt": "2024-01-01T00:00:00Z",
    "lastLogin": "2024-01-01T00:00:00Z"
  }
  ```

### 2. Admin Panel Access Control
- `/admin/*` routes are protected by the `AdminLayout` component
- Users must be authenticated AND have "admin" role
- Non-admin users are redirected to the login page
- Admin panel links only appear in the navbar for admin users

### 3. Login Process
1. User enters credentials on `/admin/login`
2. System authenticates with Firebase Auth
3. System checks user's role in Firestore
4. If user has "admin" role, they are redirected to `/admin/news`
5. If user lacks admin role, they are logged out and shown an error

## Development Setup

### Creating Admin Users
For development purposes, use the "Jadikan Admin (Dev Only)" button on the login page:

1. Create a user account via Firebase Auth (email/password)
2. Go to `/admin/login`
3. Enter the email and password of the user you want to make admin
4. Click "Jadikan Admin (Dev Only)"
5. The user will be granted admin role in Firestore
6. Login normally to access the admin panel

**Note:** Remove this button in production!

### Manual Admin Creation
You can also manually create admin users by:

1. Using the Firebase Console to add a document to the `users` collection
2. Using the provided script in `scripts/create-admin.js` (requires Firebase Admin SDK setup)
3. Using the `makeUserAdmin` function in `lib/admin-utils.ts`

## File Structure

### Authentication Files
- `/hooks/use-user-role.ts` - Custom hook for role checking
- `/lib/firestore.ts` - User management functions
- `/lib/admin-utils.ts` - Admin utility functions
- `/app/admin/login/page.tsx` - Admin login page
- `/app/admin/layout.tsx` - Protected admin layout

### Key Functions

#### `useUserRole()` Hook
```typescript
const { user, userData, isAdmin, isUser, loading, error } = useUserRole()
```
- `user`: Firebase Auth user object
- `userData`: User data from Firestore
- `isAdmin`: Boolean indicating admin status
- `isUser`: Boolean indicating regular user status
- `loading`: Loading state for auth and user data
- `error`: Any errors during user data fetching

#### `saveUserToFirestore(user, role)`
Saves user data to Firestore with specified role.

#### `getUserFromFirestore(uid)`
Retrieves user data from Firestore by UID.

#### `updateUserLastLogin(uid)`
Updates the user's last login timestamp.

#### `makeUserAdmin(uid, userData)`
Converts a regular user to admin (development only).

## Security Considerations

### Frontend Protection
- Admin routes are protected by the `AdminLayout` component
- `useUserRole` hook provides role checking throughout the app
- Admin panel links are conditionally rendered

### Backend Security
- All admin operations should also be secured on the server side
- Firebase Security Rules should enforce role-based access
- Consider implementing server-side role verification for critical operations

### Recommended Firestore Security Rules
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Only admins can read/write news
    match /news/{document} {
      allow read: if true; // Public reading
      allow write: if request.auth != null && 
        exists(/databases/$(database)/documents/users/$(request.auth.uid)) &&
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
  }
}
```

## Production Deployment

### Before Production:
1. Remove the "Jadikan Admin (Dev Only)" button from login page
2. Set up proper admin user creation process
3. Implement proper error handling and user feedback
4. Add server-side role verification
5. Configure Firestore Security Rules
6. Set up monitoring and logging

### Environment Variables
Ensure these are properly configured:
- Firebase configuration
- Authentication providers
- Firestore settings

## Troubleshooting

### Common Issues:
1. **User shows as not admin despite having admin role**
   - Check Firestore document structure
   - Verify role field is exactly "admin"
   - Clear browser cache and localStorage

2. **useUserRole hook not updating**
   - Ensure Firebase Auth state is properly loaded
   - Check for JavaScript errors in console
   - Verify Firestore connection

3. **Admin panel not accessible**
   - Check network tab for Firestore errors
   - Verify user is authenticated
   - Check browser console for errors

### Debugging:
- Use browser console to check user role: `console.log(userData?.role)`
- Monitor Firestore in Firebase Console
- Check Firebase Auth users list
- Use Redux DevTools to inspect auth state

## Future Enhancements

1. **Role Hierarchy**: Implement multiple admin levels (super-admin, admin, moderator)
2. **Permission System**: Fine-grained permissions for different admin functions
3. **User Management UI**: Admin interface to manage user roles
4. **Audit Logging**: Track admin actions and role changes
5. **2FA**: Two-factor authentication for admin accounts
6. **Session Management**: Better session handling and timeout
