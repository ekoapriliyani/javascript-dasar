// var x = 10;
//     console.log('Hello World');
//     console.log('isi dari variable x adalah ' + x);


// var s = '';

// for(var i = 0; i < 5; i++){
//     for(var j = 0; j <= i; j++){
//         s += '*';
//     }
//     s += '\n';
// }
// console.log(s);

// function jumlahVolumeDuaKubus(a,b) {
//     var volumeA;
//     var volumeB;
//     var total;

//     volumeA = a * a * a;
//     volumeB = b * b * b;

//     total = volumeA + volumeB;

//     return total;
// }

// alert(jumlahVolumeDuaKubus(8, 3));
// alert(jumlahVolumeDuaKubus(10, 15));

// function tambah(a,b) {
//     return a + b;
// }

// function kali(a,b) {
//     return a * b;
// }


// var hasil = kali(tambah(1,2), tambah(3,4));
// console.log(hasil);

function tambah() {
    var hasil = 0;
    for(var i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }
    return hasil;
}

var coba = tambah(1,2,3,4);
console.log(coba);