const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'your_database_name'
});

connection.connect((err) => {
    if (err) {
        console.log('Error connecting:', err);
        return;
    }

    console.log('Connected to MySQL.');

    connection.query('SELECT * FROM customers', (err, results) => {
        if (err) {
            console.log('Error fetching data:', err);
            return;
        }

        console.log('Customer Records:');
        console.log(results);

        connection.end();
    });
});


















// CREATE DATABASE IF NOT EXISTS mydb;
// USE mydb;

// CREATE TABLE IF NOT EXISTS customers (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(100),
//     city VARCHAR(100)
// );

// INSERT INTO customers (name, city) VALUES
// ('John Doe', 'New York'),
// ('Jane Smith', 'London'),
// ('Mike Johnson', 'Paris'),
// ('Sara Williams', 'Berlin'),
// ('David Brown', 'Tokyo');
