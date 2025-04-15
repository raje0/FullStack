const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',         
    password: '',         
    database: 'school'     
});


connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database');
});


const query = 'SELECT * FROM Teacher WHERE salary > 20000';

connection.query(query, (err, results) => {
    if (err) {
        console.error('Error executing the query:', err.stack);
        return;
    }
    console.log('Teachers with salary greater than 20,000:', results);
});

connection.end();



// 
// // CREATE DATABASE school;
// USE school;

// CREATE TABLE Teacher (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(255),
//     salary DECIMAL(10, 2)
// );

// INSERT INTO Teacher (name, salary) VALUES
// ('John Doe', 25000),
// ('Jane Smith', 15000),
// ('Samuel Lee', 22000);
