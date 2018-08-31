const mongoose = require('mongoose');

mongoose.Promise = global.Promise;  // We want to use the mongoose promise library even though it supports callbacks
mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

const Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

// Use constructor function to declare new todo
const newTodo = new Todo({
    text: 'Pay Band fees',
    completed: true,
    completedAt: 20
});

// Need to call save in order to actually send data to mongo
newTodo.save().then((doc) => {
    console.log(`Saved Todo: ${doc}`);
}, (e) => {
    console.log('Unable to save Todo');
});

const otherTodo = new Todo({
    text: 'Get flu shot',
    completed: true,
    completedAt: 23000
});

otherTodo.save().then((doc) => {
    console.log(`Saved other todo: ${doc}`);
}, (e) => {
    console.log('Unable to save other todo');
});

