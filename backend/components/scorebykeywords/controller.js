const store = require('./store');

function getScore(filterScore){
    return new Promise((resolve,reject) => {
         console.log(store.list())
         resolve(store.list(filterScore));  
    });
}

module.exports = {
    getScore,
   
}

