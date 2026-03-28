// Mengambil elemen-elemen yang dibutuhkan
const editor = document.getElementById('editor-kecil');
const displayHk = document.getElementById('hk');
const displayHb = document.getElementById('hb');
const displayHf = document.getElementById('hf');
const btnBesar = document.getElementById('huruf-besar');
const btnKecil = document.getElementById('huruf-kecil');

// Ambil tombol mode
const btnModeTerang = document.getElementById('mode-terang');
const btnModeGelap = document.getElementById('mode-gelap');
const btnModeSepia = document.getElementById('mode-sepia');

// 1. Fungsi Statistik
editor.addEventListener('input', () => {
    const teks = editor.value;
    displayHk.innerText = (teks.match(/[a-z]/g) || []).length;
    displayHb.innerText = (teks.match(/[A-Z]/g) || []).length;
    displayHf.innerText = (teks.match(/[a-zA-Z]/g) || []).length;
});

// 2. Manipulasi Teks 
btnBesar.addEventListener('click', () => {
    editor.value = editor.value.toUpperCase();
    editor.dispatchEvent(new Event('input'));
});

btnKecil.addEventListener('click', () => {
    editor.value = editor.value.toLowerCase();
    editor.dispatchEvent(new Event('input'));
});


// Fungsi Mode Gelap (dark-mode)
btnModeGelap.addEventListener('click', () => {
    document.body.className = '';
    document.body.classList.add('dark-mode');
});

// Fungsi Mode Sepia (sepia-mode)
btnModeSepia.addEventListener('click', () => {
    document.body.className = '';
    document.body.classList.add('sepia-mode');
});

// Fungsi Mode Terang (light-mode / default)
btnModeTerang.addEventListener('click', () => {
    document.body.className = '';
});