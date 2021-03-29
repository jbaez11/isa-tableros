const {agentsAuditSerFinanzaModel,
    agentsAuditBancoColombiaModel,
    agentsAuditEnelChileModel,
    agentsAuditIgsBanorteMXModel,
    agentsAuditIgsBanistmoPAModel,
    agentsAuditBpogsBoldEnglishUSModel,
    agentsAuditBpogsHitesDespachoRetrioCOModel} = require('./model');


async function getAsesores(filterAgentsAudit,nameDB){
    let filter = {};
    
    if(filterAgentsAudit != null){
        filter = {
            eventDate:filterAgentsAudit
        };
    }

    var agentsAudit ;
    switch (nameDB) {
        
        case 'igsSerfinanzaCO':
            agentsAudit = await agentsAuditSerFinanzaModel.find(filter);
            return agentsAudit;

        case 'igsBancolombiaCO':
            agentsAudit = await agentsAuditBancoColombiaModel.find(filter);
            return agentsAudit ;

        case 'igsEnelCL':
            agentsAudit = await agentsAuditEnelChileModel.find(filter);
            return agentsAudit;
        case 'igsBanorteMX' :
            agentsAudit = await agentsAuditIgsBanorteMXModel.find(filter);
            return agentsAudit;
        case 'igsBanistmoPA' :
            agentsAudit = await agentsAuditIgsBanistmoPAModel.find(filter);
            return agentsAudit;
        case 'bpogsBoldEnglishUS' :
            agentsAudit = await agentsAuditBpogsBoldEnglishUSModel.find(filter);
            return agentsAudit;
        case 'bpogsHitesDespachoRetrioCO' :
            agentsAudit = await agentsAuditBpogsHitesDespachoRetrioCOModel.find(filter);
            return agentsAudit;            
        }
    //return asesores;
}

module.exports = {
    list:getAsesores,
    // add: addAgents,
    // updateText: updateAgents,
    // remove:removeAgents,
}

