const db = require('mongoose');
const Model = require('./model');


db.Promise = global.Promise;

db.connect('',{
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    tls: true, 
    tlsCAFile: `${__dirname}/7cf7953e-9946-4392-9e1b-b577d67d9005`
 });


console.log('DB conectada con exito');

async function getBaseKeywords(){
    const basekeywords = await Model.find();
    return basekeywords;
}


module.exports = {
    list:getBaseKeywords
}