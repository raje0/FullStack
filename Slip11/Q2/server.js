const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Welcome!</h1><p><a href="/download">Click here to download the file</a></p>');
});

app.get('/download', (req, res) => {
    const filePath = path.join(__dirname, 'sample.txt');
    res.download(filePath);
});

app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000/');
});
