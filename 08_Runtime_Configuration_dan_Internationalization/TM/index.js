require('dotenv').config();
const BASE_API = process.env.BASE_API;

async function getExchangeRate(amount) {
    try {
        const response = await fetch(BASE_API);
        const data = await response.json();
        
        const date = new Date(data.date);
        const rates = data.idr;

        // Hitung konversi
        const cnhValue = amount * rates.cnh;
        const eurValue = amount * rates.eur;

        // Formatter Mata Uang 
        const idrFormat = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(amount);
        const cnhFormat = new Intl.NumberFormat('zh-CN', { style: 'currency', currency: 'CNH' }).format(cnhValue);
        const eurFormat = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(eurValue);

        // Formatter Tanggal 
        const dateFormat = new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }).format(date);

        console.log(`Kurs ${idrFormat} pada ${dateFormat} adalah ${cnhFormat.replace('CNH', 'CNH ')} dan ${eurFormat}`);
        
    } catch (error) {
        console.error("Gagal mengambil data:", error.message);
    }
}

async function runTests() {
    await getExchangeRate(25000);
    await getExchangeRate(50000);
    await getExchangeRate(100000);
}

runTests();