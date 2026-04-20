
const sekarang = new Date();

// Gunakan Intl.DateTimeFormat dengan locale Indonesia ('id-ID')
const formatter = new Intl.DateTimeFormat('id-ID', {
  weekday: 'long', // Menampilkan nama hari
  day: 'numeric',   // Menampilkan angka tanggal 
  month: 'long',   // Menampilkan nama bulan secara lengkap 
  year: 'numeric'  // Menampilkan angka tahun 
});

const hasilFormat = formatter.format(sekarang);

console.log(hasilFormat);