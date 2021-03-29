const {auditconversationSerFinanzaModel,
    auditconversationBancoColombiaModel,
    auditconversationEnelChileModel,
    auditconversationIgsBanorteMXModel,
    auditconversationIgsBanistmoPAModel,
    auditconversationBpogsBoldEnglishUSModel,
    auditconversationBpogsHitesDespachoRetrioCOModel} = require('./model');

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
            auditconversation = await auditconversationSerFinanzaModel.find();
            return auditconversation;

        case 'igsBancolombiaCO':
            auditconversation = await auditconversationBancoColombiaModel.find();
            return auditconversation ;

        case 'igsEnelCL':
            auditconversation = await auditconversationEnelChileModel.find();
            return auditconversation;
        case 'igsBanorteMX' :
            auditconversation = await auditconversationIgsBanorteMXModel.find();
            return auditconversation;
        case 'igsBanistmoPA' :
            auditconversation = await auditconversationIgsBanistmoPAModel.find();
            return auditconversation;
        case 'bpogsBoldEnglishUS' :
            auditconversation = await auditconversationBpogsBoldEnglishUSModel.find();
            return auditconversation;
        case 'bpogsHitesDespachoRetrioCO' :
            auditconversation = await auditconversationBpogsHitesDespachoRetrioCOModel.find();
            return auditconversation;            
        }
}

module.exports = {
    list:getConversations,
    
}

