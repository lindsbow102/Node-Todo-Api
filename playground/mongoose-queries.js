const { ObjectID } = require('mongodb');

const { mongoose } = require ("./../server/db/mongoose");
const { Todo } = require ('./../server/models/todo');
const { User } = require('./../server/models/user');

// const id = '5b91686de701c8147fa89076';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// // Todo Find
// Todo.find({
//     _id: id // Mongoose takes this string, turns it into an object ID, THEN run the query (no need to manually conver it anymore) 
// }).then((todos) => {
//     console.log('Todos:', todos);
// }); // Will return an array


// // Todo Find One
// Todo.findOne({
//     _id: id  
// }).then((todo) => {
//     console.log('Todo:', todo);
// });  // Will return one document instead of an array


// // Todo Find By ID
// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('ID not found');
//     }
//     console.log('Todo by id:', todo);
// }).catch((e) => console.log(e));

const id = '5b917a126f1c40faec041476';

User.findById(id).then((user) => {
    if(!user) {
        return console.log('User not found');
    }
    console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));