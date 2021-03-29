const mongoose = require('mongoose');
const { SerFinanzaConn, BancolombiaConn, EnelChileConn,IgsBanorteMXConn,IgsBanistmoPAConn,BpogsBoldEnglishUSConn,
    BpogsHitesDespachoRetrioCOConn } = require('../../db');
const Schema = mongoose.Schema;

const basePhrasesSchema = new Schema({
    phrase :{
        type: String,
        unique:true
    },
    module: String,
    category: String,
    createdAt: { 
        type: Date, 
        default: Date.now 
    },

});

//const model = mongoose.model('Basephrases', basePhrasesSchema);
const basePhrasesSerFinanzaModel = SerFinanzaConn.model('Basephrases', basePhrasesSchema);
const basePhrasesBancoColombiaModel = BancolombiaConn.model('Basephrases', basePhrasesSchema);
const basePhrasesEnelChileModel = EnelChileConn.model('Basephrases', basePhrasesSchema);
const basePhrasesIgsBanorteMXModel = IgsBanorteMXConn.model('Basephrases', basePhrasesSchema);
const basePhrasesIgsBanistmoPAModel = IgsBanistmoPAConn.model('Basephrases', basePhrasesSchema);
const basePhrasesBpogsBoldEnglishUSModel = BpogsBoldEnglishUSConn.model('Basephrases', basePhrasesSchema);
const basePhrasesBpogsHitesDespachoRetrioCOModel = BpogsHitesDespachoRetrioCOConn.model('Basephrases', basePhrasesSchema);

module.exports = {
    basePhrasesSerFinanzaModel,
    basePhrasesBancoColombiaModel,
    basePhrasesEnelChileModel,
    basePhrasesIgsBanorteMXModel,
    basePhrasesIgsBanistmoPAModel,
    basePhrasesBpogsBoldEnglishUSModel,
    basePhrasesBpogsHitesDespachoRetrioCOModel
};
