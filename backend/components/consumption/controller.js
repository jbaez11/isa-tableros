const store = require('./store');

function getConsumption(filterConsumption){
    return new Promise((resolve,reject) => {
        // store.list()
        // .then(lista=>{
        //     console.log(lista)
        // });
        //console.log(store.list())
        resolve(store.list(filterConsumption));  
    });
}

module.exports = {
    getConsumption,
}