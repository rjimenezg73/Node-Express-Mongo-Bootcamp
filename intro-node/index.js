const http = require('http');

// La primera parte es crear el servivor
const server = http.createServer((req, res) => {
  res.end('Hello from the Server!!');
});

// La segunda parte es hacer que el servidor creado escuche las peticiones realizadas
server.listen(8000, '127.0.0.1', () => {
  console.clear();
  console.log('Listening to request on port 8000... 👌');
});