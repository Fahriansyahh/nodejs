


const fs = require('fs')
//! buat function data web yang berfungi untuk melihat file
function dataWeb(name, res) {
    return fs.readFile(name, (err, data) => {
        if (err) {
            res.writeHead(404)
            res.write('gagal menerima')
            res.end()
        } else {
            res.write(data)
        }
        res.end()
    })
}
//! buat function buat yang berfungsi untuk ketika url di tuliskan akan mengarah kemena
function buat(req, res) {
    const url = req.url
    switch (url) {
        case '/coba':
            res.write('ini adalah halaman coba')
            res.end()
            break;
        case '/coba1':
            //!panggil data web untuk mengexekusi html di file sistem

            dataWeb('./index.html', res)
            break;
        case '/coba2':
            res.write(`<h1>ini adalah file ${url}</h1>`)
            res.end()
            break;
        //!panggil data web untuk mengexekusi html di file sistem
        default: dataWeb('./text.html', res)
            break
    }
}

module.exports = { buat }