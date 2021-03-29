const mongoose = require('mongoose');
const Int32 = require('mongoose-int32');
const Double = require('@mongoosejs/double');
const { SerFinanzaConn, BancolombiaConn, EnelChileConn,IgsBanorteMXConn,IgsBanistmoPAConn,BpogsBoldEnglishUSConn,
    BpogsHitesDespachoRetrioCOConn } = require('../../db');
const Schema = mongoose.Schema;

const consumptionSchema = new Schema({
     eventDate : {
         type: Date,
     },
    
    processedFiles:{
        type: Number,
    },
    unprocessedFiles: {
        type: Number,
    },
    totalFiles: {
        type: Number,
    },
    processedMinutes: {
        type: Number,
    },
    unprocessedMinutes: {
        type: Number,
    },
    totalMinutes: {
        type: Number,
    },
    notes: {
        type: String,
    },
    yearMonthString:{
        type:String,
    },
    dayString:{
        type:String,
    },
    createdAt: { 
         type: Date, 
         
     },
});

//const model = mongoose.model('Consumptions', consumptionSchema);
const consumptionSerFinanzaModel = SerFinanzaConn.model('Consumptions', consumptionSchema);
const consumptionBancoColombiaModel = BancolombiaConn.model('Consumptions', consumptionSchema);
const consumptionEnelChileModel = EnelChileConn.model('Consumptions', consumptionSchema);
const consumptionIgsBanorteMXModel = IgsBanorteMXConn.model('Consumptions', consumptionSchema);
const consumptionIgsBanistmoPAModel = IgsBanistmoPAConn.model('Consumptions', consumptionSchema);
const consumptionBpogsBoldEnglishUSModel = BpogsBoldEnglishUSConn.model('Consumptions', consumptionSchema);
const consumptionBpogsHitesDespachoRetrioCOModel = BpogsHitesDespachoRetrioCOConn.model('Consumptions', consumptionSchema);

module.exports = {
    consumptionSerFinanzaModel,
    consumptionBancoColombiaModel,
    consumptionEnelChileModel,
    consumptionIgsBanorteMXModel,
    consumptionIgsBanistmoPAModel,
    consumptionBpogsBoldEnglishUSModel,
    consumptionBpogsHitesDespachoRetrioCOModel
}; 