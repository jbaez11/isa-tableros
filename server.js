const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');

const router = require('./network/routes');
db('')
var app = express();
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));

 router(app);

app.use('/app', express.static('public'));
app.listen(3000);

console.log('la aplicacion esta escuchando en el puerto 3000');