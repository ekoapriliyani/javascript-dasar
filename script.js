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

function jumlahVolumeDuaKubus(a,b) {
    var volumeA;
    var volumeB;
    var total;

    volumeA = a * a * a;
    volumeB = b * b * b;

    total = volumeA + volumeB;

    return total;
}

alert(jumlahVolumeDuaKubus(8, 3));
alert(jumlahVolumeDuaKubus(10, 15));