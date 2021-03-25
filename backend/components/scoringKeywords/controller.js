const store = require('./store');

function getScoringkeywords(filterScoringKeywords){
    return new Promise((resolve,reject) => {
         console.log(store.list())
         resolve(store.list(filterScoringKeywords));  
    });
}

module.exports = {
    getScoringkeywords,
   
}