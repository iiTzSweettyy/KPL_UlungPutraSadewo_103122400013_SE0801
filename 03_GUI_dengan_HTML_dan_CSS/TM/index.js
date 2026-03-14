// Mengambil elemen-elemen yang dibutuhkan
const editor = document.getElementById('editor-kecil');
const displayHk = document.getElementById('hk');
const displayHb = document.getElementById('hb');
const displayHf = document.getElementById('hf');
const btnBesar = document.getElementById('huruf-besar');
const btnKecil = document.getElementById('huruf-kecil');

// 1. Fungsi Menghitung Huruf Kecil (dan statistik lainnya)
editor.addEventListener('input', () => {
    const teks = editor.value;
    const jumlahKecil = (teks.match(/[a-z]/g) || []).length;
    const jumlahBesar = (teks.match(/[A-Z]/g) || []).length;
    const totalHuruf = (teks.match(/[a-zA-Z]/g) || []).length;

    displayHk.innerText = jumlahKecil;
    displayHb.innerText = jumlahBesar;
    displayHf.innerText = totalHuruf;
});

// 2. Mengubah ke Huruf Besar (Uppercase)
btnBesar.addEventListener('click', () => {
    editor.value = editor.value.toUpperCase();
    editor.dispatchEvent(new Event('input'));
});

// 3. Mengubah ke Huruf Kecil (Lowercase)
btnKecil.addEventListener('click', () => {
    editor.value = editor.value.toLowerCase();
    editor.dispatchEvent(new Event('input'));
});