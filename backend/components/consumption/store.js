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
            consumption = await consumptionSerFinanzaModel.find();
            return consumption;

        case 'igsBancolombiaCO':
            consumption = await consumptionBancoColombiaModel.find();
            return consumption ;

        case 'igsEnelCL':
            consumption = await consumptionEnelChileModel.find();
            return consumption;
        case 'igsBanorteMX' :
            consumption = await consumptionIgsBanorteMXModel.find();
            return consumption;
        case 'igsBanistmoPA' :
            consumption = await consumptionIgsBanistmoPAModel.find();
            return consumption;
        case 'bpogsBoldEnglishUS' :
            consumption = await consumptionBpogsBoldEnglishUSModel.find();
            return consumption;
        case 'bpogsHitesDespachoRetrioCO' :
            consumption = await consumptionBpogsHitesDespachoRetrioCOModel.find();
            return consumption;            
        }
}
 
module.exports = {
    list:getConsumption,
    
}