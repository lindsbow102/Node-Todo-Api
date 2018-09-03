const mongoose = require('mongoose');

mongoose.Promise = global.Promise;  // We want to use the mongoose promise library even though it supports callbacks
mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

module.exports = { mongoose };