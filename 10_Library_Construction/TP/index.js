/**
 * Pustaka utilitas teks sederhana
 */

// Fungsi untuk menghitung jumlah huruf (hanya A-Z, besar dan kecil)
export const hitungHuruf = (teks) => {
  const match = teks.match(/[a-zA-Z]/g);
  return match ? match.length : 0;
};

// Fungsi untuk menghitung jumlah kata
export const hitungKata = (teks) => {
  const bersih = teks.replace(/[^a-zA-Z\s]/g, '');
  const kata = bersih.trim().split(/\s+/);
  
  return kata[0] === "" ? 0 : kata.length;
};