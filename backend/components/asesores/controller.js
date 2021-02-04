const store = require('./store');

function getAsesores(){
    return new Promise((resolve,reject) => {
         console.log(store.list())
         resolve(store.list());  
    });
}

module.exports = {
    getAsesores,
   
}