//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

const obj = new ObjectID();
console.log(obj);

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  { useNewUrlParser: true },
  (err, client) => {
    if (err) {
      return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");
    const db = client.db("TodoApp");

    // Find one and update
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5b86e6176f1c40faec0394ed"
    // )}, {
    //    $set: {
    //     completed: true
    //    }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    // db.collection("Users")
    //   .findOneAndUpdate(
    //     {
    //       _id: new ObjectID("5b8070a384ed99325f74500f")
    //     },
    //     {
    //       $set: {
    //         name: "Lindsey"
    //       },
    //       $inc: {
    //         age: 1
    //       }
    //     }, {
    //       returnOriginal: false
    //     }).then(result => {
    //     console.log(result);
    //   });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5b86f3716f1c40faec039da7")
    }, {
        $set: {
            name: 'Wendy'
        },
        $inc: {
            age: -3
        }
    }, {
        returnOriginal: false
    }).then(result => {
        console.log(result);
    });

    //client.close();
  });
