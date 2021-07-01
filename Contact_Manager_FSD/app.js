
const express = require('express');
const app = express();
// const mongodb = require('mongodb');
// const mongoClient = mongodb.MongoClient;

//Connection URL
//const url = "mongodb://localhost:27017";

//Database name
// mongoClient.connect(url, (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         let testdb = data.db('testdb');
//         //To insert new document(data)
//         let newContact = { id: 123, name: "Ravi" };
//         testdb.collection('contacts').insertOne(newContact, (err, res) => {
//             if (err) {
//                 console.log(err);
//             }
//             else {
//                 testdb.collection('contacts').find({}).toArray().then((data) => {
//                     console.log(data);
//                 });
//             }
//         })

//     }
// })

app.use('/', require('./api'));

module.exports = app;