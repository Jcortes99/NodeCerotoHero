// const {emailTemplate} = require ('./js-foundation/01-template');
// const {} = require('./js-foundation/02-destructuring');

// console.log("Hello from app.js");

// console.log(emailTemplate);

const {getUserById} = require('./js-foundation/03-callbacks');


const id = 3;

getUserById(id, function(error, user){
    if (error){
        throw new Error(error);
    }

    console.log(user);
});