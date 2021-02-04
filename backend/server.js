const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');

const router = require('./network/routes');
db('mongodb://ibm_cloud_1cea47a4_7a3a_40ab_93fc_407f40f80fad:c378d6d8a19420e86ca03a62f94e61e4cf801aa66d393e70374130067136016b@eeb30e5d-0f01-45c2-9209-585c7ef7c3f6-0.budepemd0im5pmu4u60g.databases.appdomain.cloud:30923,eeb30e5d-0f01-45c2-9209-585c7ef7c3f6-1.budepemd0im5pmu4u60g.databases.appdomain.cloud:30923,eeb30e5d-0f01-45c2-9209-585c7ef7c3f6-2.budepemd0im5pmu4u60g.databases.appdomain.cloud:30923/igsBancolombiaCO?authSource=admin&replicaSet=replset/')
var app = express();
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));

 router(app);

app.use('/app', express.static('public'));
app.listen(3000);

console.log('la aplicacion esta escuchando en el puerto 3000');