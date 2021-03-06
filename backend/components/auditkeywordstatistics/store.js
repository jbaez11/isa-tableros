const {auditkeywordstatisticsSerFinanzaModel,
    auditkeywordstatisticsBancoColombiaModel,
    auditkeywordstatisticsEnelChileModel,
    auditkeywordstatisticsIgsBanorteMXModel,
    auditkeywordstatisticsIgsBanistmoPAModel,
    auditkeywordstatisticsBpogsBoldEnglishUSModel,
    auditkeywordstatisticsBpogsHitesDespachoRetrioCOModel,
    auditkeywordstatisticsBpogsBoldFrenchFRModel,
    auditkeywordstatisticsIgsDaviplataCOModel,
    auditkeywordstatisticsBpogsAMCCOModel,
    auditkeywordstatisticsIgsBancoDeOccidenteCOModel,
    auditkeywordstatisticsIgsSufiCOModel,
    auditkeywordstatisticsBpogsHitesFinancieroCOModel} = require('./model');

async function getAuditkeywordstatistics(filterAuditkeywordstatistics,nameDB){
    let filter = {};
    
    if(filterAuditkeywordstatistics != null){
        if(filterAuditkeywordstatistics[0] == 2 && filterAuditkeywordstatistics[1]==0){
            filter = {
                eventDate:filterAuditkeywordstatistics
              //eventDate:{$gte:[filterAgentsAudit[0]],$lte:[filterAgentsAudit[1]]}
                //eventDate:{in:[filterAgentsAudit,filterAgentsAudit2]}
            };
        }else{
            if(filterAuditkeywordstatistics[0]>filterAuditkeywordstatistics[1]){
               filterAuditkeywordstatistics.sort();
            }
            filter = {
                //eventDate:filterAgentsAudit
              eventDate:{$gte:[filterAuditkeywordstatistics[0]],$lte:[filterAuditkeywordstatistics[1]]}
                //eventDate:{in:[filterAgentsAudit,filterAgentsAudit2]}
            };
        }
        
    }
    var auditkeywordstatistics ;
    switch (nameDB) {
        
        case 'igsSerfinanzaCO':
            auditkeywordstatistics = await auditkeywordstatisticsSerFinanzaModel.find(filter);
            return auditkeywordstatistics;

        case 'igsBancolombiaCO':
            auditkeywordstatistics = await auditkeywordstatisticsBancoColombiaModel.find(filter);
            return auditkeywordstatistics ;

        case 'igsEnelCL':
            auditkeywordstatistics = await auditkeywordstatisticsEnelChileModel.find(filter);
            return auditkeywordstatistics;
        case 'igsBanorteMX' :
            auditkeywordstatistics = await auditkeywordstatisticsIgsBanorteMXModel.find(filter);
            return auditkeywordstatistics;
        case 'igsBanistmoPA' :
            auditkeywordstatistics = await auditkeywordstatisticsIgsBanistmoPAModel.find(filter);
            return auditkeywordstatistics;
        case 'bpogsBoldEnglishUS' :
            auditkeywordstatistics = await auditkeywordstatisticsBpogsBoldEnglishUSModel.find(filter);
            return auditkeywordstatistics;
        case 'bpogsHitesDespachoRetiroCO' :
            auditkeywordstatistics = await auditkeywordstatisticsBpogsHitesDespachoRetrioCOModel.find(filter);
            return auditkeywordstatistics;
        case 'bpogsBoldFrenchFR' :
            auditkeywordstatistics = await auditkeywordstatisticsBpogsBoldFrenchFRModel.find(filter);
            return auditkeywordstatistics;
            
        case 'igsDaviplataCO' :
            auditkeywordstatistics = await auditkeywordstatisticsIgsDaviplataCOModel.find(filter);
            return auditkeywordstatistics;
            
        case 'bpogsAMCCO' :
            auditkeywordstatistics = await auditkeywordstatisticsBpogsAMCCOModel.find(filter);
            return auditkeywordstatistics;
        case 'igsBancoDeOccidenteCO' :
            auditkeywordstatistics = await auditkeywordstatisticsIgsBancoDeOccidenteCOModel.find(filter);
            return auditkeywordstatistics;

        case 'igsSufiCO' :
            auditkeywordstatistics = await auditkeywordstatisticsIgsSufiCOModel.find(filter);
            return auditkeywordstatistics;
        case 'bpogsHitesFinancieroCO' :
            auditkeywordstatistics = await auditkeywordstatisticsBpogsHitesFinancieroCOModel.find(filter);
            return auditkeywordstatistics;
                        
        }
}

module.exports = {
    list:getAuditkeywordstatistics,
   
}

