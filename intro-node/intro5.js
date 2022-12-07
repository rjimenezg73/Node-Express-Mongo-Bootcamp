const fs = require('fs');

console.clear();

// Non-blocking Asynchronous way
fs.readFile('./start.txt', 'utf-8', (err, data1) => {
  fs.readFile(`./${data1}.txt`, 'utf-8', (err, data2) => {
    console.log(data2);
    fs.readFile('./append.txt', 'utf-8', (err, data3) => {
      console.log(data3);
    });
  });
});

console.log('Mientras lee el archivo');