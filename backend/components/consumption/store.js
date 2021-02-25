const Model = require('./model');

async function getConsumption(filterConsumption){
    let filter = {};
    
    if(filterConsumption != null){
        filter = {
            yearMonthString:filterConsumption
        };
    }
    const consumption = await Model.find(filter);
    return consumption;
}

module.exports = {
    list:getConsumption,
    
}