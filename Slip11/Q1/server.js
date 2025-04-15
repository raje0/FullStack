const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});

connection.connect((err) => {
    if (err) {
        console.log('Error connecting to MySQL:', err);
        return;
    }

    console.log('Connected to MySQL.');

    connection.query('CREATE DATABASE IF NOT EXISTS Movie', (err) => {
        if (err) {
            console.log('Error creating database:', err);
            return;
        }

        console.log('Database "Movie" created or already exists.');

        connection.changeUser({ database: 'Movie' }, (err) => {
            if (err) {
                console.log('Error switching database:', err);
                return;
            }

            const tableQuery = `
                CREATE TABLE IF NOT EXISTS movies (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    title VARCHAR(100) NOT NULL,
                    genre VARCHAR(50),
                    release_year INT
                )
            `;

            connection.query(tableQuery, (err) => {
                if (err) {
                    console.log('Error creating table:', err);
                    return;
                }

                console.log('Table "movies" created or already exists.');
                connection.end();
            });
        });
    });
});
