const { ObjectID } = require('mongodb');

const { mongoose } = require ("./../server/db/mongoose");
const { Todo } = require ('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove
// DeprecationWarning: collection.remove is deprecated. Use deleteOne, deleteMany, or bulkWrite instead
// remove() is a deprecated function and has been replaced by deleteOne() (to delete a single document) and deleteMany() (to delete multiple documents)
// findOneAndDelete() should be able to delete on _id.

// Todo.deleteMany({}).then((result) => {
//     console.log(result);
// })

// Todo.findOneAndDelete('5b9ffead6f1c40faec044553').then((todo) => {
//     console.log(todo);
// });

Todo.deleteOne({_id: '5b9fff406f1c40faec044591'}).then((doc) => {
    console.log(doc);
});