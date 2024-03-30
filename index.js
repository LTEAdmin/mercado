const express = require("express");
const app = express();
const port = 3000;


app.listen(port, ()=> console.log(`El servidor se ha levantado en el puerto http://localhost:${port}`))

//Rutas
app.get('/main', (req, res) => res.send('Mercado')),
/* Si ruta no existe manda mensaje, ojo esta linea debe estar al final del codigo, sobre todo despues de rutas validas */
app.get('*', (req, res) => res.send('para determinar que la ruta no existe'))