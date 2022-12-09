const http = require('http');
const url = require('url');
const fs = require('fs');

// La primera parte es crear el servivor
const server = http.createServer((req, res) => {
  const pathName = req.url;
  console.log(pathName);
  if(pathName === '/' || pathName === '/overview'){
    res.end('This is the overview page!');
  }else if(pathName === '/product'){
    res.end('This is the PRODUCT page');
  }else if(pathName === '/api'){

    fs.readFile('../dev-data/data.jason', 'utf-8', (err, data) => {
      const productData = JSON.parse(data);
      res.writeHead(200, {
        'Content-type': 'application/json'
      })
      res.end(data);
    });

  }else{
    res.writeHead(404,{
      'Content-type':'text/html',
      'my-own-header':'Hello world'
    });
    res.end('<h1>Page not Found!!!</h1>');
  }
  
});

// La segunda parte es hacer que el servidor creado escuche las peticiones realizadas
server.listen(8000, '127.0.0.1', () => {
  console.clear();
  console.log('Listening to request on port 8000... 👌');
});