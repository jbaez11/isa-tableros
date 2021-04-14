const {auditconversationSerFinanzaModel,
    auditconversationBancoColombiaModel,
    auditconversationEnelChileModel,
    auditconversationIgsBanorteMXModel,
    auditconversationIgsBanistmoPAModel,
    auditconversationBpogsBoldEnglishUSModel,
    auditconversationBpogsHitesDespachoRetrioCOModel,
    auditconversationalkTestCOModel} = require('./model');

async function getConversations(filterConversations){
    let filter = {};
    
    if(filterConversations != null){
        filter = {
            eventDate:filterConversations
        };
    }

    var auditconversation ;
    switch (nameDB) {
        
        case 'igsSerfinanzaCO':
            auditconversation = await auditconversationSerFinanzaModel.find(filter);
            return auditconversation;

        case 'igsBancolombiaCO':
            auditconversation = await auditconversationBancoColombiaModel.find(filter);
            return auditconversation ;

        case 'igsEnelCL':
            auditconversation = await auditconversationEnelChileModel.find(filter);
            return auditconversation;
        case 'igsBanorteMX' :
            auditconversation = await auditconversationIgsBanorteMXModel.find(filter);
            return auditconversation;
        case 'igsBanistmoPA' :
            auditconversation = await auditconversationIgsBanistmoPAModel.find(filter);
            return auditconversation;
        case 'bpogsBoldEnglishUS' :
            auditconversation = await auditconversationBpogsBoldEnglishUSModel.find(filter);
            return auditconversation;
        case 'bpogsHitesDespachoRetiroCO' :
            auditconversation = await auditconversationBpogsHitesDespachoRetrioCOModel.find(filter);
            return auditconversation;
        case 'alkTestCO' :
            conversations = await auditconversationalkTestCOModel.find(filter);
            return conversations;            
        }
}

module.exports = {
    list:getConversations,
    
}

