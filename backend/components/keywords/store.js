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
            keywords = await keywordsSerFinanzaModel.find(filter);
            return keywords;

        case 'aigsBancolombiaCO':
            keywords = await keywordsBancoColombiaModel.find(filter);
            return keywords ;

        case 'igsEnelCL':
            keywords = await keywordsEnelChileModel.find(filter);
            return keywords;
        case 'igsBanorteMX' :
            keywords = await keywordsIgsBanorteMXModel.find(filter);
            return keywords;
        case 'igsBanistmoPA' :
            keywords = await keywordsIgsBanistmoPAModel.find(filter);
            return keywords;
        case 'bpogsBoldEnglishUS' :
            keywords = await keywordsBpogsBoldEnglishUSModel.find(filter);
            return keywords;
        case 'bpogsHitesDespachoRetiroCO' :
            keywords = await keywordsBpogsHitesDespachoRetrioCOModel.find(filter);
            return keywords;            
        }
}

module.exports = {
    list:getAsesores,
    
}

