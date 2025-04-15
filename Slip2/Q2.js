const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Q2.html');
});

app.post('/append', (req, res) => {
    let file1 = req.body.file1;
    let file2 = req.body.file2;

    fs.readFile(file1, 'utf8', (err, data) => {
        if (err) {
            res.send('Error reading first file.');
            return;
        }
        fs.appendFile(file2, data, (err) => {
            if (err) {
                res.send('Error appending to second file.');
                return;
            }
            res.send('Contents appended successfully!');
        });
    });
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
