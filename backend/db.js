const db = require('mongoose');

db.Promise = global.Promise;

async function connect(url){

    await db.connect(url,{
        
        useNewUrlParser: true, useUnifiedTopology: true,
        tls: true, 
        tlsCAFile: `${__dirname}/7cf7953e-9946-4392-9e1b-b577d67d9005`
     });

     console.log('DB conectada con exito');
}

function disconnect(){
    db.disconnect();
}

module.exports = {
    connect,
    disconnect
}
