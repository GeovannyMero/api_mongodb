const express = require('express');
const bodyParser = require('body-parser');
const productos = require('./Models/Productos');

//Lammanos a la conexión
const conn = require('./conn');

//llamamos  a express
var app = express();

//convertimos peticiones a json
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(bodyParser.json());

//Creamos el puerto de la salidad del servidor
const port = process.env.PORT || 8080;

//Se envia mensaje para probar la respuesta del servidor
app.get('/', (req, res) => {
    res.send('Server Express');
});

//ruta para obtener productos
app.get('/productos', async (req, res) => {
    const items = await productos.find();
    res.json(items);
})

//Pones a escuchar al servidor
app.listen(port, () => {
    console.log(`Express running on: http://localhost:${port}`);
});