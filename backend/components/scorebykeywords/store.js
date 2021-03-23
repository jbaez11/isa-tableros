const Model = require('./model');

async function getScore(filterScore){
    let filter = {};
    
    if(filterScore != null){
        filter = {
            eventDate:filterScore
        };
    }
    const scores = await Model.find(filter);
    return scores;
}

module.exports = {
    list:getScore,
    // add: addAgents,
    // updateText: updateAgents,
    // remove:removeAgents,
}

