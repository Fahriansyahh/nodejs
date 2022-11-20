//! materi mengenai express pada nodejs
//! jika ingin mengunakan express selalu liat ke dokumentasi expessjs.com

const express = require('express')
const app = express()

//! ketika ingin mengunakan send file harus ada root nya yangbernama __dirname atau directory name
//! ketika ingin mengunakan send file harus ada root nya yangbernama __dirname atau directory name
//!apt .use adalah ketika kita menulisakn sesuta pada root yang salah 


app.get('/', (req, res) => {
    //! res send untuk mengirim
    res.send('ini adalah pembuatan web sederhana mengunakan xpresjs')
})
app.get('/jajal/:id', (req, res) => {
    //! cara pemangilan di browser http://localhost:3000/jajal/jajal tentang params
    //! cara pemangilan di browser tentang query http://localhost:3000/jajal/jajal?p=asdada
    res.send(`nama id anda adalah : ${req.params.id} <br> nama anda : ${req.query.p}`);
})

app.get('/index', (req, res) => {
    res.sendFile('./index.html', { root: __dirname })
})
app.get('/contact', (req, res) => {
    res.sendFile('./contact.html', { root: __dirname })
})
app.use('/', (req, res) => {
    res.send('ini adalah web yang salah')
    res.status(404)
})


    .listen('3000', () => {
        console.log('httpp telah conect');
    })