const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', function(req,res){
    const filterAgentsAudit = req.query.eventDate || null;
    console.log('filter agents ',filterAgentsAudit)
    controller.getAsesores(filterAgentsAudit)
    .then((asesoresList) => {
        response.success(req,res, asesoresList, 200);
    })
    .catch(e => {
        response.error(req,res, 'Unexpected Error', 500 , e);
    })

});

module.exports = router;