const store = require('./store');

 function getBasePhrases(dbname){
    return  new Promise((resolve,reject) => {
        resolve(store.list(dbname));  
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
                category:category,
                
            }
            store.add(fullBasePhrases);
            resolve(fullBasePhrases);
      
    })
    
}

function updateBasePhrases(id, phrase,module,category,createdAt){//
    return new Promise(async(resolve,reject) => {
        console.log('id', id);
        console.log('phrase', phrase);
        console.log('module' , module);
        console.log('category', category);
        createdAt= new Date();
        console.log('createdAt', createdAt);
        if(!id || !phrase || !module || !category || !createdAt){
            reject('Invalid Data');
            return false;
        }

        const result = await store.updateText(id,phrase,module,category,createdAt,createdAt);

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