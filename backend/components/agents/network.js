const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', function(req,res){
    controller.getAgents()
    .then((agentsList) => {
        response.success(req,res, agentsList, 200);
    })
    .catch(e => {
        response.error(req,res, 'Unexpected Error', 500 , e);
    })

});

router.post('/', function(req,res){
    controller.addAgents(req.body.name, req.body.identification, req.body.gender)
        .then((fullAgents) => {
            response.success(req,res, fullAgents, 201 );
        })
        .catch(e => {
            response.error(req,res,'Informacion Invalida', 400, 'error en el controller post');
        })
});

router.patch('/:id', function(req,res){
   

    controller.updateAgents(req.params.id, req.body.name, req.body.identification, req.body.gender)
        .then((data) => {
            response.success(req,res,data,200);

        })
        .catch(e => {
            response.error(req,res, 'Error interno',500,e)
        });
});

router.delete('/:id', function(req,res){
    controller.deleteAgents(req.params.id)
        .then(() => {
            response.success(req,res, `Agent ${req.params.id} eliminado `,200);
        })
        .catch(e => {
            response.error(req,res, 'Error Interno', 500, e);
        });
});

module.exports = router;