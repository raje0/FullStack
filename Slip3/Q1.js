const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Q1.html');
});

app.post('/login', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let users = JSON.parse(fs.readFileSync('user.json', 'utf8'));
    let valid = users.find(user => user.email === email && user.password === password);
    if (valid) {
        res.send('Login Successful!');
    } else {
        res.send('Invalid Email or Password');
    }
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
