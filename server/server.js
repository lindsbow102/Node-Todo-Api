const mongoose = require('mongoose');

mongoose.Promise = global.Promise;  // We want to use the mongoose promise library even though it supports callbacks
mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

const Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minLength: 1,  // Prevents mongoDB from accepting an empty string
        trim: true //Cuts out any white space before or after text
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

// Use constructor function to declare new todo
// const newTodo = new Todo({
//     text: 'Pay Band fees',
//     completed: true,
//     completedAt: 20
// });

// // Need to call save in order to actually send data to mongo
// newTodo.save().then((doc) => {
//     console.log(`Saved Todo: ${doc}`);
// }, (e) => {
//     console.log('Unable to save Todo');
// });

// const otherTodo = new Todo({
//     text: ' Edit this video '
// });

// otherTodo.save().then((doc) => {
//     console.log(`Saved other todo: ${doc}`);
// }, (e) => {
//     console.log('Unable to save other todo');
// });

const User = mongoose.model('User', {
    email: {
        type: String,
        require: true,
        trim: true,
        minLength: 1
    }
});

const newUser = new User({
    email: 'lindsey@test.com'
});

newUser.save().then((doc) => {
    console.log(`Saved new user: ${doc}`);
}, e => {
    console.log('Unable to save User', e);
});

