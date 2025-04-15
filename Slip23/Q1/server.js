const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;


const server = http.createServer((req, res) => {

  const filePath = path.join(__dirname, 'index.html');

 
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
     
      res.statusCode = 500;
      res.end('Error reading the file.');
      return;
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(data);
  });
});

// Start the server
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
