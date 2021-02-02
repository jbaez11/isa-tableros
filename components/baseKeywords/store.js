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

function addBaseKeywords(baseKeywords){

    const myBaseKeywords = new Model(baseKeywords);
    myBaseKeywords.save();

}

async function updateBaseKeywords(id,keyword,module,category){
    const foundBaseKeywords = await Model.findOne({
        _id : id
    });

    foundBaseKeywords.keyword = keyword ;
    foundBaseKeywords.module = module ;
    foundBaseKeywords.category = category ;
    const newBaseKeywords = await foundBaseKeywords.save();
    console.log('new bae', newBaseKeywords);
    return newBaseKeywords;

}


module.exports = {
    list:getBaseKeywords,
    add: addBaseKeywords,
    updateText: updateBaseKeywords,
}