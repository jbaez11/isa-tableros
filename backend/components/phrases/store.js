const {phrasesSerFinanzaModel,
    phrasesBancoColombiaModel,
    phrasesEnelChileModel,
    phrasesIgsBanorteMXModel,
    phrasesIgsBanistmoPAModel,
    phrasesBpogsBoldEnglishUSModel,
    phrasesBpogsHitesDespachoRetrioCOModel} = require('./model');

async function getAsesores(filterAgentsAudit,nameDB){
    let filter = {};
    
    if(filterAgentsAudit != null){
        filter = {
            keyfile:filterAgentsAudit
        };
    }
    var phrases ;
    switch (nameDB) {
        
        case 'igsSerfinanzaCO':
            phrases = await phrasesSerFinanzaModel.find();
            return phrases;

        case 'igsBancolombiaCO':
            phrases = await phrasesBancoColombiaModel.find();
            return phrases ;

        case 'igsEnelCL':
            phrases = await phrasesEnelChileModel.find();
            return phrases;
        case 'igsBanorteMX' :
            phrases = await phrasesIgsBanorteMXModel.find();
            return phrases;
        case 'igsBanistmoPA' :
            phrases = await phrasesIgsBanistmoPAModel.find();
            return phrases;
        case 'bpogsBoldEnglishUS' :
            phrases = await phrasesBpogsBoldEnglishUSModel.find();
            return phrases;
        case 'bpogsHitesDespachoRetrioCO' :
            phrases = await phrasesBpogsHitesDespachoRetrioCOModel.find();
            return phrases;            
        }
}

module.exports = {
    list:getAsesores,
    // add: addAgents,
    // updateText: updateAgents,
    // remove:removeAgents,
}

