const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send(`
    <h1>Employee Registration</h1>
    <form action="/register" method="POST">
      <label>Name:</label>
      <input type="text" name="name" required><br><br>

      <label>Email:</label>
      <input type="email" name="email" required><br><br>

      <label>Mobile Number:</label>
      <input type="text" name="mobile" required><br><br>

      <label>Position:</label>
      <input type="text" name="position" required><br><br>

      <button type="submit">Register</button>
    </form>
  `);
});

app.post('/register', (req, res) => {
  const { name, email, mobile, position } = req.body;

  if (!name || !email || !mobile || !position) {
    return res.send("All fields are required!");
  }

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const mobilePattern = /^[0-9]{10}$/;

  if (!emailPattern.test(email)) {
    return res.send("Invalid email format.");
  }

  if (!mobilePattern.test(mobile)) {
    return res.send("Mobile number must be 10 digits.");
  }

  res.send(`
    <h1>Registration Successful</h1>
    <p>Welcome ${name}, you have successfully registered as an employee.</p>
    <p>Email: ${email}</p>
    <p>Mobile: ${mobile}</p>
    <p>Position: ${position}</p>
  `);
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
