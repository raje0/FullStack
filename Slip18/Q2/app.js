const mysql = require('mysql2');


const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',         // your MySQL username
  password: '',         // your MySQL password
  database: 'mydb'      // your database name
});


con.connect(err => {
  if (err) throw err;
  console.log("Connected to MySQL!");


  con.query("SELECT * FROM customers", (err, result1) => {
    if (err) throw err;
    console.log("\nAll Customers:");
    console.table(result1);

    
    con.query("SELECT * FROM customers WHERE name LIKE 'A%'", (err, result2) => {
      if (err) throw err;
      console.log("\nCustomers whose name starts with 'A':");
      console.table(result2);

      con.end(); 
    });
  });
});









































// CREATE DATABASE mydb;

// USE mydb;

// CREATE TABLE customers (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   name VARCHAR(255),
//   email VARCHAR(255)
// );

// INSERT INTO customers (name, email) VALUES
// ('Aarav Sharma', 'aarav@example.com'),
// ('Anita Desai', 'anita@example.com'),
// ('Bharat Rao', 'bharat@example.com'),
// ('Alok Mehta', 'alok@example.com'),
// ('Sneha Verma', 'sneha@example.com');
