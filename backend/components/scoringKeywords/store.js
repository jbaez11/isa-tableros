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
            scoringkeywords = await scoringkeywordsSerFinanzaModel.find(filter);
            return scoringkeywords;

        case 'igsBancolombiaCO':
            scoringkeywords = await scoringkeywordsBancoColombiaModel.find(filter);
            return scoringkeywords ;

        case 'igsEnelCL':
            scoringkeywords = await scoringkeywordsEnelChileModel.find(filter);
            return scoringkeywords;
        case 'igsBanorteMX' :
            scoringkeywords = await scoringkeywordsIgsBanorteMXModel.find(filter);
            return scoringkeywords;
        case 'igsBanistmoPA' :
            scoringkeywords = await scoringkeywordsIgsBanistmoPAModel.find(filter);
            return scoringkeywords;
        case 'bpogsBoldEnglishUS' :
            scoringkeywords = await scoringkeywordsBpogsBoldEnglishUSModel.find(filter);
            return scoringkeywords;
        case 'bpogsHitesDespachoRetiroCO' :
            scoringkeywords = await scoringkeywordsBpogsHitesDespachoRetrioCOModel.find(filter);
            return scoringkeywords;            
        }
}

module.exports = {
    list:getScoringkeywords,
}

