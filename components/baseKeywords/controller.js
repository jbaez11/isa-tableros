const store = require('./store');

function getBaseKeywords(){
    return new Promise((resolve,reject) => {
        console.log(store.list())
        resolve(store.list());  
    });
}

function addBaseKeywords(keyword,module,category){

    return new Promise((resolve,reject) => {
        if(!keyword || !module || !category){
            console.log('[Message Controller] no hay keyword o module o category');
            reject('Los datos son incorrectos');
            return false;
        }

        const  fullBaseKeywords = {
            keyword:keyword,
            module:module,
            category: category,
        }
        store.add(fullBaseKeywords);
        resolve(fullBaseKeywords);

    })
    
}

module.exports = {
    getBaseKeywords,
    addBaseKeywords,
}