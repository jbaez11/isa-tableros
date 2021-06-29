const store = require('./store');

function getClusters(dbname){
    return new Promise((resolve,reject) => {
        //console.log(store.list())
        resolve(store.list(dbname));  
    });
}

function addClusters(nameCategory,nameModule,nameClusters,dbname){
    
     
    return new Promise((resolve,reject) => {
        if(!nameCategory || !nameModule || !nameClusters ){
            console.log('[Message Controller] no hay nameCategory o nameModule o nameClusters');
            reject('Los datos son incorrectos');
            return false;
        }

        const  fullAgents = {
            nameCategory:nameCategory,
            nameModule:nameModule,
            nameClusters:nameClusters
            
        }
        store.add(fullAgents,dbname);
        resolve(fullAgents,dbname);
        
    })
    
}

function updateClusters(id, nameCategory,nameModule,nameClusters,dbname){//
    return new Promise(async(resolve,reject) => {
        console.log('id', id);
        console.log('name', nameCategory);
        console.log('nameModule' , nameModule);
        console.log('nameClusters' , nameClusters);
        
        if(!id || !nameCategory || !nameModule || !nameClusters  ){
            reject('Invalid Data');
            return false;
        }

        const result = await store.updateText(id,nameCategory,nameModule,nameClusters,dbname);

        resolve(result,dbname);
    })
}

function deleteClusters(id,dbname){
    return new Promise((resolve,reject) => {
        if(!id){
            reject('ID Invalido');
            return false;
        }
        store.remove(id,dbname)
            .then(()=> {
                resolve();
            })
            .catch(e => {
                reject(e)
            });
    });
}
module.exports = {
    getClusters,
    addClusters,
    updateClusters,
    deleteClusters,
}