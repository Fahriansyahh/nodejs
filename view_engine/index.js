const express = require('express')
const { arrayBuffer } = require('stream/consumers')
const app = express()


//! belajar mengenai view engine
//! view engine adalah template yang ada pada express js
//! pada kali ini kita beljar template engine ejs

app.set('view engine', 'ejs')
app.get('/', (req, res) => {

    res.send('jalan kan')

})
app.get('/jajal/:id?', (req, res) => {
    res.send(` 
    ini adalah params ke :${req.params.id} yang memiliki query ${req.query.p}`)
})
app.get('/mahasiswa', (req, res) => {
    const mhs = [{
        nama: 'fahri',
        kelas: '12',
        umur: '19',
        jurusan: 'multimedia'


    }, {
        nama: 'iyan',
        kelas: '12',
        umur: '19',
        jurusan: 'multimedia'


    }, {
        nama: 'rian',
        kelas: '12',
        umur: '19',
        jurusan: 'multimedia'


    }]

    res.render('mahasiswa', { mhs, judul: 'web mahasiswa' })

})
app.get('/contact', (req, res) => {

    res.render('contact', { judul: 'web contact' })
})

app.get('/index', (req, res) => {
    res.render('index', {
        judul: 'web index'
    })

})

app.use('/', (req, res) => {
    res.send('tidak ada halaman ini')
}).listen('3000', () => {
    console.log('login to browser');
})

