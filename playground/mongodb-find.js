//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

const obj = new ObjectID();
console.log(obj);



MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // USING THE TO ARRAY METHOD
    // db.collection('Todos').find({
    //      _id: new ObjectID('5b806eee82a43c31cc5a4dc7')
    //     }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch Todos', err);
    // });

    // USING THE COUNT METHOD
//     db.collection('Todos').find().count().then((count) => {
//        console.log(`Todos count: ${count}`);
       
//    }, (err) => {
//        console.log('Unable to fetch Todos', err);
//    });

   db.collection('Users').find({
         name: 'Gelsey Klein'
        }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch Users', err);
    });

    //client.close();

    
});