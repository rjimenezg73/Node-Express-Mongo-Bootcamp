const http = require('http');
const url = require('url');

// La primera parte es crear el servivor
const server = http.createServer((req, res) => {
  const pathName = req.url;

  if(pathName === '/overview'){
    res.end('This is the çoverview page!');
  }else if(pathName === '/product'){
    res.end('This is the PRODUCT page');
  }else{
    res.end('You are in not autorized page!!!');
  }
  
});

// La segunda parte es hacer que el servidor creado escuche las peticiones realizadas
server.listen(8000, '127.0.0.1', () => {
  console.clear();
  console.log('Listening to request on port 8000... 👌');
});