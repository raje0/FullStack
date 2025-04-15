const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'your_password',
    database: 'your_database'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
    
    connection.query('SELECT * FROM students', (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            return;
        }
        console.log('Student Records:', results);
    });
});

connection.end();






























// CREATE DATABASE your_database;
// USE your_database;

// CREATE TABLE students (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     first_name VARCHAR(50),
//     last_name VARCHAR(50),
//     age INT,
//     email VARCHAR(100)
// );


// INSERT INTO students (first_name, last_name, age, email) 
// VALUES 
// ('John', 'Doe', 20, 'john.doe@example.com'),
// ('Jane', 'Smith', 22, 'jane.smith@example.com'),
// ('Alice', 'Johnson', 19, 'alice.johnson@example.com'),
// ('Bob', 'Brown', 21, 'bob.brown@example.com');
