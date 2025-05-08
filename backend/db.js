const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: "localhost",
  user: "tu_usuario_mysql",
  password: "tu_contraseña_mysql",
  database: "nombre_base_de_datos",
});

module.exports = db;
