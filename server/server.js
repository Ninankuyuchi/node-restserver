//Se require las configuraciones globales creadas en config/config.js 
//al ser el primer archivo lo va a ejectura y configurar todo lo que contenga
require('./config/config')


const express = require('express');
const app = express();

//Declaracion de la variable para uso del paquete
const bodyParser = require('body-parser');

/*
app.use es un Middleware, funciones que se disparan cada vez que pasa
el codigo por ella. 
*/

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.json('Hola Mundo');
});

//obtiene
app.get('/usuario', (req, res) => {
    res.json('get Usuario');
})

// Crea registro
app.post('/usuario', (req, res) => {
    //aparece cuando el bodyParser procese cualquier paylot que reciba las peticiones.
    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });
    } else {
        res.json({
            persona: body
        });
    }

});

app.put('/usuario/:id', (req, res) => {

    let id = req.params.id;

    res.json({
        id
    });
});

app.delete('/usuario', (req, res) => {
    res.json('delete Usuario');
});

app.listen(process.env.PORT, () => {
    console.log("Escuchando en el puerto ", process.env.PORT);
})