// Buatlah array berisi 3 element tantang minuman kesukaan dan simpan ke varibale bernama listMinuman
// Ganti 2 element pertama dengan minuman kesukaan lain, dengan cara index dan penugasan
// Tambah 1 minuman di depan array

const listMinuman = ["Teh", "Kopi", "Mineral"];

listMinuman[0] = "Es Jeruk";
listMinuman.splice(1, 1, "Jus");
listMinuman.unshift("Es Teh");

console.log(listMinuman);


// Tuliskan sebuah fungsi yang menerima N bilangan dan mengembalikan nilai penjumlahan dari 1-N menggunakan input dari terminal

function sum(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

console.log(sum(65546))

function SumValueN(n) {
    if (n < 0) {
        return 0;
    }

    return (n * (n + 1)) / 2;
}

let n = 65546;

let hasil = SumValueN(n);

console.log(`Hasil penjumlahan dari 1 hingga ${n} adalah: ${hasil}`);