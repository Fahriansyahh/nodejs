const umur = 19
console.log('hay');
//! module.exports untuk mengexports segala macam jenis function array object dll pastikan jika anda memaki method ini sudah pasti anda membuat require pada javascript yang sedang meneungu expor ini 
function saya(ok, b) {
    return console.log(`hallo nama saya ${ok} umur saya ${umur}`);
}
const arr = ['fahri', 'iyan', 'yan']
module.exports = umur
module.exports = saya
