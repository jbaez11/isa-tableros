const Model = require('./model');

async function getBaseKeywords(){
    const basekeywords = await Model.find();
    return basekeywords;
}

function addBaseKeywords(baseKeywords){

    const myBaseKeywords = new Model(baseKeywords);
    myBaseKeywords.save();

}

async function updateBaseKeywords(id,keyword,module,category){
    const foundBaseKeywords = await Model.findOne({
        _id : id
    });

    foundBaseKeywords.keyword = keyword ;
    foundBaseKeywords.module = module ;
    foundBaseKeywords.category = category ;
    const newBaseKeywords = await foundBaseKeywords.save();
    console.log('new bae', newBaseKeywords);
    return newBaseKeywords;

}


function removeBaseKeywords(id){
    return Model.deleteOne({
        _id:id
    });
}

module.exports = {
    list:getBaseKeywords,
    add: addBaseKeywords,
    updateText: updateBaseKeywords,
    remove:removeBaseKeywords,
}