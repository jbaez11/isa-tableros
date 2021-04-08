const { agentsSerFinanzaModel,agentsBancoColombiaModel, agentsEnelChileModel,agentsIgsBanorteMXModel,agentsIgsBanistmoPAModel,agentsBpogsBoldEnglishUSModel,agentsBpogsHitesDespachoRetrioCOModel} = require('./model');

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

function addAgents(agents,nameDB){

    //const myAgents = new Model(agents);
    //myAgents.save(); 

    var myAgents;
    switch (nameDB) {
        
        case 'igsSerfinanzaCO':
            myAgents = new agentsSerFinanzaModel(agents);
            myAgents.save();
            return myAgents;

        case 'igsBancolombiaCO':
            myAgents = new agentsBancoColombiaModel(agents);
            myAgents.save();
            return myAgents ;

        case 'igsEnelCL':
            myAgents = new agentsEnelChileModel(agents);
            myAgents.save();
            return myAgents;
        case 'igsBanorteMX' :
            myAgents = new agentsIgsBanorteMXModel(agents);
            myAgents.save();
            return myAgents;
        case 'igsBanistmoPA' :
            myAgents = new agentsIgsBanistmoPAModel(agents);
            myAgents.save();
            return myAgents;
        case 'bpogsBoldEnglishUS' :
            myAgents = new agentsBpogsBoldEnglishUSModel(agents);
            myAgents.save();
            return myAgents;
        case 'bpogsHitesDespachoRetiroCO' :
            myAgents = new agentsBpogsHitesDespachoRetrioCOModel(agents);
            myAgents.save();
            return myAgents;
    }

}

async function updateAgents(id,name,identification,gender,createdAt,nameDB){
    // const foundAgents = await Model.findOne({
    //     _id : id
    // });

    // foundAgents.name = name ;
    // foundAgents.identification = identification ;
    // foundAgents.gender = gender ;
    // foundAgents.createdAt = createdAt;
    // const newAgents = await foundAgents.save();
    // console.log('new bae', newAgents);
    // return newAgents;

    var foundAgents;
    var newAgents;
    switch (nameDB) {
        
        case 'igsSerfinanzaCO':
            foundAgents = await agentsSerFinanzaModel.findOne({_id : id});
            foundAgents.name = name ;
            foundAgents.identification = identification ;
            foundAgents.gender = gender ;
            foundAgents.createdAt = createdAt;
            newAgents = await foundAgents.save();
            return newAgents;

        case 'igsBancolombiaCO':
            foundAgents = await agentsBancoColombiaModel.findOne({_id : id});
            foundAgents.name = name ;
            foundAgents.identification = identification ;
            foundAgents.gender = gender ;
            foundAgents.createdAt = createdAt;
            newAgents = await foundAgents.save();
            return newAgents;

        case 'igsEnelCL':
            foundAgents = await agentsEnelChileModel.findOne({_id : id});
            foundAgents.name = name ;
            foundAgents.identification = identification ;
            foundAgents.gender = gender ;
            foundAgents.createdAt = createdAt;
            newAgents = await foundAgents.save();
            return newAgents;
        case 'igsBanorteMX' :
            foundAgents = await agentsIgsBanorteMXModel.findOne({_id : id});
            foundAgents.name = name ;
            foundAgents.identification = identification ;
            foundAgents.gender = gender ;
            foundAgents.createdAt = createdAt;
            newAgents = await foundAgents.save();
            return newAgents;
        case 'igsBanistmoPA' :
            foundAgents = await agentsIgsBanistmoPAModel.findOne({_id : id});
            foundAgents.name = name ;
            foundAgents.identification = identification ;
            foundAgents.gender = gender ;
            foundAgents.createdAt = createdAt;
            newAgents = await foundAgents.save();
            return newAgents;
        case 'bpogsBoldEnglishUS' :
            foundAgents = await agentsBpogsBoldEnglishUSModel.findOne({_id : id});
            foundAgents.name = name ;
            foundAgents.identification = identification ;
            foundAgents.gender = gender ;
            foundAgents.createdAt = createdAt;
            newAgents = await foundAgents.save();
            return newAgents;
        case 'bpogsHitesDespachoRetrioCO' :
            foundAgents = await agentsBpogsHitesDespachoRetrioCOModel.findOne({_id : id});
            foundAgents.name = name ;
            foundAgents.identification = identification ;
            foundAgents.gender = gender ;
            foundAgents.createdAt = createdAt;
            newAgents = await foundAgents.save();
            return newAgents; 
    }
    return newAgents;

}


function removeAgents(id,nameDB){
    // return Model.deleteOne({
    //     _id:id
    // });

    
    switch (nameDB) {
        
        case 'igsSerfinanzaCO':
            return agentsSerFinanzaModel.deleteOne({_id:id});
            
        case 'igsBancolombiaCO':
            return agentsBancoColombiaModel.deleteOne({_id:id});
            
        case 'igsEnelCL':
            return agentsEnelChileModel.deleteOne({_id:id});
            
        case 'igsBanorteMX' :
            return agentsIgsBanorteMXModel.deleteOne({_id:id});
            
        case 'igsBanistmoPA' :
            return agentsIgsBanistmoPAModel.deleteOne({_id:id});
            
        case 'bpogsBoldEnglishUS' :
            return agentsBpogsBoldEnglishUSModel.deleteOne({_id:id});
            
        case 'bpogsHitesDespachoRetrioCO' :
            return agentsBpogsHitesDespachoRetrioCOModel.deleteOne({_id:id});
                        
    }
}


module.exports = {
    list:getAgents,
    add: addAgents,
    updateText: updateAgents,
    remove:removeAgents,
}