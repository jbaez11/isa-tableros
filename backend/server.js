const express = require('express');
var compression = require('compression')
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

//const MongoClient = require("mongodb").MongoClient;

const router = require('./network/routes');
//db(`mongodb://ibm_cloud_1cea47a4_7a3a_40ab_93fc_407f40f80fad:c378d6d8a19420e86ca03a62f94e61e4cf801aa66d393e70374130067136016b@eeb30e5d-0f01-45c2-9209-585c7ef7c3f6-0.budepemd0im5pmu4u60g.databases.appdomain.cloud:30923,eeb30e5d-0f01-45c2-9209-585c7ef7c3f6-1.budepemd0im5pmu4u60g.databases.appdomain.cloud:30923,eeb30e5d-0f01-45c2-9209-585c7ef7c3f6-2.budepemd0im5pmu4u60g.databases.appdomain.cloud:30923/ibmclouddb?authSource=admin&replicaSet=replset`);




      
var app = express();

app.use(cors());
// Configurar cabeceras y cors

 app.use('/:bd/:accion',(req, res, next) => {
  //db.disconnect();
  nameDB = req.params.bd;
 
  console.log('name db', nameDB);
  db.connect(`mongodb://ibm_cloud_e38e679f_01a8_43f8_be2f_b5d7c472e5e2:8ec65d06003ca8f816bb889523f8a3c1adb14f31b4975251f70fc83963210229@eeb30e5d-0f01-45c2-9209-585c7ef7c3f6-0.budepemd0im5pmu4u60g.databases.appdomain.cloud:30923,eeb30e5d-0f01-45c2-9209-585c7ef7c3f6-1.budepemd0im5pmu4u60g.databases.appdomain.cloud:30923,eeb30e5d-0f01-45c2-9209-585c7ef7c3f6-2.budepemd0im5pmu4u60g.databases.appdomain.cloud:30923/ibmcloud?authSource=admin&replicaSet=replset`,nameDB)
  
    //    setTimeout(()=>{
    //    db.disconnect();
    //  },20000)
  //db.disconnect();
  //db.collection
      res.header('Access-Control-Allow-Origin', '*');
       res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
       res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
       res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
     
       next();
     
     });

 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));
 const port = process.env.PORT || 3000;
 router(app);

app.use('/app', express.static('public'));
app.listen(port, ()=>{
    console.log(`escuchando por el puerto ${port}`);
})




