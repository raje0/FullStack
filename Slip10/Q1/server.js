const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL as id ' + connection.threadId);

    connection.query('CREATE DATABASE IF NOT EXISTS college', (err, result) => {
        if (err) {
            console.error('Error creating database: ' + err.stack);
            connection.end();
            return;
        }
        console.log('Database "college" created or already exists.');

        connection.changeUser({ database: 'college' }, (err) => {
            if (err) {
                console.error('Error switching to "college" database: ' + err.stack);
                connection.end();
                return;
            }

            const createTableQuery = `
                CREATE TABLE IF NOT EXISTS students (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    name VARCHAR(100) NOT NULL,
                    age INT NOT NULL,
                    department VARCHAR(100) NOT NULL
                )
            `;
            connection.query(createTableQuery, (err, result) => {
                if (err) {
                    console.error('Error creating table: ' + err.stack);
                } else {
                    console.log('Table "students" created or already exists.');
                }
                connection.end();  // <-- Close the connection after the last query
            });
        });
    });
});


























// -- Create the 'college' database if it doesn't exist
// CREATE DATABASE IF NOT EXISTS college;

// -- Switch to the 'college' database
// USE college;

// -- Create the 'students' table
// CREATE TABLE IF NOT EXISTS students (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(100) NOT NULL,
//     age INT NOT NULL,
//     department VARCHAR(100) NOT NULL
// );

// -- Optional: Insert sample data into the 'students' table
// INSERT INTO students (name, age, department)
// VALUES
//     ('Alice', 20, 'Computer Science'),
//     ('Bob', 22, 'Mechanical Engineering'),
//     ('Charlie', 21, 'Electrical Engineering'),
//     ('David', 23, 'Civil Engineering'),
//     ('Eve', 20, 'Biotechnology');
// 
