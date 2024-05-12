const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Configuración de la conexión a la base de datos MySQL
const db = mysql.createConnection({
  host: 'localhost', // Si la base de datos está en la misma instancia EC2, usa 'localhost'
  user: 'root',
  password: '',
  database: 'acceso_y_registro_p2'
});

// Conectar a la base de datos
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Conectado a la base de datos MySQL');
});

// Rutas para registrar un usuario
app.post('/register', (req, res) => {
  // Aquí puedes manejar la lógica para registrar un usuario en la base de datos
  // Recibe los datos del formulario y realiza la inserción en la base de datos
});

// Rutas para acceder a un usuario
app.post('/login', (req, res) => {
  // Aquí puedes manejar la lógica para verificar las credenciales del usuario
  // Recibe los datos del formulario y realiza la verificación en la base de datos
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor web iniciado en http://localhost:${port}`);
});
