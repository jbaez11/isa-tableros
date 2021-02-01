const db = require('mongoose');
const Model = require('./model');


db.Promise = global.Promise;

db.connect('mongodb://ibm_cloud_1cea47a4_7a3a_40ab_93fc_407f40f80fad:c378d6d8a19420e86ca03a62f94e61e4cf801aa66d393e70374130067136016b@eeb30e5d-0f01-45c2-9209-585c7ef7c3f6-0.budepemd0im5pmu4u60g.databases.appdomain.cloud:30923,eeb30e5d-0f01-45c2-9209-585c7ef7c3f6-1.budepemd0im5pmu4u60g.databases.appdomain.cloud:30923,eeb30e5d-0f01-45c2-9209-585c7ef7c3f6-2.budepemd0im5pmu4u60g.databases.appdomain.cloud:30923/ibmclouddb?authSource=admin&replicaSet=replset',{
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    tls: true, 
    tlsCAFile: `${__dirname}/ca.pem`
 });


console.log('DB conectada con exito');

async function getBaseKeywords(){
    const basekeywords = await Model.find();
    return basekeywords;
}


module.exports = {
    list:getBaseKeywords
}