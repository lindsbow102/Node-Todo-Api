const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert Todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2)); // ops attribute will store all of the docs that were inserted
    // });

    db.collection('Users').insertOne({
        name: 'Lindsey Bowen',
        age: 38,
        location: 'Gilbert, AZ'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert User', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    })

    client.close(); // Closes connection with MongoDB server
});