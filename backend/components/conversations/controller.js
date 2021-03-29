const store = require('./store');

function getConversations(filterConversations){
    return new Promise((resolve,reject) => {
         console.log(store.list())
         resolve(store.list(filterConversations));  
    });
}

module.exports = {
    getConversations,
   
}

