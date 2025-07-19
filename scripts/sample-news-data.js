// Script untuk menambahkan sample data news ke Firestore
// Jalankan di browser console setelah login sebagai admin

const sampleNewsData = [
  {
    title: "Perubahan Regulasi Hukum Bisnis 2024",
    excerpt: "Pembaruan terbaru dalam regulasi hukum bisnis yang perlu diketahui oleh pengusaha dan perusahaan di Indonesia.",
    content: "Dalam perkembangan hukum bisnis tahun 2024, terdapat beberapa perubahan signifikan yang mempengaruhi praktik bisnis di Indonesia. Perubahan ini mencakup regulasi baru dalam hal perizinan usaha, perpajakan, dan compliance perusahaan...",
    category: "Hukum Korporasi",
    author: "Habibullah, S.H., M.H.",
    slug: "perubahan-regulasi-hukum-bisnis-2024",
    imageUrl: "/placeholder.jpg"
  },
  {
    title: "Tips Menghindari Sengketa Kontrak Bisnis",
    excerpt: "Panduan praktis untuk menyusun kontrak bisnis yang solid dan menghindari potensi sengketa di kemudian hari.",
    content: "Kontrak bisnis yang solid adalah fondasi dari setiap kerjasama yang sukses. Untuk menghindari sengketa di kemudian hari, ada beberapa aspek penting yang perlu diperhatikan dalam penyusunan kontrak...",
    category: "Kontrak Bisnis", 
    author: "Sahura, S.H., LL.M.",
    slug: "tips-menghindari-sengketa-kontrak-bisnis",
    imageUrl: "/placeholder.jpg"
  },
  {
    title: "Hak dan Kewajiban dalam Hukum Keluarga",
    excerpt: "Memahami hak dan kewajiban suami istri dalam perkawinan menurut hukum Indonesia.",
    content: "Hukum keluarga di Indonesia mengatur berbagai aspek penting dalam kehidupan berumah tangga. Pemahaman yang baik tentang hak dan kewajiban masing-masing pihak dalam perkawinan sangat penting untuk menjaga keharmonisan keluarga...",
    category: "Hukum Keluarga",
    author: "Sudana, S.H., M.Kn.",
    slug: "hak-dan-kewajiban-dalam-hukum-keluarga", 
    imageUrl: "/placeholder.jpg"
  }
]

// Fungsi untuk menambahkan data ke Firestore
async function addSampleNewsData() {
  const { saveNewsToFirestore } = await import('./lib/firestore')
  
  for (const newsItem of sampleNewsData) {
    try {
      const docId = await saveNewsToFirestore(newsItem)
      console.log(`News added with ID: ${docId}`)
    } catch (error) {
      console.error('Error adding news:', error)
    }
  }
}

// Uncomment untuk menjalankan
// addSampleNewsData()

export { sampleNewsData, addSampleNewsData }
