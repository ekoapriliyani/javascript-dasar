// var x = 10;
//     console.log('Hello World');
//     console.log('isi dari variable x adalah ' + x);


var s = '';

for(var i = 0; i < 5; i++){
    for(var j = 0; j <= i; j++){
        s += '*';
    }
    s += '\n';
}
console.log(s);