const {consumptionSerFinanzaModel,
    consumptionBancoColombiaModel,
    consumptionEnelChileModel,
    consumptionIgsBanorteMXModel,
    consumptionIgsBanistmoPAModel,
    consumptionBpogsBoldEnglishUSModel,
    consumptionBpogsHitesDespachoRetrioCOModel} = require('./model');
 
async function getConsumption(filterConsumption,nameDB){
    let filter = {};
    
    if(filterConsumption != null){
        filter = {
            yearMonthString:filterConsumption
        };
    }
    var consumption ;
    switch (nameDB) {
        
        case 'igsSerfinanzaCO':
            consumption = await consumptionSerFinanzaModel.find(filter);
            return consumption;

        case 'aigsBancolombiaCO':
            consumption = await consumptionBancoColombiaModel.find(filter);
            return consumption ;

        case 'igsEnelCL':
            consumption = await consumptionEnelChileModel.find(filter);
            return consumption;
        case 'igsBanorteMX' :
            consumption = await consumptionIgsBanorteMXModel.find(filter);
            return consumption;
        case 'igsBanistmoPA' :
            consumption = await consumptionIgsBanistmoPAModel.find(filter);
            return consumption;
        case 'bpogsBoldEnglishUS' :
            consumption = await consumptionBpogsBoldEnglishUSModel.find(filter);
            return consumption;
        case 'bpogsHitesDespachoRetiroCO' :
            consumption = await consumptionBpogsHitesDespachoRetrioCOModel.find(filter);
            return consumption;            
        }
}
 
module.exports = {
    list:getConsumption,
    
}