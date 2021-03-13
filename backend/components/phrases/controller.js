const store = require('./store');

function getAsesores(filterAgentsAudit){
    return new Promise((resolve,reject) => {
         console.log(store.list())
         resolve(store.list(filterAgentsAudit));  
    });
}

module.exports = {
    getAsesores,
   
}

