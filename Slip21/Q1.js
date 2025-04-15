const mysql = require('mysql2');


const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',         
  password: '',         
});

con.connect(err => {
  if (err) throw err;
  console.log("Connected to MySQL!");


  con.query("CREATE DATABASE IF NOT EXISTS movieDB", (err, result) => {
    if (err) throw err;
    console.log("Database 'movieDB' created or already exists.");


    con.changeUser({ database: 'movieDB' }, (err) => {
      if (err) throw err;


      const tableQuery = `
        CREATE TABLE IF NOT EXISTS movies (
          id INT AUTO_INCREMENT PRIMARY KEY,
          title VARCHAR(255),
          genre VARCHAR(100),
          release_year INT
        )
      `;

      con.query(tableQuery, (err, result) => {
        if (err) throw err;
        console.log("Table 'movies' created or already exists.");


        const insertQuery = `
          INSERT INTO movies (title, genre, release_year) VALUES
          ('Inception', 'Sci-Fi', 2010),
          ('The Dark Knight', 'Action', 2008),
          ('Interstellar', 'Sci-Fi', 2014),
          ('The Prestige', 'Thriller', 2006)
        `;
        
        con.query(insertQuery, (err, result) => {
          if (err) throw err;
          console.log("Sample data inserted.");

          con.end();
        });
      });
    });
  });
});
