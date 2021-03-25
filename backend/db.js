const db = require('mongoose');

db.Promise = global.Promise;

 function connect(url,nameDB){

     db.connect(url,{
        dbName:`${nameDB}`,
        useNewUrlParser: true, useUnifiedTopology: true,
        tls: true, auto_reconnect:true,
        tlsCAFile: `${__dirname}/7cf7953e-9946-4392-9e1b-b577d67d9005`
     });

     console.log('DB conectada con exito',nameDB);
}

function disconnect(){
    db.disconnect();
}

module.exports = {
    connect,
    disconnect
}
