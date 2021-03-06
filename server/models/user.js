const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

const UserSchema = new mongoose.Schema({
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

// Instance method
UserSchema.methods.toJSON = function () {
    const user = this;
    const userObject  = user.toObject();

    return _.pick(userObject, ['_id', 'email']); 
};

// Instance method
UserSchema.methods.generateAuthToken = function () {
    const user = this; // Arrow functions do not bind "this".  Must use regular functions
    const access = 'auth';
    const token = jwt.sign({
        _id: user._id.toHexString(),
        access
    }, 'abc123').toString();

    //user.tokens.concat([{access, token}]);
    user.tokens.push({access, token});

    return user.save().then(() => {
        return token;
    });
};

// Model method
UserSchema.statics.findByToken = function (token) {
    const User = this;
    let decoded;

    try {
        decoded = jwt.verify(token, 'abc123');
    } catch (e) {
        return Promise.reject();
    }

    return User.findOne({
        '_id': decoded._id,
        'tokens.token': token, // quotes are required when there is a dot in the value
        'tokens.access': 'auth'
    })
}

const User = mongoose.model('User', UserSchema);

module.exports = { User };