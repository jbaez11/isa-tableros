const {keywordsSerFinanzaModel,
    keywordsBancoColombiaModel,
    keywordsEnelChileModel,
    keywordsIgsBanorteMXModel,
    keywordsIgsBanistmoPAModel,
    keywordsBpogsBoldEnglishUSModel,
    keywordsBpogsHitesDespachoRetrioCOModel,
    keywordsBpogsBoldFrenchFRModel,
    keywordsDaviplataCOModel,
    keywordsBpogsAMCCOModel,
    keywordsIgsBancoDeOccidenteCOModel} = require('./model');

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

        case 'igsBancolombiaCO':
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
        case 'bpogsBoldFrenchFR' :
            keywords = await keywordsBpogsBoldFrenchFRModel.find(filter);
            return keywords;
        case 'igsDaviplataCO' :
            keywords = await keywordsDaviplataCOModel.find(filter);
            return keywords;
        case 'bpogsAMCCO' :
            keywords = await keywordsBpogsAMCCOModel.find(filter);
            return keywords;
        case 'igsBancoDeOccidenteCO' :
            keywords = await keywordsIgsBancoDeOccidenteCOModel.find(filter);
            return keywords;    
                       
        }
}

module.exports = {
    list:getAsesores,
    
}

