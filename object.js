// membuat object


// Object Literal
var mhs1 = {
    nama : "Eko",
    nim : 312310675,
    email : "ekoapriliyani@gmail.com",
    jurusan : "Teknik Informatika"
}

var mhs2 = {
    nama : "Nisa",
    nim : 312310676,
    email : "maziyyanisa@gmail.com",
    jurusan : "Manajemen"
}

// Function Declaration
function buatObjectMahasiswa(nama, nim, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nim = nim;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = buatObjectMahasiswa('Doddy', 6876786, 'doddy@gmail.com', 'Teknik Mesin');

var mhs4 = buatObjectMahasiswa('Denny Caknan', 4545252, 'dennycaknan@gmail.com', 'Teknik Vokal');


// Constructor
function Mahasiswa(nama, nim, email, jurusan) {
    this.nama = nama;
    this.nim = nim;
    this.email = email;
    this.jurusan = jurusan;
}

var mhs5 = new Mahasiswa('Mareko', 5452525, 'mareko@gmail.com', 'Teknik Pangan');