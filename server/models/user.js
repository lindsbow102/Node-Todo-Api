const mongoose = require('mongoose');
const validator = require('validator');

// UserAuth = {
//     email: 'lindsey@fakemail.com',
//     password: 'ldkjsjdidjdksldidkke',
//     tokens: [{
//         access: 'auth',
//         token: 'aksjdkflidjskdlpiekdjs'
//     }]
// }

const User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minLength: 1,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email address'
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
});

module.exports = { User };