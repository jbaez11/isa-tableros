const {agentsAuditSerFinanzaModel,
    agentsAuditBancoColombiaModel,
    agentsAuditEnelChileModel,
    agentsAuditIgsBanorteMXModel,
    agentsAuditIgsBanistmoPAModel,
    agentsAuditBpogsBoldEnglishUSModel,
    agentsAuditBpogsHitesDespachoRetrioCOModel,
    agentsAuditBpogsBoldFrenchFRModel,
    agentsAuditIgsDaviplataCOModel,agentsAuditBpogsAMCCOModel,
    agentsAuditIgsBancoDeOccidenteCOModel,
    agentsAuditIgsSufiCOModel,
    agentsAuditBpogsHitesFinancieroCOModel} = require('./model');


async function getAsesores(filterAgentsAudit,nameDB){
    let filter = {};
    console.log('filtro fc',filterAgentsAudit)
    //console.log('filtro 0 ',filterAgentsAudit[0],' y filtro 1 ',filterAgentsAudit[1])
    if(filterAgentsAudit != null){
        if(filterAgentsAudit[0] == 2 && filterAgentsAudit[1]==0){
            filter = {
                eventDate:filterAgentsAudit
            };
        }else{
            if(filterAgentsAudit[0]>filterAgentsAudit[1]){
               filterAgentsAudit.sort();
            }
            filter = {
                
              eventDate:{$gte:[filterAgentsAudit[0]],$lte:[filterAgentsAudit[1]]}
               
            };
        }
        
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
        case 'bpogsHitesDespachoRetiroCO' :
            agentsAudit = await agentsAuditBpogsHitesDespachoRetrioCOModel.find(filter);
            return agentsAudit;
        case 'bpogsBoldFrenchFR' :
            agentsAudit = await agentsAuditBpogsBoldFrenchFRModel.find(filter);
            return agentsAudit;
        case 'igsDaviplataCO' :
                agentsAudit = await agentsAuditIgsDaviplataCOModel.find(filter);
                return agentsAudit;
        case 'igsDaviplataCO' :
                agentsAudit = await agentsAuditIgsDaviplataCOModel.find(filter);
                return agentsAudit;
        case 'bpogsAMCCO' :
                agentsAudit = await agentsAuditBpogsAMCCOModel.find(filter);
                return agentsAudit;
        case 'igsBancoDeOccidenteCO' :
                agentsAudit = await agentsAuditIgsBancoDeOccidenteCOModel.find(filter);
                return agentsAudit;
        case 'igsSufiCO' :
                agentsAudit = await agentsAuditIgsSufiCOModel.find(filter);
                return agentsAudit;
        case 'bpogsHitesFinancieroCO' :
                agentsAudit = await agentsAuditBpogsHitesFinancieroCOModel.find(filter);
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

