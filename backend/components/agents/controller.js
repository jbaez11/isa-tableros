const store = require('./store');

function getAgents(){
    return new Promise((resolve,reject) => {
        console.log(store.list())
        resolve(store.list());  
    });
}

function addAgents(name,identification,gender){

    return new Promise((resolve,reject) => {
        if(!name || !identification || !gender){
            console.log('[Message Controller] no hay keyword o module o category');
            reject('Los datos son incorrectos');
            return false;
        }

        const  fullAgents = {
            name:name,
            identification:identification,
            gender: gender,
        }
        store.add(fullAgents);
        resolve(fullAgents);

    })
    
}

function updateAgents(id, name,identification,gender){//
    return new Promise(async(resolve,reject) => {
        console.log('id', id);
        console.log('name', name);
        console.log('identification' , identification);
        console.log('gender', gender);
        if(!id || !name || !identification || !gender){
            reject('Invalid Data');
            return false;
        }

        const result = await store.updateText(id,name,identification,gender);

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