//! MENGENAL MACAM MACAM MODUL SERING SERING BACA MODUL INI NANTI BERADA DI NODE JS DI NAVBAR DOTCH PENTING! INI ADALAH FUNDAMENTAL MODUL

// const { type } = require('os')


// console.log(fs);
// !menulisakan fs secara syncronus
// try {
//? cara kerja masukan nama file yang mau di buat lalu buat isinya
//     fs.writeFileSync('data/text.txt', 'hallo nama saya fahriansyah')

// } catch (err) {
//     //? ini jika terjadi error
//     console.log(err);
// }

//!menulisakan fs secara asyncrounus
//?cara kerja sama cuma berbeda di callback
// fs.writeFile('text.txt', 'hallo file ini di tulis dengan asyncrounus', (err) => {
//     //?di callback ini bisa di jadikan macam mcam contoh membuat error dll
//     return console.log(err)
// })
//!membuat mkdir secara syncrounus
//? masukan file yang mau dibuat
//? fs.mkdirSync('data')
//!membuat mkdir memngunakan asyncrounus
// //?masukan file yang mau dibuat
// fs.mkdir('data1', (err) => {
//     //?jika nama file ada yang sama dia akan menampilkan error
//     console.log('file ini error');
// })

//! read file sync
//? file ini jika tidak dikembalikan menjadi string akan menjadi buffer
// const liat = fs.readFileSync('./text.txt', 'utf-8')
// console.log(liat);


//! read menggunakan asyncrounus
//?ini adalah bersifat asyn setelah di inilisasis file dan agar tidak menjadi bufer kita haruus mengasi callback dan mengasi pengkondisian jika error akan keman dan jika tidak akan kemana
// const liatasyn = fs.readFile('./text.txt', 'utf-8', (err, data) => {
// //!cara saya
//? if (err) {
// ?    return console.log('data ini error : ' + err)
//? }
//? else if (data) {
// ?    return console.log(data);
//? }
//! cara cepat tapi penuh makna
//     if (err) throw console.log('file ini salah :' + err);
//     console.log(data);
// })
// console.log(liatasyn)
//! readline adalah pangilan ketika di terminal cara ini mengunakan cara saya
// const readline = require('readline')

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
// //? menyleksi pengunjung yang datang
// rl.question('masukan nama anda :', (nama) => {
//     //?user yang benar
//     if (nama == 'fahri') {
//         console.log(`selamat datang ${nama}`)
//         //?user yang salah
//     }
//     else {
//         console.log('ini bukan anda');
//         //?jika user salah akan di masukan kedalam json
//         ambilData(nama)
//     }
//     //? ini untuk panguilan telepon
//     pangil()

// })

// function pangil() {
//     rl.question('masukan no tlp anda :', (tlp) => {
//         if (tlp.length >= 11) {
//             console.log(`no tlp anda adalah ${tlp}`)


//         }
//         else {
//             console.log('nomor ini bukan 12 angka');

//         }
//         rl.close()

//     })
// }

// function ambilData(nama) {
//     fs.writeFileSync('data1/data.json', `{

//         "namaPenyusup":"${nama}"
//     }`)

// }
//! ini adalah versi programing unpas
const fs = require('fs')

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('masukan nama anda : ', (nama) => {
    rl.question('masukan no tlp anda : ', (tlp) => {
        const contact = { nama, tlp }
        const file = fs.readFileSync('data/tlp.json', 'utf-8')
        const contacts = JSON.parse(file)
        contacts.push(contact)
        //! untuk mengubah contact menjadi string
        fs.writeFileSync('data/tlp.json', JSON.stringify(contacts))
        rl.close()
    })
})