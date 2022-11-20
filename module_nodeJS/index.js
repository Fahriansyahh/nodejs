//!aada tiga macam module dalam node js
//! 1.core modules :dalah modul yang sudah dimiliki oleh node js
//! 2.lokal module :ini adalah modul yang kita bikin sendiri mengunakan require( ) dan modul.exports =
//! third party modules: module yang ada di npm

//! urutan module nomor 1 2 dan 3
//! node js membaca dari local jika di local tidak ada reuire yang di tuju maka dia akan mencari ke corre module jika core module tidak ada maka node js akan mencari ke module third party ini adalah fundamental cara node berkerja

const fs = require('fs')//! ini adalah core module
const index = require('./script') //! ini adalah local module
const moment = require('moment')
index.mhs(index.nama, index.kelas)
const dayaTahan = index.obj.makan()
const energiSKRG = index.obj.energi
console.log(dayaTahan);
console.log(energiSKRG);
console.log(fs.cp);
console.log(moment);
