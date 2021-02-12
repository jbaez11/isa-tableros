const store = require('./store');

function getBasePhrases(){
    return new Promise((resolve,reject) => {
        console.log(store.list())
        resolve(store.list());  
    });
}

function addBasePhrases(phrase,module,category){

    return new Promise((resolve,reject) => {
        if(!phrase || !module || !category){
            console.log('[Message Controller] no hay Phrase o module o category');
            reject('Los datos son incorrectos');
            return false;
        }

        const  fullBasePhrases = {
            phrase:phrase,
            module:module,
            category: category,
        }
        store.add(fullBasePhrases);
        resolve(fullBasePhrases);

    })
    
}

function updateBasePhrases(id, phrase,module,category){//
    return new Promise(async(resolve,reject) => {
        console.log('id', id);
        console.log('phrase', phrase);
        console.log('module' , module);
        console.log('category', category);
        if(!id || !phrase || !module || !category){
            reject('Invalid Data');
            return false;
        }

        const result = await store.updateText(id,phrase,module,category);

        resolve(result);
    })
}
function deleteBasePhrases(id){
    return new Promise((resolve,reject) => {
        if(!id){
            reject('ID Invalido');
            return false;
        }
        store.remove(id)
            .then(()=> {
                resolve();
            })
            .catch(e => {
                reject(e)
            });
    });
}
module.exports = {
    getBasePhrases,
    addBasePhrases,
    updateBasePhrases,
    deleteBasePhrases,
}