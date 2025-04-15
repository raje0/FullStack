const mysql = require('mysql2');


const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '' 
});


con.connect(err => {
  if (err) throw err;
  console.log("Connected to MySQL!");

  con.query("CREATE DATABASE IF NOT EXISTS studentdb", (err, result) => {
    if (err) throw err;
    console.log("Database 'studentdb' created or already exists.");

   
    con.changeUser({ database: 'studentdb' }, (err) => {
      if (err) throw err;

   
      const tableQuery = `
        CREATE TABLE IF NOT EXISTS students (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(100),
          age INT,
          course VARCHAR(100)
        )
      `;

      con.query(tableQuery, (err, result) => {
        if (err) throw err;
        console.log("Table 'students' created or already exists.");

      
        con.end();
      });
    });
  });
});
