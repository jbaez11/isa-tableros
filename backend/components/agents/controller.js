const store = require('./store');

function getAgents(){
    return new Promise((resolve,reject) => {
        //console.log(store.list())
        resolve(store.list());  
    });
}

function addAgents(name,identification,gender){
    
     
    return new Promise((resolve,reject) => {
        if(!name || !identification || !gender){
            console.log('[Message Controller] no hay name o identification o gender');
            reject('Los datos son incorrectos');
            return false;
        }
        
           
            //console.log('funcion agents',store.list());
            store.list()
            .then(lista=>{
                console.log('funcion agents',typeof(lista.length));
                let tam = lista.length;
                for(let i=0;i<tam;i++){
                    
                     if(lista[i].identification==identification){
                         console.log('dato repetido')
                         return false;
                     }
                }
                const  fullAgents = {
                    name:name,
                    identification:identification,
                    gender: gender,
                }
                store.add(fullAgents);
                resolve(fullAgents);
                
                //console.log('funcion agents',lista);
            })


            
        
        
        
        
        

    })
    
}

function updateAgents(id, name,identification,gender,createdAt){//
    return new Promise(async(resolve,reject) => {
        console.log('id', id);
        console.log('name', name);
        console.log('identification' , identification);
        console.log('gender', gender);
        createdAt=new Date();
        if(!id || !name || !identification || !gender || !createdAt){
            reject('Invalid Data');
            return false;
        }

        const result = await store.updateText(id,name,identification,gender,createdAt);

        resolve(result);
    })
}

function deleteAgents(id){
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
    getAgents,
    addAgents,
    updateAgents,
    deleteAgents,
}