const {basePhrasesSerFinanzaModel,
    basePhrasesBancoColombiaModel,
    basePhrasesEnelChileModel,
    basePhrasesIgsBanorteMXModel,
    basePhrasesIgsBanistmoPAModel,
    basePhrasesBpogsBoldEnglishUSModel,
    basePhrasesBpogsHitesDespachoRetrioCOModel} = require('./model');


async function getBasePhrases(nameDB){
    var basePhrases;
    switch (nameDB) {
        
        case 'igsSerfinanzaCO':
            basePhrases = await basePhrasesSerFinanzaModel.find();
            return basePhrases;

        case 'igsBancolombiaCO':
            basePhrases = await basePhrasesBancoColombiaModel.find();
            return basePhrases ;

        case 'igsEnelCL':
            basePhrases = await basePhrasesEnelChileModel.find();
            return basePhrases;
        case 'igsBanorteMX' :
            basePhrases = await basePhrasesIgsBanorteMXModel.find();
            return basePhrases;
        case 'igsBanistmoPA' :
            basePhrases = await basePhrasesIgsBanistmoPAModel.find();
            return basePhrases;
        case 'bpogsBoldEnglishUS' :
            basePhrases = await basePhrasesBpogsBoldEnglishUSModel.find();
            return basePhrases;
        case 'bpogsHitesDespachoRetrioCO' :
            basePhrases = await basePhrasesBpogsHitesDespachoRetrioCOModel.find();
            return basePhrases;
        }
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