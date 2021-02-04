const Model = require('./model');

async function getAgents(){
    const agents = await Model.find();
    return agents;
}

function addAgents(agents){

    const myAgents = new Model(agents);
    myAgents.save();

}

async function updateAgents(id,name,identification,gender){
    const foundAgents = await Model.findOne({
        _id : id
    });

    foundAgents.name = name ;
    foundAgents.identification = identification ;
    foundAgents.gender = gender ;
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