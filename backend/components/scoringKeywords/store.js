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
        if(filterScoringKeywords[0] == 2 && filterScoringKeywords[1]==0){
            filter = {
                eventDate:filterScoringKeywords
              //eventDate:{$gte:[filterAgentsAudit[0]],$lte:[filterAgentsAudit[1]]}
                //eventDate:{in:[filterAgentsAudit,filterAgentsAudit2]}
            };
        }else{
            if(filterScoringKeywords[0]>filterScoringKeywords[1]){
               filterScoringKeywords.sort();
            }
            filter = {
                //eventDate:filterAgentsAudit
              eventDate:{$gte:[filterScoringKeywords[0]],$lte:[filterScoringKeywords[1]]}
                //eventDate:{in:[filterAgentsAudit,filterAgentsAudit2]}
            };
        }
        
    }
    var scoringkeywords ;
    switch (nameDB) {
        
        case 'igsSerfinanzaCO':
            scoringkeywords = await scoringkeywordsSerFinanzaModel.find(filter);
            return scoringkeywords;

        case 'aigsBancolombiaCO':
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

