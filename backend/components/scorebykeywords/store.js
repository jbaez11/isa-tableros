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
        filter = {
            eventDate:filterScore
        };
    }
    var score ;
    switch (nameDB) {
        
        case 'igsSerfinanzaCO':
            score = await scoreSerFinanzaModel.find(filter);
            return score;

        case 'igsBancolombiaCO':
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
        case 'bpogsHitesDespachoRetrioCO' :
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

