const fs = require('fs');

const textIn = fs.readFileSync('./input.txt', 'utf-8');
console.log(textIn);

const textOut = `This is what we know about avocado: ${textIn}\nCreated on ${Date.now()}`;
fs.writeFileSync('./output.txt', textOut);
console.log(textOut);