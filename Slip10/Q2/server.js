

const http = require('http');  
const { getCurrentDateTime } = require('./modules');  


const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    
   
    res.end(`<h1>Today's Date and Time: ${getCurrentDateTime()}</h1>`);
});


server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000/');
});
