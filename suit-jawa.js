var ulang = true;
while(ulang){
    // input player
    var p = prompt('masukkan pilihan : \nContoh: gajah, semut, orang');

    // bangkitkan bilangan random
    comp = Math.random();

    if(comp <= 0.4){
        comp = 'orang';
    } else if(comp > 0.4 && comp <= 0.7){
        comp = 'semut';
    } else {
        comp = 'gajah';
    }





    // rules
    var hasil = '';

    if(p == comp){
        hasil = 'SERI !';
    } else if(p == 'orang'){
        // if(comp == 'gajah'){
        //     hasil = 'KALAH !';
        // } else {
        //     hasil = 'MENANG !';
        // }
        hasil = (comp == 'gajah') ? 'KALAH !' : 'MENANG !';
    } else if(p == 'semut'){
        if(comp == 'gajah'){
            hasil = 'MENANG !';
        } else {
            hasil = 'KALAH !';
        }
    } else if(p == 'gajah'){
        if(comp == 'orang'){
            hasil = 'MENANG !';
        } else {
            hasil = 'KALAH !';
        }
    } else {
        hasil = 'pilihan kamu salah'
    }

    alert('Kamu memilih : ' + p + ' dan Komputer memilih ' + comp + ' hasilnya ' + hasil);



    ulang = confirm('lagi?');
}

alert('terima kasih');
