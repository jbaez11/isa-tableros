const {keywordsSerFinanzaModel,
    keywordsBancoColombiaModel,
    keywordsEnelChileModel,
    keywordsIgsBanorteMXModel,
    keywordsIgsBanistmoPAModel,
    keywordsBpogsBoldEnglishUSModel,
    keywordsBpogsHitesDespachoRetrioCOModel} = require('./model');

async function getAsesores(filterAgentsAudit,nameDB){
    let filter = {};
    
    if(filterAgentsAudit != null){
        filter = {
            keyfile:filterAgentsAudit
        };
    }
    var keywords ;
    switch (nameDB) {
        
        case 'igsSerfinanzaCO':
            keywords = await keywordsSerFinanzaModel.find();
            return keywords;

        case 'igsBancolombiaCO':
            keywords = await keywordsBancoColombiaModel.find();
            return keywords ;

        case 'igsEnelCL':
            keywords = await keywordsEnelChileModel.find();
            return keywords;
        case 'igsBanorteMX' :
            keywords = await keywordsIgsBanorteMXModel.find();
            return keywords;
        case 'igsBanistmoPA' :
            keywords = await keywordsIgsBanistmoPAModel.find();
            return keywords;
        case 'bpogsBoldEnglishUS' :
            keywords = await keywordsBpogsBoldEnglishUSModel.find();
            return keywords;
        case 'bpogsHitesDespachoRetrioCO' :
            keywords = await keywordsBpogsHitesDespachoRetrioCOModel.find();
            return keywords;            
        }
}

module.exports = {
    list:getAsesores,
    
}

