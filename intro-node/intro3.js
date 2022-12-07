const fs = require('fs');


// Non-blocking Asynchronous way
fs.readFile('./start.txt', 'utf-8', (err, data) => {
  console.log(data);
});

console.log('Mientras lee el archivo');