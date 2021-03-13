const Model = require('./model');

async function getAsesoresPhrases(filterAgentsAuditPhrases){
    let filter = {};
    
    if(filterAgentsAuditPhrases != null){
        filter = {
            eventDate:filterAgentsAuditPhrases
        };
    }
    const asesores = await Model.find(filter);
    return asesores;
}

module.exports = {
    list:getAsesoresPhrases,
    // add: addAgents,
    // updateText: updateAgents,
    // remove:removeAgents,
}

