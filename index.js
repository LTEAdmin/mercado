const express = require("express");
const app = express();
const port = 3000;

/* Si ruta no existe manda mensaje, ojo esta linea debe estar al final del codigo, sobre todo despues de rutas validas */
/* app.get(“*”, (req, res) => res.send("para determinar que la ruta no existe") */