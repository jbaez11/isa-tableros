const mongoose = require('mongoose');
const { SerFinanzaConn, BancolombiaConn, EnelChileConn,IgsBanorteMXConn,IgsBanistmoPAConn,BpogsBoldEnglishUSConn,
    BpogsHitesDespachoRetrioCOConn } = require('../../db');
const Schema = mongoose.Schema;
 
const baseKeywordsSchema = new Schema({
    keyword :{
        type: String,
        unique:true,
        lowercase: true
    },
    module: {
        type: String,
        lowercase: true
    },
    category: {
        type: String,
        lowercase: true
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
});

//const model = mongoose.model('Basekeywords', baseKeywordsSchema);
const baseKeywordsSerFinanzaModel = SerFinanzaConn.model('Basekeywords', baseKeywordsSchema);
const baseKeywordsBancoColombiaModel = BancolombiaConn.model('Basekeywords', baseKeywordsSchema);
const baseKeywordsEnelChileModel = EnelChileConn.model('Basekeywords', baseKeywordsSchema);
const baseKeywordsIgsBanorteMXModel = IgsBanorteMXConn.model('Basekeywords', baseKeywordsSchema);
const baseKeywordsIgsBanistmoPAModel = IgsBanistmoPAConn.model('Basekeywords', baseKeywordsSchema);
const baseKeywordsBpogsBoldEnglishUSModel = BpogsBoldEnglishUSConn.model('Basekeywords', baseKeywordsSchema);
const baseKeywordsBpogsHitesDespachoRetrioCOModel = BpogsHitesDespachoRetrioCOConn.model('Basekeywords', baseKeywordsSchema);

module.exports = {
    baseKeywordsSerFinanzaModel,
    baseKeywordsBancoColombiaModel,
    baseKeywordsEnelChileModel,
    baseKeywordsIgsBanorteMXModel,
    baseKeywordsIgsBanistmoPAModel,
    baseKeywordsBpogsBoldEnglishUSModel,
    baseKeywordsBpogsHitesDespachoRetrioCOModel
};
