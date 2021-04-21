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

        case 'aigsBancolombiaCO':
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
        case 'bpogsHitesDespachoRetiroCO' :
            basePhrases = await basePhrasesBpogsHitesDespachoRetrioCOModel.find();
            return basePhrases;
        }
}

function addBasePhrases(basePhrases,nameDB){
   
    
    // const myBasePhrases = new Model(basePhrases);
    // console.log('store ',myBasePhrases)
    // myBasePhrases.save();


    var myBasePhrases;
    switch (nameDB) {
        
        case 'igsSerfinanzaCO':
            myBasePhrases = new basePhrasesSerFinanzaModel(basePhrases);
            myBasePhrases.save();
            return myBasePhrases;

        case 'igsBancolombiaCO':
            myBasePhrases = new basePhrasesBancoColombiaModel(basePhrases);
            myBasePhrases.save();
            return myBasePhrases ;

        case 'igsEnelCL':
            myBasePhrases = new basePhrasesEnelChileModel(basePhrases);
            myBasePhrases.save();
            return myBasePhrases;
        case 'igsBanorteMX' :
            myBasePhrases = new basePhrasesIgsBanorteMXModel(basePhrases);
            myBasePhrases.save();
            return myBasePhrases;
        case 'igsBanistmoPA' :
            myBasePhrases = new basePhrasesIgsBanistmoPAModel(basePhrases);
            myBasePhrases.save();
            return myBasePhrases;
        case 'bpogsBoldEnglishUS' :
            myBasePhrases = new basePhrasesBpogsBoldEnglishUSModel(basePhrases);
            myBasePhrases.save();
            return myBasePhrases;
        case 'bpogsHitesDespachoRetiroCO' :
            myBasePhrases = new basePhrasesBpogsHitesDespachoRetrioCOModel(basePhrases);
            myBasePhrases.save();
            return myBasePhrases;
        }
    

}

async function updateBasePhrases(id,phrase,module,category,createdAt,nameDB){
    // const foundBasePhrases = await Model.findOne({
    //     _id : id
    // });

    // foundBasePhrases.phrase = phrase ;
    // foundBasePhrases.module = module ;
    // foundBasePhrases.category = category ;
    // foundBasePhrases.createdAt = createdAt ;
    // const newBasePhrases = await foundBasePhrases.save();
    // console.log('new bae', newBasePhrases);
    // return newBasePhrases;
    var foundBasePhrases;
    var newBasePhrases;
    switch (nameDB) {
        
        case 'igsSerfinanzaCO':
            basePhrases = await basePhrasesSerFinanzaModel.findOne({_id:id});
            foundBasePhrases.phrase = phrase ;
            foundBasePhrases.module = module ;
            foundBasePhrases.category = category ;
            foundBasePhrases.createdAt = createdAt ;
            newBasePhrases = await foundBasePhrases.save();
            console.log('new bae', newBasePhrases);
            return newBasePhrases;
            

        case 'igsBancolombiaCO':
            basePhrases = await basePhrasesBancoColombiaModel.findOne({_id:id});
            foundBasePhrases.phrase = phrase ;
            foundBasePhrases.module = module ;
            foundBasePhrases.category = category ;
            foundBasePhrases.createdAt = createdAt ;
            newBasePhrases = await foundBasePhrases.save();
            console.log('new bae', newBasePhrases);
            return newBasePhrases;

        case 'igsEnelCL':
            basePhrases = await basePhrasesEnelChileModel.findOne({_id:id});
            foundBasePhrases.phrase = phrase ;
            foundBasePhrases.module = module ;
            foundBasePhrases.category = category ;
            foundBasePhrases.createdAt = createdAt ;
            newBasePhrases = await foundBasePhrases.save();
            console.log('new bae', newBasePhrases);
            return newBasePhrases;
        case 'igsBanorteMX' :
            basePhrases = await basePhrasesIgsBanorteMXModel.findOne({_id:id});
            foundBasePhrases.phrase = phrase ;
            foundBasePhrases.module = module ;
            foundBasePhrases.category = category ;
            foundBasePhrases.createdAt = createdAt ;
            newBasePhrases = await foundBasePhrases.save();
            console.log('new bae', newBasePhrases);
            return newBasePhrases;
        case 'igsBanistmoPA' :
            basePhrases = await basePhrasesIgsBanistmoPAModel.findOne({_id:id});
            foundBasePhrases.phrase = phrase ;
            foundBasePhrases.module = module ;
            foundBasePhrases.category = category ;
            foundBasePhrases.createdAt = createdAt ;
            newBasePhrases = await foundBasePhrases.save();
            console.log('new bae', newBasePhrases);
            return newBasePhrases;
        case 'bpogsBoldEnglishUS' :
            basePhrases = await basePhrasesBpogsBoldEnglishUSModel.findOne({_id:id});
            foundBasePhrases.phrase = phrase ;
            foundBasePhrases.module = module ;
            foundBasePhrases.category = category ;
            foundBasePhrases.createdAt = createdAt ;
            newBasePhrases = await foundBasePhrases.save();
            console.log('new bae', newBasePhrases);
            return newBasePhrases;
        case 'bpogsHitesDespachoRetrioCO' :
            basePhrases = await basePhrasesBpogsHitesDespachoRetrioCOModel.findOne({_id:id});
            foundBasePhrases.phrase = phrase ;
            foundBasePhrases.module = module ;
            foundBasePhrases.category = category ;
            foundBasePhrases.createdAt = createdAt ;
            newBasePhrases = await foundBasePhrases.save();
            console.log('new bae', newBasePhrases);
            return newBasePhrases;
        }

}

function removeBasePhrases(id,nameDB){
    // return Model.deleteOne({
    //     _id:id
    // });

    switch (nameDB) {
        
        case 'igsSerfinanzaCO':
            return basePhrasesSerFinanzaModel.deleteOne({_id:id});
            
        case 'igsBancolombiaCO':
            return basePhrasesBancoColombiaModel.deleteOne({_id:id});

        case 'igsEnelCL':
            return basePhrasesEnelChileModel.deleteOne({_id:id});
            
        case 'igsBanorteMX' :
            return basePhrasesIgsBanorteMXModel.deleteOne({_id:id});
            
        case 'igsBanistmoPA' :
            return basePhrasesIgsBanistmoPAModel.deleteOne({_id:id});
            
        case 'bpogsBoldEnglishUS' :
            return basePhrasesBpogsBoldEnglishUSModel.deleteOne({_id:id});
            
        case 'bpogsHitesDespachoRetiroCO' :
            return basePhrasesBpogsHitesDespachoRetrioCOModel.deleteOne({_id:id});
            
        }
}

module.exports = {
    list:getBasePhrases,
    add: addBasePhrases,
    updateText: updateBasePhrases,
    remove:removeBasePhrases,
}