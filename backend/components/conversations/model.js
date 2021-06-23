const mongoose = require('mongoose');
//var connection = mongoose.createConnection()
const { SerFinanzaConn, BancolombiaConn, EnelChileConn,IgsBanorteMXConn,
    IgsBanistmoPAConn,BpogsBoldEnglishUSConn,
    BpogsHitesDespachoRetrioCOConn,alkTestCOconn,BpogsBoldFrenchFRConn,IgsDaviplataCOConn,
    BpogsAMCCOCon, IgsBancoDeOccidenteCOConn } = require('../../db');
const Schema = mongoose.Schema;

const conversationsSchema = new Schema({
    keyfile : String,
    eventDatetime: Date,
    eventDate:Date,
    agent :{
        name : String,
        identification: String,
        gender:String,
        
    },
    conversation:{
        // aqui indicas que el tipo de dato es Array
        type: Object,
        // aqui lo inicializas por defecto como un array vacío
        default: {}
    },
    createdAt:Date

    
});

//const model = mongoose.model('Conversations', conversationsSchema);
const conversationsSerFinanzaModel = SerFinanzaConn.model('Conversations', conversationsSchema);
const conversationsBancoColombiaModel = BancolombiaConn.model('Conversations', conversationsSchema);
const conversationsEnelChileModel = EnelChileConn.model('Conversations', conversationsSchema);
const conversationsIgsBanorteMXModel = IgsBanorteMXConn.model('Conversations', conversationsSchema);
const conversationsIgsBanistmoPAModel = IgsBanistmoPAConn.model('Conversations', conversationsSchema);
const conversationsBpogsBoldEnglishUSModel = BpogsBoldEnglishUSConn.model('Conversations', conversationsSchema);
const conversationsBpogsHitesDespachoRetrioCOModel = BpogsHitesDespachoRetrioCOConn.model('Conversations', conversationsSchema);
const conversationsAlkTestCOModel = alkTestCOconn.model('Conversations', conversationsSchema)
const conversationsBpogsBoldFrenchFRModel = BpogsBoldFrenchFRConn.model('Conversations', conversationsSchema);
const conversationsDaviplataCOModel = IgsDaviplataCOConn.model('Conversations', conversationsSchema);
const conversationsBpogsAMCCOModel = BpogsAMCCOCon.model('Conversations', conversationsSchema);
const conversationsIgsBancoDeOccidenteCOModel = IgsBancoDeOccidenteCOConn.model('Conversations', conversationsSchema);


module.exports = {
    conversationsDaviplataCOModel,
    conversationsBpogsBoldFrenchFRModel,
    conversationsSerFinanzaModel,
    conversationsBancoColombiaModel,
    conversationsEnelChileModel,
    conversationsIgsBanorteMXModel,
    conversationsIgsBanistmoPAModel,
    conversationsBpogsBoldEnglishUSModel,
    conversationsBpogsHitesDespachoRetrioCOModel,
    conversationsAlkTestCOModel,
    conversationsBpogsAMCCOModel,
    conversationsIgsBancoDeOccidenteCOModel,
};