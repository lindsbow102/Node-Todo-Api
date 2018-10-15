//const SHA256 = require("crypto-js/sha256"); // From npm docs
const { SHA256 } = require("crypto-js"); // From Andrew's course -- both options work
const jwt = require('jsonwebtoken');

const data = {
    id: 10
}

const token = jwt.sign(data, '123abc'); // Second argument is our secret
console.log(token); // Can see how this works at jwt.io

const decoded = jwt.verify(token, '123abc');
console.log('decoded', decoded);

// const message = 'I am user number 777';
// const hash = SHA256(message).toString();

// // Hashing is a one-way algorithm
// // Hashing is a way to obfuscate the actual plain-text password.  You don't want plain-text passwords in your database
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// const data = {
//     id: 5
// };

// const token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };

// token.data.id = 7;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

// // Salt the hash (e.g. 'somesecret') -- Adding something onto the hash that is unique and change the value
// // e.g. password + kdkjsldfjie
// const resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// console.log(resultHash);

// if (resultHash === token.hash) {
//     console.log('Data was not changed');
// } else {
//     console.log('Data was changed.  Do not trust!');
// }