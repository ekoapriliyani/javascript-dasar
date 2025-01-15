// game tebka angka

var lagi = true;

while(lagi) {
    var comp = Math.floor(Math.random()*10) + 1;

    var kesempatan = 3;

    while(kesempatan > 0){

        if(kesempatan == 3){
            alert('Selamat Datang di Game Tebak Angka \nAnda memiliki 3 kesempatan');
        } else{
            alert('Anda masih punya ' + kesempatan + ' kesempatan');
        }

        var p = prompt('masukkan angka tebakanmu: 1-10');

        if(p == comp){
            alert('ANDA BENAR!');
            kesempatan = 0;
        } else if(p > comp) {
            alert('tebakan anda terlalu tinggi');
            kesempatan--;
        } else {
            alert('tebakan anda terlalu rendah');
            kesempatan--;
        }
    }
    alert('Jawabannya adalah ' + comp);

    lagi = confirm('anda mau mengulangi permainan lagi?');
}

alert('Terima Kasih');