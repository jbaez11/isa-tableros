const { agentsSerFinanzaModel, 
    agentsBancoColombiaModel, agentsEnelChileModel,agentsIgsBanorteMXModel,
    agentsIgsBanistmoPAModel,
    agentsBpogsBoldEnglishUSModel,
    agentsBpogsHitesDespachoRetrioCOModel} = require('./model');

async function getAgents( nameDB){
    //const agents = await Model.find();
    var agents;
    switch (nameDB) {
        
        case 'igsSerfinanzaCO':
            agents = await agentsSerFinanzaModel.find();
            return agents;

        case 'igsBancolombiaCO':
            agents = await agentsBancoColombiaModel.find();
            return agents ;

        case 'igsEnelCL':
            agents = await agentsEnelChileModel.find();
            return agents;
        case 'igsBanorteMX' :
            agents = await agentsIgsBanorteMXModel.find();
            return agents;
        case 'igsBanistmoPA' :
            agents = await agentsIgsBanistmoPAModel.find();
            return agents;
        case 'bpogsBoldEnglishUS' :
            agents = await agentsBpogsBoldEnglishUSModel.find();
            return agents;
        case 'bpogsHitesDespachoRetrioCO' :
            agents = await agentsBpogsHitesDespachoRetrioCOModel.find();
            return agents;            



    }
    //return agents;
}

function addAgents(agents){

    const myAgents = new Model(agents);
    myAgents.save();

}

async function updateAgents(id,name,identification,gender,createdAt){
    const foundAgents = await Model.findOne({
        _id : id
    });

    foundAgents.name = name ;
    foundAgents.identification = identification ;
    foundAgents.gender = gender ;
    foundAgents.createdAt = createdAt;
    const newAgents = await foundAgents.save();
    console.log('new bae', newAgents);
    return newAgents;

}


function removeAgents(id){
    return Model.deleteOne({
        _id:id
    });
}


module.exports = {
    list:getAgents,
    add: addAgents,
    updateText: updateAgents,
    remove:removeAgents,
}