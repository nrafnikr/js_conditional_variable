// Conditional Variable
let number = 3;
let info = number > 15 ? "Bilangan Prima" : "Bilangan Ganjil";
console.log(info);

let timeAnd = number < 15 && "Bilangan Ganjil";
let timeOr = number > 15 || "Ini Bukan Bilangan";
console.log(timeAnd);
console.log(timeOr);



// MAP & Filter
let listProduct = [
    {
        nama: "Beras",
        harga: 50000
    },
    {
        nama: "Mie Instant",
        harga: 10000
    },
    {
        nama: "Gula",
        harga: 20000
    },
    {
        nama: "Susu",
        harga: 45000
    }
];

let listNama = listProduct.map((product) => product.nama);
console.log(listNama);

let sembako = listProduct.filter((product) => product.harga > 30000);
console.log(sembako);
