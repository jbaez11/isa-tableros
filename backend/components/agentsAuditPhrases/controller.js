const store = require('./store');

function getAsesoresPhrases(filterAgentsAuditPhrases){
    return new Promise((resolve,reject) => {
         console.log(store.list())
         resolve(store.list(filterAgentsAuditPhrases));  
    });
}

module.exports = {
    getAsesoresPhrases,
   
}

