const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    const reqUrl = url.parse(req.url, true);

    if (reqUrl.pathname === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <html>
            <head>
                <title>Concatenate Strings</title>
            </head>
            <body>
                <h1>Concatenate Two Strings</h1>
                <form method="POST">
                    <label for="string1">String 1:</label>
                    <input type="text" id="string1" name="string1" required><br><br>
                    <label for="string2">String 2:</label>
                    <input type="text" id="string2" name="string2" required><br><br>
                    <input type="submit" value="Concatenate">
                </form>
            </body>
            </html>
        `);
    } else if (reqUrl.pathname === '/' && req.method === 'POST') {
        let body = '';
        
        req.on('data', chunk => {
            body += chunk.toString();
        });
        
        req.on('end', () => {
            const parsedData = querystring.parse(body);
            const string1 = parsedData.string1;
            const string2 = parsedData.string2;
            const concatenatedString = string1 + string2;

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`
                <html>
                <head>
                    <title>Concatenate Strings Result</title>
                </head>
                <body>
                    <h1>Result:</h1>
                    <p>Concatenated String: ${concatenatedString}</p>
                    <a href="/">Go back</a>
                </body>
                </html>
            `);
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>');
    }
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000/');
});
