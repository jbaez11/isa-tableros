const Model = require('./model');

async function getScoringkeywords(filterScoringKeywords){
    let filter = {};
    
    if(filterScoringKeywords != null){
        filter = {
            keyfile:filterScoringKeywords
        };
    }
    const scoringkeywords = await Model.find(filter);
    return scoringkeywords;
}

module.exports = {
    list:getScoringkeywords,
}

