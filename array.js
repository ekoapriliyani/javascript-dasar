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
// var arr = ["Eko", "Apriliyani", "Maziyyatun", "Nisa"];
// arr.unshift("Mareko", "Doddy");
// arr.shift();
// console.log(arr);

// 4. splice
// var arr = ["Eko", "Apriliyani", "Maziyyatun", "Nisa"];
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
// arr.splice(2, 0, 'Intan');
// console.log(arr.join(' - '));

// 5. slice
// slice(awal, akhir)
// var arr = ["Eko", "Apriliyani", "Maziyyatun", "Nisa"];
// var arr2 = arr.slice(1,3);
// console.log(arr2.join(' - '));

// 6. foreach
// var angka = [1,2,3,4,5,6,7,8];
// var nama = ["Eko", "Apriliyani", "Maziyyatun", "Nisa"];
// angka.forEach(function(e) {
//     console.log(e);
// });

// nama.forEach(function(e, i) {
//     console.log('Mahasiswa ke-' + (i+1) + ' adalah : ' + e);
// });


// 7. map
// var angka = [1,2,3,4,5,6,2,1];
// var angka2 = angka.map(function(e) {
//     return e * 2;
// });
// console.log(angka2.join(' - '));



// 8. sort
var angka = [1,2,3,4,5,6,2,1];
angka.sort();
console.log(angka);

var angka2 = [2,3,10,1,20,5,2,6,7,8];
angka2.sort(function(a,b){
    return a-b;
});
console.log(angka2.join(' - '));