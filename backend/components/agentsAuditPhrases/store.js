const {auditPhrasesSerFinanzaModel,
    auditPhrasesBancoColombiaModel,
    auditPhrasesEnelChileModel,
    auditPhrasesIgsBanorteMXModel,
    auditPhrasesIgsBanistmoPAModel,
    auditPhrasesBpogsBoldEnglishUSModel,
    auditPhrasesBpogsHitesDespachoRetrioCOModel} = require('./model');

async function getAsesoresPhrases(filterAgentsAuditPhrases,nameDB){
    let filter = {};
    
    if(filterAgentsAuditPhrases != null){
        filter = {
            eventDate:filterAgentsAuditPhrases
        };
    }
    var auditPhrases ;
    switch (nameDB) {
        
        case 'igsSerfinanzaCO':
            auditPhrases = await auditPhrasesSerFinanzaModel.find(filter);
            return auditPhrases;

        case 'igsBancolombiaCO':
            auditPhrases = await auditPhrasesBancoColombiaModel.find(filter);
            return auditPhrases ;

        case 'igsEnelCL':
            auditPhrases = await auditPhrasesEnelChileModel.find(filter);
            return auditPhrases;
        case 'igsBanorteMX' :
            auditPhrases = await auditPhrasesIgsBanorteMXModel.find(filter);
            return auditPhrases;
        case 'igsBanistmoPA' :
            auditPhrases = await auditPhrasesIgsBanistmoPAModel.find(filter);
            return auditPhrases;
        case 'bpogsBoldEnglishUS' :
            auditPhrases = await auditPhrasesBpogsBoldEnglishUSModel.find(filter);
            return auditPhrases;
        case 'bpogsHitesDespachoRetrioCO' :
            auditPhrases = await auditPhrasesBpogsHitesDespachoRetrioCOModel.find(filter);
            return auditPhrases;            
        }
}

module.exports = {
    list:getAsesoresPhrases,
    // add: addAgents,
    // updateText: updateAgents,
    // remove:removeAgents,
}

