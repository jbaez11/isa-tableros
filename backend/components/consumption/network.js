const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', function(req,res){
    const filterConsumption = req.query.yearMonthString || null;
    console.log('filter agents ', filterConsumption)
    controller.getConsumption(filterConsumption)
    .then((consumptionList) => {
        response.success(req,res, consumptionList, 200);
    })
    .catch(e => {
        response.error(req,res, 'Unexpected Error', 500 , e);
    })

});

module.exports = router;