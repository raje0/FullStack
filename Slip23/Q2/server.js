
const http = require('http'); 
const { getCurrentDateTime } = require('./modules'); 

const server = http.createServer((req, res) => {

  const currentDateTime = getCurrentDateTime();
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Current Date and Time: ${currentDateTime}`);
});


const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
