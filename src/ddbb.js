var mysql = require('mysql');

var conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'krono',
  database: 'sakila',
});

conexion.connect(function (err) {
  if (err) throw err;

  const medida = "SELECT * FROM actor";
  conexion.query(medida, function (err, result) {
    if (err) {
      throw err
    };

    console.log(result);
    conexion.end();
  })  
});
