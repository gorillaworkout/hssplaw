# Google Maps Setup Guide

## Setup Google Maps API

### 1. Dapatkan Google Maps API Key

1. Kunjungi [Google Cloud Console](https://console.cloud.google.com/)
2. Buat project baru atau pilih project yang sudah ada
3. Aktifkan Google Maps JavaScript API:
   - Pergi ke "APIs & Services" > "Library"
   - Cari "Maps JavaScript API"
   - Klik "Enable"

4. Aktifkan Places API (opsional untuk fitur tambahan):
   - Cari "Places API"
   - Klik "Enable"

5. Buat API Key:
   - Pergi ke "APIs & Services" > "Credentials"
   - Klik "Create Credentials" > "API Key"
   - Copy API key yang dihasilkan

### 2. Konfigurasi Environment Variables

Tambahkan ke file `.env.local`:

```bash
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```

### 3. Restrict API Key (Recommended)

Untuk keamanan, batasi penggunaan API key:

1. Di Google Cloud Console, klik pada API key yang baru dibuat
2. Di bagian "Application restrictions":
   - Pilih "HTTP referrers (web sites)"
   - Tambahkan domain Anda: `https://hssplawfirm.com/*`
   - Untuk development: `http://localhost:3000/*`

3. Di bagian "API restrictions":
   - Pilih "Restrict key"
   - Pilih "Maps JavaScript API" dan "Places API"

### 4. Billing Setup

Google Maps API memerlukan billing account:

1. Di Google Cloud Console, pergi ke "Billing"
2. Link project dengan billing account
3. Google memberikan kredit gratis $200 per bulan untuk Maps API

### 5. Testing

Setelah setup, komponen Google Maps akan:
- Menampilkan peta interaktif
- Menampilkan marker lokasi kantor
- Menyediakan tombol untuk membuka di Google Maps
- Menyediakan tombol untuk mendapatkan arah

### Fallback Mode

Jika API key tidak tersedia, komponen akan menampilkan:
- Static map placeholder
- Tombol untuk membuka di Google Maps
- Informasi alamat kantor

## Penggunaan

```tsx
import { OfficeLocation } from "@/components/contact/office-location"

<OfficeLocation 
  latitude={-7.2575}
  longitude={112.7521}
  address="Jl. Raya Darmo Permai III No. 1, Surabaya, Jawa Timur 60241"
/>
```

## Customization

Anda dapat mengubah:
- `latitude` dan `longitude` untuk lokasi yang berbeda
- `address` untuk alamat yang ditampilkan
- Styling melalui `className` prop


