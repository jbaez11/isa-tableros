const {conversationsSerFinanzaModel,
    conversationsBancoColombiaModel,
    conversationsEnelChileModel,
    conversationsIgsBanorteMXModel,
    conversationsIgsBanistmoPAModel,
    conversationsBpogsBoldEnglishUSModel,
    conversationsBpogsHitesDespachoRetrioCOModel,
    conversationsAlkTestCOModel} = require('./model');

async function getConversations(filterConversations,nameDB){
    let filter = {};
    
    if(filterConversations != null){
        filter = {
            keyfile:filterConversations
        };
    }
    var conversations ;
    switch (nameDB) {
        
        case 'igsSerfinanzaCO':
            conversations = await conversationsSerFinanzaModel.find(filter);
            return conversations;

        case 'aigsBancolombiaCO':
            conversations = await conversationsBancoColombiaModel.find(filter);
            return conversations ;

        case 'igsEnelCL':
            conversations = await conversationsEnelChileModel.find(filter);
            return conversations;
        case 'igsBanorteMX' :
            conversations = await conversationsIgsBanorteMXModel.find(filter);
            return conversations;
        case 'igsBanistmoPA' :
            conversations = await conversationsIgsBanistmoPAModel.find(filter);
            return conversations;
        case 'bpogsBoldEnglishUS' :
            conversations = await conversationsBpogsBoldEnglishUSModel.find(filter);
            return conversations;
        case 'bpogsHitesDespachoRetiroCO' :
            conversations = await conversationsBpogsHitesDespachoRetrioCOModel.find(filter);
            return conversations;
        case 'alkTestCO' :
            conversations = await conversationsAlkTestCOModel.find(filter);
            return conversations;                
        }
}

module.exports = {
    list:getConversations,
    
}

