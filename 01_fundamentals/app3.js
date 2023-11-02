const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf-8')

const words = content.split(' ');

const regex = /react/i;

let reactWords = 0;

for(let i = 0; i<words.length; i++){
    if (regex.test(words[i])){
        reactWords ++;
    }
};

console.log(reactWords);