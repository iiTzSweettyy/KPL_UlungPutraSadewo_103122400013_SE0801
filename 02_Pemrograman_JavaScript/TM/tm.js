function fizzBuzz(arr) {
  if (!Array.isArray(arr)) {
    return "Input tidak valid";
  }

  let hasil = "";

  for (let i = 0; i < arr.length; i++) {
    let angka = arr[i];
    let teks = "";

    if (angka % 14 === 0) {
      teks = "FizzBuzz";
    } else if (angka % 2 === 0) {
      teks = "Fizz";
    } else if (angka % 7 === 0) {
      teks = "Buzz";
    } else {
      teks = angka.toString();
    }

    hasil += teks;

    if (i < arr.length - 1) {
      hasil += " ";
    }
  }

  return hasil;
}

module.exports = fizzBuzz;