const Model = require('./model');

async function getAsesores(filterAgentsAudit){
    let filter = {};
    if(filterAgentsAudit != null){
        filter = {
            eventDatetime:filterAgentsAudit
        };
    }
    const asesores = await Model.find(filter);
    return asesores;
}

module.exports = {
    list:getAsesores,
    // add: addAgents,
    // updateText: updateAgents,
    // remove:removeAgents,
}

