// game tebakan angka
var lagi = true;

while(lagi){

    var comp = Math.floor(Math.random() * 10) + 1;
    
    var kesempatan = 3;

    while(kesempatan > 0){
        if(kesempatan == 3){
            alert('Selamat Datang di Game Tebakan Angka. \nAnda memiliki ' + kesempatan + ' kesempatan');
        } else {
            alert('kamu masih punya ' + kesempatan + ' kesempatan, ayo coba lagi!');
        }

        var p = prompt('pilih angka : 1 - 10');

        if(p == comp){
            alert('KAMU BENAR');
            kesempatan = 0;
        } else if(p < comp){
            alert('Tebakannya terlalu rendah, silahkan coba lagi');
            kesempatan--;
        } else {
            alert('Tebakannya terlalu tinggi, silahkan coba lagi');
            kesempatan--;
        }
    }
    alert('Jawabannya adalah ' + comp);

    lagi = confirm('apakah kamu ingin mengulangi lagi?');
}

alert('terima kasih');