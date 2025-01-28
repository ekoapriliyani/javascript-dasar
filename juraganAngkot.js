var penumpang = ['Eko', undefined, 'Doddy'];
var tambahPenumpang = function(namaPenumpang, penumpang){
    // jika angkot kosong
    if(penumpang.length == 0) {
        // tambah penumpang di awal array
        penumpang.push(namaPenumpang);
        // kembailkan isi array dan keluar dari function
        return penumpang;
    } else {
        // telusuri seluruh kursi dari awal
        for(var i = 0; i < penumpang.length; i++) {
            // jika kursi kosong
            if(penumpang[i] == undefined) {
                // tambah penumpang di kursi tersebut
                penumpang[i] = namaPenumpang;
                // kembalikan isi array dan keluar dari function
                return penumpang;
            }
            // jika sudah ada nama yang sama
                // tampilkan pesan kesalahannya
                // kembalikan isi array dan keluar dari function
            // jika seluruh kursi terisi
            else if(i == penumpang.length - 1) {
                // tambah penumpang di akhir array
                penumpang.push(namaPenumpang);
                // kembalikan isi array dan keluar dari function
                return penumpang;
            }
        }
    }

}
