const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', function(req,res){
    const filterAgentsAuditPhrases = req.query.eventDate || null;
    console.log('filter agents ',filterAgentsAuditPhrases)
    controller.getAsesoresPhrases(filterAgentsAuditPhrases)
    .then((asesoresList) => {
        response.success(req,res, asesoresList, 200);
    })
    .catch(e => {
        response.error(req,res, 'Unexpected Error', 500 , e);
    })

});

module.exports = router;