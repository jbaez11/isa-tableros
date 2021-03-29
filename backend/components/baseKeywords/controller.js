const store = require('./store');
const utf8 = require('utf8');

function getBaseKeywords(dbname){
    return new Promise((resolve,reject) => {
        //console.log(store.list.length)
        resolve(store.list(dbname));  
    });
}

function addBaseKeywords(keyword,module,category){

    return new Promise((resolve,reject) => {
        if(!keyword || !module || !category){
            console.log('[Message Controller] no hay keyword o module o category');
            reject('Los datos son incorrectos');
            return false;
        }
        store.list()
        .then(lista=>{
            let keywordList = [];
            let numKeywords=lista.length;
            let bufferMix=0;
            for(let i =0;i<numKeywords;i++){
                keywordList.push(lista[i].keyword);
                let keywordUTF8 = utf8.encode(lista[i].keyword);
                console.log(keywordUTF8)
                bufferMix +=  keywordUTF8.length;
                
            }

            let buffer_bytes = bufferMix + 4 *numKeywords+110;

            //console.log(buffer_bytes);
        })
        const  fullBaseKeywords = {
            keyword:keyword,
            module:module,
            category: category,
        }
        store.add(fullBaseKeywords);
        resolve(fullBaseKeywords);

    })
    
}

function updateBaseKeywords(id, keyword,module,category,createdAt){//
    return new Promise(async(resolve,reject) => {
        console.log('id', id);
        console.log('keyword', keyword);
        console.log('module' , module);
        console.log('category', category);
        createdAt=new Date();
        if(!id || !keyword || !module || !category){
            reject('Invalid Data');
            return false;
        }

        const result = await store.updateText(id,keyword,module,category,createdAt);

        resolve(result);
    })
}

function deleteBaseKeywords(id){
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
    getBaseKeywords,
    addBaseKeywords,
    updateBaseKeywords,
    deleteBaseKeywords,
}