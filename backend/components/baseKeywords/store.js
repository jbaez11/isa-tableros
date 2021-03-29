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
        case 'bpogsHitesDespachoRetrioCO' :
            baseKeywords = await baseKeywordsBpogsHitesDespachoRetrioCOModel.find();
            return baseKeywords;
        }
}

function addBaseKeywords(baseKeywords){

    const myBaseKeywords = new Model(baseKeywords);
    myBaseKeywords.save();

}

async function updateBaseKeywords(id,keyword,module,category,createdAt){
    const foundBaseKeywords = await Model.findOne({
        _id : id
    });

    foundBaseKeywords.keyword = keyword ;
    foundBaseKeywords.module = module ;
    foundBaseKeywords.category = category ;
    foundBaseKeywords.createdAt=createdAt;
    const newBaseKeywords = await foundBaseKeywords.save();
    console.log('new bae', newBaseKeywords);
    return newBaseKeywords;

}


function removeBaseKeywords(id){
    return Model.deleteOne({
        _id:id
    });
}

module.exports = {
    list:getBaseKeywords,
    add: addBaseKeywords,
    updateText: updateBaseKeywords,
    remove:removeBaseKeywords,
}