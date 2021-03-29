const {scoringkeywordsSerFinanzaModel,
    scoringkeywordsBancoColombiaModel,
    scoringkeywordsEnelChileModel,
    scoringkeywordsIgsBanorteMXModel,
    scoringkeywordsIgsBanistmoPAModel,
    scoringkeywordsBpogsBoldEnglishUSModel,
    scoringkeywordsBpogsHitesDespachoRetrioCOModel} = require('./model');

async function getScoringkeywords(filterScoringKeywords,nameDB){
    let filter = {};
    
    if(filterScoringKeywords != null){
        filter = {
            keyfile:filterScoringKeywords
        };
    }
    var scoringkeywords ;
    switch (nameDB) {
        
        case 'igsSerfinanzaCO':
            scoringkeywords = await scoringkeywordsSerFinanzaModel.find();
            return scoringkeywords;

        case 'igsBancolombiaCO':
            scoringkeywords = await scoringkeywordsBancoColombiaModel.find();
            return scoringkeywords ;

        case 'igsEnelCL':
            scoringkeywords = await scoringkeywordsEnelChileModel.find();
            return scoringkeywords;
        case 'igsBanorteMX' :
            scoringkeywords = await scoringkeywordsIgsBanorteMXModel.find();
            return scoringkeywords;
        case 'igsBanistmoPA' :
            scoringkeywords = await scoringkeywordsIgsBanistmoPAModel.find();
            return scoringkeywords;
        case 'bpogsBoldEnglishUS' :
            scoringkeywords = await scoringkeywordsBpogsBoldEnglishUSModel.find();
            return scoringkeywords;
        case 'bpogsHitesDespachoRetrioCO' :
            scoringkeywords = await scoringkeywordsBpogsHitesDespachoRetrioCOModel.find();
            return scoringkeywords;            
        }
}

module.exports = {
    list:getScoringkeywords,
}

