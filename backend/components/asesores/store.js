const Model = require('./model');

async function getAsesores(){
    const asesores = await Model.find();
    return asesores;
}

module.exports = {
    list:getAsesores,
    // add: addAgents,
    // updateText: updateAgents,
    // remove:removeAgents,
}

