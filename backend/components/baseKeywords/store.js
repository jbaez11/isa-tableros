const {baseKeywordsSerFinanzaModel,
    baseKeywordsBancoColombiaModel,
    baseKeywordsEnelChileModel,
    baseKeywordsIgsBanorteMXModel,
    baseKeywordsIgsBanistmoPAModel,
    baseKeywordsBpogsBoldEnglishUSModel,
    baseKeywordsBpogsHitesDespachoRetrioCOModel} = require('./model');

async function getBaseKeywords(nameDB){
    var baseKeywords;
    switch (nameDB) {
        
        case 'igsSerfinanzaCO':
            baseKeywords = await baseKeywordsSerFinanzaModel.find();
            return baseKeywords;

        case 'igsBancolombiaCO':
            baseKeywords = await baseKeywordsBancoColombiaModel.find();
            return baseKeywords ;

        case 'igsEnelCL':
            baseKeywords = await baseKeywordsEnelChileModel.find();
            return baseKeywords;
        case 'igsBanorteMX' :
            baseKeywords = await baseKeywordsIgsBanorteMXModel.find();
            return baseKeywords;
        case 'igsBanistmoPA' :
            baseKeywords = await baseKeywordsIgsBanistmoPAModel.find();
            return baseKeywords;
        case 'bpogsBoldEnglishUS' :
            baseKeywords = await baseKeywordsBpogsBoldEnglishUSModel.find();
            return baseKeywords;
        case 'bpogsHitesDespachoRetiroCO' :
            baseKeywords = await baseKeywordsBpogsHitesDespachoRetrioCOModel.find();
            return baseKeywords;
        }
}

function addBaseKeywords(baseKeywords,nameDB){

    //const myBaseKeywords = new Model(baseKeywords);
    //myBaseKeywords.save();

    var myBaseKeywords;
    switch (nameDB) {
        
        case 'igsSerfinanzaCO':
            myBaseKeywords = new baseKeywordsSerFinanzaModel(baseKeywords);
            myBaseKeywords.save();
            return myBaseKeywords;

        case 'igsBancolombiaCO':
            myBaseKeywords = new baseKeywordsBancoColombiaModel(baseKeywords);
            myBaseKeywords.save();
            return myBaseKeywords ;

        case 'igsEnelCL':
            myBaseKeywords = new baseKeywordsEnelChileModel(baseKeywords);
            myBaseKeywords.save();
            return myBaseKeywords;
        case 'igsBanorteMX' :
            myBaseKeywords = new baseKeywordsIgsBanorteMXModel(baseKeywords);
            myBaseKeywords.save();
            return myBaseKeywords;
        case 'igsBanistmoPA' :
            myBaseKeywords = new baseKeywordsIgsBanistmoPAModel(baseKeywords);
            myBaseKeywords.save();
            return myBaseKeywords;
        case 'bpogsBoldEnglishUS' :
            myBaseKeywords = new baseKeywordsBpogsBoldEnglishUSModel(baseKeywords);
            myBaseKeywords.save();
            return myBaseKeywords;
        case 'bpogsHitesDespachoRetiroCO' :
            myBaseKeywords = new baseKeywordsBpogsHitesDespachoRetrioCOModel(baseKeywords);
            myBaseKeywords.save();
            return myBaseKeywords;
        }

}

