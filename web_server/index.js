//! sebelum memanggil dan ke google pastikan anda masuk ke node dan pastikan anda belum kluar atau blum ctrl c agar node di jalankan

const http = require('http')
const simpan = require('./simpan')



//! ini adalh jenis core module http create serverr = membuat server
http.
    createServer((req, res) => {
        //! di sini ada modul writeHead = menulis kepala bisa dibilang menulis html
        //! bila angkanya 200 berarti ok bila angka 400 tidak   
        res.writeHead(200, {
            'content-Type': 'text.html'
        })
        //! lalu di sini kita melakukan require 
        simpan.buat(req, res)
        //! 3000port batas port 60000
    }).listen(3000, () => {
        console.log('eksekusi web server');
    })
