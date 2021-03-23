const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', function(req,res){
    const filter = req.query.eventDate || null;
    console.log('filter agents ',filter)
    controller.getScore(filter)
    .then((scoresList) => {
        response.success(req,res, scoresList, 200);
    })
    .catch(e => {
        response.error(req,res, 'Unexpected Error', 500 , e);
    })

});

module.exports = router;