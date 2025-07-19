// Simple test script - copy paste di browser console setelah import
// atau jalankan langsung untuk create test data

const testArticles = [
  {
    title: "Perubahan Regulasi Hukum Bisnis 2024",
    excerpt: "Pembaruan terbaru dalam regulasi hukum bisnis yang perlu diketahui oleh pengusaha dan perusahaan di Indonesia.",
    content: `
      <h2>Pendahuluan</h2>
      <p>Tahun 2024 menandai era baru dalam regulasi hukum korporasi di Indonesia. Pemerintah telah mengeluarkan serangkaian peraturan baru yang akan berdampak signifikan terhadap cara perusahaan beroperasi.</p>
      
      <h2>Perubahan Utama</h2>
      <p>Beberapa perubahan kunci yang perlu diperhatikan:</p>
      <ul>
        <li><strong>Transparansi Keuangan:</strong> Peningkatan standar pelaporan keuangan</li>
        <li><strong>Tata Kelola Perusahaan:</strong> Penguatan peran komisaris independen</li>
        <li><strong>Compliance Digital:</strong> Kewajiban implementasi sistem compliance berbasis teknologi</li>
      </ul>
      
      <h2>Kesimpulan</h2>
      <p>Perubahan ini merupakan tantangan sekaligus peluang bagi perusahaan untuk meningkatkan standar tata kelola dan daya saing.</p>
    `,
    category: "Hukum Korporasi",
    author: "Habibullah, S.H., M.H.",
    slug: "perubahan-regulasi-hukum-bisnis-2024",
    imageUrl: "/placeholder.jpg",
    publishedAt: new Date()
  },
  {
    title: "Tips Menghindari Sengketa Kontrak Bisnis",
    excerpt: "Panduan praktis untuk menyusun kontrak bisnis yang solid dan menghindari potensi sengketa di kemudian hari.",
    content: `
      <h2>Pentingnya Kontrak yang Solid</h2>
      <p>Kontrak bisnis yang solid adalah fondasi dari setiap kerjasama yang sukses. Untuk menghindari sengketa, perhatikan beberapa aspek penting berikut.</p>
      
      <h2>Tips Utama</h2>
      <ol>
        <li><strong>Klarifikasi Kewajiban:</strong> Pastikan semua kewajiban dijelaskan dengan detail</li>
        <li><strong>Mekanisme Penyelesaian:</strong> Sertakan klausul penyelesaian sengketa</li>
        <li><strong>Force Majeure:</strong> Antisipasi kejadian di luar kendali</li>
      </ol>
      
      <p>Dengan memperhatikan aspek-aspek ini, risiko sengketa dapat diminimalisir secara signifikan.</p>
    `,
    category: "Kontrak Bisnis",
    author: "Sahura, S.H., LL.M.",
    slug: "tips-menghindari-sengketa-kontrak-bisnis",
    imageUrl: "/placeholder.jpg",
    publishedAt: new Date(Date.now() - 86400000)
  },
  {
    title: "Hak dan Kewajiban dalam Hukum Keluarga",
    excerpt: "Memahami hak dan kewajiban suami istri dalam perkawinan menurut hukum Indonesia.",
    content: `
      <h2>Hukum Keluarga di Indonesia</h2>
      <p>Hukum keluarga di Indonesia mengatur berbagai aspek penting dalam kehidupan berumah tangga. Pemahaman yang baik tentang hak dan kewajiban sangat penting.</p>
      
      <h2>Hak dan Kewajiban Suami Istri</h2>
      <h3>Hak Suami Istri:</h3>
      <ul>
        <li>Hak untuk dihormati dan diperlakukan dengan baik</li>
        <li>Hak atas nafkah yang layak</li>
        <li>Hak untuk mendapat perlindungan</li>
      </ul>
      
      <h3>Kewajiban Bersama:</h3>
      <ul>
        <li>Saling menghormati dan setia</li>
        <li>Bekerjasama dalam mengurus rumah tangga</li>
        <li>Mendidik dan membesarkan anak dengan baik</li>
      </ul>
    `,
    category: "Hukum Keluarga",
    author: "Sudana, S.H., M.Kn.",
    slug: "hak-dan-kewajiban-dalam-hukum-keluarga",
    imageUrl: "/placeholder.jpg",
    publishedAt: new Date(Date.now() - 172800000)
  }
]

console.log("Test articles ready:", testArticles)
console.log("To create articles, login to admin panel and use create news form.")
