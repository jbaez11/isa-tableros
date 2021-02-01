const store = require('./store');

function getBaseKeywords(){
    return new Promise((resolve,reject) => {
        resolve(store.list());  
    });
}

module.exports = {
    getBaseKeywords
}