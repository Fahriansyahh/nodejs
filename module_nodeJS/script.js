let nama = 'fahri'
let kelas = 12
function mhs(nama, kelas) {
    for (let a = 1; a < 10; a++) {
        console.log(`hallo nama saya ${nama} saya kelas ${kelas} dana mahasiswa kek ${a}`)
    }
}
const obj = {
    energi: 10,
    name: 'fahri',
    makan: () => {
        return console.log(`${obj.name} kamu telah makan energi kamu sekarang ${obj.energi + 10}`);
    }
}

module.exports = {
    mhs, kelas, nama,
    obj
}

    //!cara penulisan model satu persatu terhadap module
    //? module.exports.mhs = mhs
    //? module.exports.kelas = kelas
    //? module.exports.nama = nama
//!cara penulisan model object pda module
