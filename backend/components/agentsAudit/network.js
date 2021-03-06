const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', function(req,res){
    const filterAgentsAudit = req.query.eventDate || null;
    //const filterAgentsAudit2 = req.query.eventDate || null;
    console.log('filter agents ',filterAgentsAudit)
    //console.log('filter agents2 ',filterAgentsAudit2)

    // variable de peticion
    console.log('locals : ', res.locals.path_data_link );
    dbname = res.locals.path_data_link;

    controller.getAsesores(filterAgentsAudit,dbname)
    .then((asesoresList) => {
        response.success(req,res, asesoresList, 200);
    })
    .catch(e => {
        response.error(req,res, 'Unexpected Error', 500 , e);
    })

});

module.exports = router;