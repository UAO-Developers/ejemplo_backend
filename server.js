const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const Database = require('./conf/database');
const config = require('./conf/config');

const Producto = require('./routes/RProducto');

const app = express();

// Realizar el cast de los objetos en formato json
app.use(bodyParser.json());

//De esta manera indicamos que no vamos a recibir peticiones enviadas directamente de un formulario, sino que sera todo enviado en json
app.use(bodyParser.urlencoded({extended: false}));


// Habilita los CORS para todas las peticiones
app.use(cors());


app.use('/producto', Producto);

// Conexion con la BD
Database.connect();

app.listen(config.PORT, err => {
    if (err) return console.log(err);
    console.log(`Servidor corriendo en el puerto: ${config.PORT}`);
})