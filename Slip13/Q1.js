const http = require('http');

const server = http.createServer((req, res) => {
    let message = "HELLO WORLD!";
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(message.toLowerCase());
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000/');
});
