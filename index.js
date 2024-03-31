const express = require("express");
const app = express();
const PORT = 3000;

// trabajar con handlebars
const exphbs = require("express-handlebars");
app.set('view engine', 'hbs');
app.engine('hbs', exphbs.engine({
    extname: 'hbs'
}));


//rutas de elementos a usar en la app
app.use(express.static('assets'));
app.use('/bootstrap', express.static('node_modules/bootstrap/dist/css'));

// muestra que puerto se esta usando para el servidor
app.listen(PORT, () => console.log(`El servidor se ha levantado en el puerto http://localhost:${PORT}`));

//Rutas
//app.get('/main', (req, res) => res.send('Mercado'));

//
app.get('/', (req, res) => { 
    res.render('home', {
        producto : ['banana', 'cebollas', 'pimenton', 'papas', 'lechuga', 'tomate'],
    })
})

/* Si ruta no existe manda mensaje, ojo esta linea debe estar al final del codigo, sobre todo despues de todas las rutas validas */
app.get('*', (req, res) => res.send())//'para determinar que la ruta no existe'))