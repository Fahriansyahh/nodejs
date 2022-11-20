//! cara agar database bisa connect ke nodejs dan bisa menambah data mengubah,menampilkan,menghapusz

const { MongoClient } = require("mongodb");
const uri = 'mongodb://127.0.0.1:27017'
const dbName = 'mhs'
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

client.connect((error) => {
    if (error) {
        console.log(error);
    }
    //! membuat database
    const db = client.db(dbName)
    //!memanambahkan database

    //? db.collection('data_mahasiswa').insertMany([
    //?     { negara: 'jerman', sejarah: 'nazi' },
    //?     { negara: 'vietnam', sejarah: 'vukong' }
    //? ]).then(result => {
    //?     console.log(result);
    //? }).catch(err => {
    //?     console.log(err);
    //? })


    //!melihat semua data mengunakan find
    // db.collection('data_mahasiswa').find().toArray((error, result) => {
    //     if (error) {
    //         console.log(error);
    //     }
    //     console.log(result);
    // })
    //!melihat semua data mengunakan find dengan cara spesifik


    // db.collection('mahasiswa').find({ "nama": "iyan bae" }).toArray((error, result) => {
    //     if (error) {
    //         console.log(error);
    //     }
    //     console.log(result);
    // })


    //!mengubah data dengan updateOne
    // db.collection('mahasiswa').updateOne({
    //     "nama": "rian"
    //! diobject yang kedua atau yang akan menjadi penganti harus memiliki object $set:{data}
    // }, { $set: { nama: 'iyan sempaluye' } })


    //! mengubah data dengan updateMany
    // db.collection('mahasiswa').updateMany({
    //     nama: 'iyan sempaluye'
    // }, { $set: { nama: 'ini sama bang iyan' } }).then(result => {
    //     console.log(result)
    // }).catch(err => console.log(err))
    //!menghapus data mengunakan deleteOne

    // db.collection('mahasiswa').deleteOne({ nama: 'ini sama bang iyan' }).then(result => {
    //     console.log(result);
    // }).then(err => {
    //     console.log(err);
    // })
    //!menghapus datamengunakan deleteMany
    // db.collection('mahasiswa').deleteMany(
    //     { nama: 'rian Ganteng' }
    // ).then((result) => {
    //     console.log(result);
    // }).catch((err) => {
    //     console.log(err);
    // });
})