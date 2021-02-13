const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

const router = require('./network/routes');

// var nameBD="igsSerfinanzaCO";
// db.connect(`mongodb://ibm_cloud_1cea47a4_7a3a_40ab_93fc_407f40f80fad:c378d6d8a19420e86ca03a62f94e61e4cf801aa66d393e70374130067136016b@eeb30e5d-0f01-45c2-9209-585c7ef7c3f6-0.budepemd0im5pmu4u60g.databases.appdomain.cloud:30923,eeb30e5d-0f01-45c2-9209-585c7ef7c3f6-1.budepemd0im5pmu4u60g.databases.appdomain.cloud:30923,eeb30e5d-0f01-45c2-9209-585c7ef7c3f6-2.budepemd0im5pmu4u60g.databases.appdomain.cloud:30923/${nameBD}?authSource=admin&replicaSet=replset/`)


var app = express();

app.use(cors());
// Configurar cabeceras y cors

 app.use('/:bd/:accion',(req, res, next) => {
     nameBD = req.params.bd
     console.log('esta deberia ser la nueva URL',nameBD)
     db.connect(`mongodb://ibm_cloud_1cea47a4_7a3a_40ab_93fc_407f40f80fad:c378d6d8a19420e86ca03a62f94e61e4cf801aa66d393e70374130067136016b@eeb30e5d-0f01-45c2-9209-585c7ef7c3f6-0.budepemd0im5pmu4u60g.databases.appdomain.cloud:30923,eeb30e5d-0f01-45c2-9209-585c7ef7c3f6-1.budepemd0im5pmu4u60g.databases.appdomain.cloud:30923,eeb30e5d-0f01-45c2-9209-585c7ef7c3f6-2.budepemd0im5pmu4u60g.databases.appdomain.cloud:30923/${nameBD}?authSource=admin&replicaSet=replset/`)
     setTimeout(()=>{
         db.disconnect();
     },5000)
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
      res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
      res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
     
      next();
     
     });

// app.use((req, res, next) => {
     
//       res.header('Access-Control-Allow-Origin', '*');
//       res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
//       res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//       res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
         
//       next();
         
        
//  });
 //nameBD = 'igsSerfinanzaCO'//igsBanistmoPA,,,igsBancolombiaCO,,igsBanorteMX,,igsSerfinanzaCO

 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));
 const port = process.env.PORT || 3000;
 router(app);

app.use('/app', express.static('public'));
app.listen(port, ()=>{
    console.log(`escuchando por el puerto ${port}`);
})
