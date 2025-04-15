// app.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));


const user = {
  username: "admin",
  password: "1234"
};


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === user.username && password === user.password) {
    res.send(`<h2>Welcome, ${username}!</h2><a href="/">Logout</a>`);
  } else {
    res.send('<h2>Invalid login. <a href="/">Try again</a></h2>');
  }
});


app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
