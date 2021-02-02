const store = require('./store');

function getBaseKeywords(){
    return new Promise((resolve,reject) => {
        console.log(store.list())
        resolve(store.list());  
    });
}

module.exports = {
    getBaseKeywords,
}