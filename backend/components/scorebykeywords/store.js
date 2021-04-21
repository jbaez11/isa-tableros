const {scoreSerFinanzaModel,
    scoreBancoColombiaModel,
    scoreEnelChileModel,
    scoreIgsBanorteMXModel,
    scoreIgsBanistmoPAModel,
    scoreBpogsBoldEnglishUSModel,
    scoreBpogsHitesDespachoRetrioCOModel} = require('./model');

async function getScore(filterScore){
    let filter = {};
    
    if(filterScore != null){
        if(filterScore[0] == 2 && filterScore[1]==0){
            filter = {
                eventDate:filterScore
              //eventDate:{$gte:[filterAgentsAudit[0]],$lte:[filterAgentsAudit[1]]}
                //eventDate:{in:[filterAgentsAudit,filterAgentsAudit2]}
            };
        }else{
            if(filterScore[0]>filterScore[1]){
               filterScore.sort();
            }
            filter = {
                //eventDate:filterAgentsAudit
              eventDate:{$gte:[filterScore[0]],$lte:[filterScore[1]]}
                //eventDate:{in:[filterAgentsAudit,filterAgentsAudit2]}
            };
        }
        
    } 
    var score ;
    switch (nameDB) {
        
        case 'igsSerfinanzaCO':
            score = await scoreSerFinanzaModel.find(filter);
            return score;

        case 'aigsBancolombiaCO':
            score = await scoreBancoColombiaModel.find(filter);
            return score ;

        case 'igsEnelCL':
            score = await scoreEnelChileModel.find(filter);
            return score;
        case 'igsBanorteMX' :
            score = await scoreIgsBanorteMXModel.find(filter);
            return score;
        case 'igsBanistmoPA' :
            score = await scoreIgsBanistmoPAModel.find(filter);
            return score;
        case 'bpogsBoldEnglishUS' :
            score = await scoreBpogsBoldEnglishUSModel.find(filter);
            return score;
        case 'bpogsHitesDespachoRetiroCO' :
            score = await scoreBpogsHitesDespachoRetrioCOModel.find(filter);
            return score;            
        }
}

module.exports = {
    list:getScore,
    // add: addAgents,
    // updateText: updateAgents,
    // remove:removeAgents,
}

