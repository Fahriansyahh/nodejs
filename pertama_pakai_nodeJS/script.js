//!penulisan secara syncrouos pada js tentang resto
const resto = (id => {
    //? siapa ini bersifat global jadi bisa di akses dimana saja
    siapa = id == 1 ? 'sandhika' : 'galih'
    return id, siapa
})

meja1 = resto(1)
console.log(siapa)
meja2 = resto(2)
console.log(meja2)


//! penulisan secara syncrounus pada js tentang resto

const resto1 = ((id, nasi) => {
    let pelayan
    let waktu
    if (id == 1) {
        waktu = 500
        pelayan = 'fahri'
    }
    else {
        waktu = 100
        pelayan = 'rian'
    }
    setTimeout(() => {
        let pas = pelayan
        nasi(pas)
    }, waktu)
    function nasi(pas) {
        if (id == 1) {
            console.log(`${pas} memesan nasi goreng`);
        }
        else if (id != 1) {
            console.log(`${pas} memesan es teh manis`);

        }
    }
})
console.log('buka');
resto1(1)
resto1(2)
console.log('tutup');
//! sorce code asyncronus pada web programing unpas
const kafe = ((no, cb) => {
    let time = no === 1 ? 3000 : 1500
    setTimeout(() => {
        const name = no === 1 ? 'fahri' : 'rian'
        cb({ no, name })
    }, time)
})
const user1 = kafe(1, (user) => {
    console.log(user)
})
const user2 = kafe(2, (user) => {
    console.log(user)
})