async function updateBaseKeywords(id,keyword,module,category,createdAt,nameDB){
    // const foundBaseKeywords = await Model.findOne({
    //     _id : id
    // });

    //  foundBaseKeywords.keyword = keyword ;
    //  foundBaseKeywords.module = module ;
    //  foundBaseKeywords.category = category ;
    //  foundBaseKeywords.createdAt=createdAt;
    // const newBaseKeywords = await foundBaseKeywords.save();
    // console.log('new bae', newBaseKeywords);
    // return newBaseKeywords;

    var foundBaseKeywords;
    var newBaseKeywords;
    switch (nameDB) {
        
        case 'igsSerfinanzaCO':
            foundBaseKeywords = await baseKeywordsSerFinanzaModel.findOne({_id:id});
            foundBaseKeywords.keyword = keyword ;
            foundBaseKeywords.module = module ;
            foundBaseKeywords.category = category ;
            foundBaseKeywords.createdAt=createdAt;
            newBaseKeywords = await foundBaseKeywords.save();
            return newBaseKeywords;

        case 'igsBancolombiaCO':
            foundBaseKeywords = await baseKeywordsBancoColombiaModel.findOne({_id:id});
            foundBaseKeywords.keyword = keyword ;
            foundBaseKeywords.module = module ;
            foundBaseKeywords.category = category ;
            foundBaseKeywords.createdAt=createdAt;
            newBaseKeywords = await foundBaseKeywords.save();
            return newBaseKeywords ;

        case 'igsEnelCL':
            foundBaseKeywords = await baseKeywordsEnelChileModel.findOne({_id:id});
            foundBaseKeywords.keyword = keyword ;
            foundBaseKeywords.module = module ;
            foundBaseKeywords.category = category ;
            foundBaseKeywords.createdAt=createdAt;
            newBaseKeywords = await foundBaseKeywords.save();
            return newBaseKeywords;
        case 'igsBanorteMX' :
            foundBaseKeywords = await baseKeywordsIgsBanorteMXModel.findOne({_id:id});
            foundBaseKeywords.keyword = keyword ;
            foundBaseKeywords.module = module ;
            foundBaseKeywords.category = category ;
            foundBaseKeywords.createdAt=createdAt;
            newBaseKeywords = await foundBaseKeywords.save();
            break;
            //return newBaseKeywords;
        case 'igsBanistmoPA' :
            foundBaseKeywords = await baseKeywordsIgsBanistmoPAModel.findOne({_id:id});
            foundBaseKeywords.keyword = keyword ;
            foundBaseKeywords.module = module ;
            foundBaseKeywords.category = category ;
            foundBaseKeywords.createdAt=createdAt;
            newBaseKeywords = await foundBaseKeywords.save();
            return newBaseKeywords;
        case 'bpogsBoldEnglishUS' :
            foundBaseKeywords = await baseKeywordsBpogsBoldEnglishUSModel.findOne({_id:id});
            foundBaseKeywords.keyword = keyword ;
            foundBaseKeywords.module = module ;
            foundBaseKeywords.category = category ;
            foundBaseKeywords.createdAt=createdAt;
            newBaseKeywords = await foundBaseKeywords.save();
            return newBaseKeywords;
        case 'bpogsHitesDespachoRetiroCO' :
            foundBaseKeywords = await baseKeywordsBpogsHitesDespachoRetrioCOModel.findOne({_id:id});
            foundBaseKeywords.keyword = keyword ;
            foundBaseKeywords.module = module ;
            foundBaseKeywords.category = category ;
            foundBaseKeywords.createdAt=createdAt;
            newBaseKeywords = await foundBaseKeywords.save();
            return newBaseKeywords;
        }

      return newBaseKeywords;
}


function removeBaseKeywords(id,nameDB){
    // return Model.deleteOne({
    //     _id:id
    // });

    switch (nameDB) {
        
        case 'igsSerfinanzaCO':
            return baseKeywordsSerFinanzaModel.deleteOne({_id:id});
            
        case 'igsBancolombiaCO':
            return baseKeywordsBancoColombiaModel.deleteOne({_id:id});
            
        case 'igsEnelCL':
            return baseKeywordsEnelChileModel.deleteOne({_id:id});
            
        case 'igsBanorteMX' :
            return baseKeywordsIgsBanorteMXModel.deleteOne({_id:id});
            
        case 'igsBanistmoPA' :
            return baseKeywordsIgsBanistmoPAModel.deleteOne({_id:id});
            
        case 'bpogsBoldEnglishUS' :
            return baseKeywordsBpogsBoldEnglishUSModel.deleteOne({_id:id});
            
        case 'bpogsHitesDespachoRetiroCO' :
            return baseKeywordsBpogsHitesDespachoRetrioCOModel.deleteOne({_id:id});
            
        }
}

module.exports = {
    list:getBaseKeywords,
    add: addBaseKeywords,
    updateText: updateBaseKeywords,
    remove:removeBaseKeywords,
}