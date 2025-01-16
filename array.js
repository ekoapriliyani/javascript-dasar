// manipulasi Array

// 1. Menambahkan isi array
// var arr = ["a", 1, true];
// console.log(arr);

// 2. Menghapus isi array
// var arr = ["Eko", "Apriliyani", "Maziyyatun", "Nisa"];
// arr[2] = undefined;
// console.log(arr);

// 3. Menampilkan isi array
// var arr = ["Eko", "Apriliyani", "Maziyyatun", "Nisa"];

// for(var i = 0; i < arr.length; i++){
//     console.log('Mahasiswa ke ' + (i+1)  + ' : ' + arr[i]);
// }


// Method pada array
// 1. join
// var arr = ["Eko", "Apriliyani", "Maziyyatun", "Nisa"];
// console.log(arr.join(' - '));

// 2. push & pop
// var arr = ["Eko", "Apriliyani", "Maziyyatun", "Nisa"];
// arr.push("Doddy", "Marjuki");
// arr.pop();
// console.log(arr);

// 3. unshift & shift
var arr = ["Eko", "Apriliyani", "Maziyyatun", "Nisa"];
arr.unshift("Mareko", "Doddy");
arr.shift();
console.log(arr);