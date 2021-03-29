const Model = require('./model');

async function getConversations(filterConversations){
    let filter = {};
    
    if(filterConversations != null){
        filter = {
            eventDate:filterConversations
        };
    }
    const conversations = await Model.find(filter);
    return conversations;
}

module.exports = {
    list:getConversations,
    
}

