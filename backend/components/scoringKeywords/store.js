const {scoringkeywordsSerFinanzaModel,
    scoringkeywordsBancoColombiaModel,
    scoringkeywordsEnelChileModel,
    scoringkeywordsIgsBanorteMXModel,
    scoringkeywordsIgsBanistmoPAModel,
    scoringkeywordsBpogsBoldEnglishUSModel,
    scoringkeywordsBpogsHitesDespachoRetrioCOModel,
    scoringkeywordsBpogsBoldFrenchFRModel,
    scoringkeywordsDaviplataCOModel,
    scoringkeywordsBpogsAMCCOModel,
    scoringkeywordsIgsBancoDeOccidenteCOModel,
    scoringkeywordsIgsSufiCOModel,
    scoringkeywordsBpogsHitesFinancieroCOModel} = require('./model');

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
        case 'bpogsBoldFrenchFR' :
            scoringkeywords = await scoringkeywordsBpogsBoldFrenchFRModel.find(filter);
            return scoringkeywords;
        case 'igsDaviplataCO' :
            scoringkeywords = await scoringkeywordsDaviplataCOModel.find(filter);
            return scoringkeywords;
        case 'bpogsAMCCO' :
            scoringkeywords = await scoringkeywordsBpogsAMCCOModel.find(filter);
            return scoringkeywords;
        case 'igsBancoDeOccidenteCO' :
            scoringkeywords = await scoringkeywordsIgsBancoDeOccidenteCOModel.find(filter);
            return scoringkeywords;
        case 'igsSufiCO' :
            scoringkeywords = await scoringkeywordsIgsSufiCOModel.find(filter);
            return scoringkeywords;
        case 'bpogsHitesFinancieroCO' :
            scoringkeywords = await scoringkeywordsBpogsHitesFinancieroCOModel.find(filter);
            return scoringkeywords;                        
               
        }
        
}

module.exports = {
    list:getScoringkeywords,
}

