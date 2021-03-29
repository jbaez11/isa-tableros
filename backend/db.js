const mongoose = require('mongoose');

function makeNewConnection(dbname) {
    const db = mongoose.createConnection('mongodb://ibm_cloud_e38e679f_01a8_43f8_be2f_b5d7c472e5e2:8ec65d06003ca8f816bb889523f8a3c1adb14f31b4975251f70fc83963210229@eeb30e5d-0f01-45c2-9209-585c7ef7c3f6-0.budepemd0im5pmu4u60g.databases.appdomain.cloud:30923,eeb30e5d-0f01-45c2-9209-585c7ef7c3f6-1.budepemd0im5pmu4u60g.databases.appdomain.cloud:30923,eeb30e5d-0f01-45c2-9209-585c7ef7c3f6-2.budepemd0im5pmu4u60g.databases.appdomain.cloud:30923/ibmcloud?authSource=admin&replicaSet=replset', 
    {
        dbName:dbname,
        useNewUrlParser: true, useUnifiedTopology: true,
        tls: true, auto_reconnect:true,
        tlsCAFile: `${__dirname}/7cf7953e-9946-4392-9e1b-b577d67d9005`
    });

    db.on('error', function (error) {
        console.log(`MongoDB :: connection ${this.name} ${JSON.stringify(error)}`);
        db.close().catch(() => console.log(`MongoDB :: failed to close connection ${this.name}`));
    });

    db.on('connected', function () {
        mongoose.set('debug', function (col, method, query, doc) {
            console.log(`MongoDB :: ${this.conn.name} ${col}.${method}(${JSON.stringify(query)},${JSON.stringify(doc)})`);
        });
        console.log(`MongoDB :: connected ${this.name}`);
    });

    db.on('disconnected', function () {
        console.log(`MongoDB :: disconnected ${this.name}`);
    });

    return db;
}

const SerFinanzaConn = makeNewConnection('igsSerfinanzaCO');
const BancolombiaConn = makeNewConnection('igsBancolombiaCO');
const EnelChileConn = makeNewConnection('igsEnelCL');
const IgsBanorteMXConn = makeNewConnection('igsBanorteMX');
const IgsBanistmoPAConn = makeNewConnection('igsBanistmoPA');
const BpogsBoldEnglishUSConn = makeNewConnection('bpogsBoldEnglishUS');
const BpogsHitesDespachoRetrioCOConn = makeNewConnection('bpogsHitesDespachoRetrioCO');

module.exports = {
    SerFinanzaConn,
    BancolombiaConn,
    EnelChileConn,
    IgsBanorteMXConn,
    IgsBanistmoPAConn,
    BpogsBoldEnglishUSConn,
    BpogsHitesDespachoRetrioCOConn
};

