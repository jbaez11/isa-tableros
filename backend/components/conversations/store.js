const {conversationsSerFinanzaModel,
    conversationsBancoColombiaModel,
    conversationsEnelChileModel,
    conversationsIgsBanorteMXModel,
    conversationsIgsBanistmoPAModel,
    conversationsBpogsBoldEnglishUSModel,
    conversationsBpogsHitesDespachoRetrioCOModel} = require('./model');

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
            conversations = await conversationsSerFinanzaModel.find();
            return conversations;

        case 'igsBancolombiaCO':
            conversations = await conversationsBancoColombiaModel.find();
            return conversations ;

        case 'igsEnelCL':
            conversations = await conversationsEnelChileModel.find();
            return conversations;
        case 'igsBanorteMX' :
            conversations = await conversationsIgsBanorteMXModel.find();
            return conversations;
        case 'igsBanistmoPA' :
            conversations = await conversationsIgsBanistmoPAModel.find();
            return conversations;
        case 'bpogsBoldEnglishUS' :
            conversations = await conversationsBpogsBoldEnglishUSModel.find();
            return conversations;
        case 'bpogsHitesDespachoRetrioCO' :
            conversations = await conversationsBpogsHitesDespachoRetrioCOModel.find();
            return conversations;            
        }
}

module.exports = {
    list:getConversations,
    
}

