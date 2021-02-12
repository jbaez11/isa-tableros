const Model = require('./model');

async function getBasePhrases(){
    const basephrases = await Model.find();
    return basephrases;
}

function addBasePhrases(basePhrases){

    const myBasePhrases = new Model(basePhrases);
    myBasePhrases.save();

}

async function updateBasePhrases(id,phrase,module,category){
    const foundBasePhrases = await Model.findOne({
        _id : id
    });

    foundBasePhrases.phrase = phrase ;
    foundBasePhrases.module = module ;
    foundBasePhrases.category = category ;
    const newBasePhrases = await foundBasePhrases.save();
    console.log('new bae', newBasePhrases);
    return newBasePhrases;

}

function removeBasePhrases(id){
    return Model.deleteOne({
        _id:id
    });
}

module.exports = {
    list:getBasePhrases,
    add: addBasePhrases,
    updateText: updateBasePhrases,
    remove:removeBasePhrases,
}