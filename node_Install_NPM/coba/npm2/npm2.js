//! ada dua metodfe untuk menjalankan module npm node mon
//! 1 jalnkan di terminal dengan menulisakan kata nodemon
//! 2 jalankan di file json dengan mengunakn kata npm run jalan tapi tulisakn dulu di file jalan kalo tidak file itu idak akan jalan

//! saya rasa validator cocok unutk if yang di isi bollean true an false
// npm versi
const validator = require('validator');
//? pehatikan cara penulisan pemakian jika tidak bisa liat google
//! untuk memnentukan ini email atau bukan
console.log(validator.isEmail('fahri@gmail.com'))
//!untuk menentukan minimal dan maxsimal jumlah huruf
const leng = validator.isLength('daaasdadsadsaas', '11', '19');
console.log(leng)
//!untuk menentukan nomor ini dari manah
console.log(validator.isMobilePhone('085710247164', 'id-ID'));
//! untuk menentukan ini bulangan bulat atau bukan
console.log(validator.isInt('21321'));
//! perikasa apakah string huruf kecil
console.log(validator.isLowercase('sdadsadasE'));
//!memnetukn apakah string float atau bukan jika bukan akan menghailkan nilai nan
console.log(validator.toFloat('1.1'));


