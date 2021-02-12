const Model = require('./model');


async function getBasePhrases(){
    const basephrases = await Model.find();
    //console.log('store get',basephrases);
    return basephrases;
}

function addBasePhrases(basePhrases){
   
    
    const myBasePhrases = new Model(basePhrases);
    console.log('store ',myBasePhrases)
    myBasePhrases.save();
    

}

async function updateBasePhrases(id,phrase,module,category,createdAt){
    const foundBasePhrases = await Model.findOne({
        _id : id
    });

    foundBasePhrases.phrase = phrase ;
    foundBasePhrases.module = module ;
    foundBasePhrases.category = category ;
    foundBasePhrases.createdAt = createdAt ;
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