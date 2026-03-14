// Mengambil elemen-elemen yang dibutuhkan
const editor = document.getElementById('editor-kecil');
const displayHk = document.getElementById('hk');
const displayHb = document.getElementById('hb');
const displayHf = document.getElementById('hf');
const btnBesar = document.getElementById('huruf-besar');
const btnKecil = document.getElementById('huruf-kecil');
const btnModeTerang = document.getElementById('mode-terang');
const btnModeGelap = document.getElementById('mode-gelap');
const semuaTombol = document.querySelectorAll('button');

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

// Fungsi Mode Gelap
btnModeGelap.addEventListener('click', () => {
    // 1. Ubah background SELURUH HALAMAN
    document.body.style.backgroundColor = '#2e3443';
    document.body.style.color = 'white';

    // 2. Ubah background editor-kecil
    editor.style.backgroundColor = '#2e3443';
    editor.style.color = 'white';
    editor.style.borderColor = '#555';

    // 3. Ubah semua tombol
    semuaTombol.forEach(btn => {
        btn.style.backgroundColor = '#29ddcc';
        btn.style.border = 'none';
    });
});

// Fungsi Mode Terang
btnModeTerang.addEventListener('click', () => {
    // 1. Kembalikan background halaman
    document.body.style.backgroundColor = '#ffffff';
    document.body.style.color = 'black';

    // 2. Kembalikan editor
    editor.style.backgroundColor = '#ffffff';
    editor.style.color = 'black';
    editor.style.borderColor = '#ccc';

    // 3. Kembalikan tombol
    semuaTombol.forEach(btn => {
        btn.style.backgroundColor = '#f0f0f0';
        btn.style.border = '1px solid #bbb';
    });
});