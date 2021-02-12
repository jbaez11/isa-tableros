const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', function(req,res){
    controller.getBasePhrases()
    .then((basePhrasesList) => {
        response.success(req,res, basePhrasesList, 200);
    })
    .catch(e => {
        response.error(req,res, 'Unexpected Error', 500 , e);
    })

});

router.post('/', function(req,res){
    controller.addBasePhrases(req.body.phrase, req.body.module, req.body.category)
        .then((fullBasePhrases) => {
            response.success(req,res, fullBasePhrases, 201 );
        })
        .catch(e => {
            response.error(req,res,'Informacion Invalida', 400, 'error en el controller post');
        })
});

router.patch('/:id', function(req,res){
   

    controller.updateBasePhrases(req.params.id, req.body.phrase, req.body.module, req.body.category)
        .then((data) => {
            response.success(req,res,data,200);

        })
        .catch(e => {
            response.error(req,res, 'Error interno',500,e)
        });
});

router.delete('/:id', function(req,res){
    controller.deleteBasePhrases(req.params.id)
        .then(() => {
            response.success(req,res, `BasePhrases ${req.params.id} eliminado `,200);
        })
        .catch(e => {
            response.error(req,res, 'Error Interno', 500, e);
        });
});




module.exports = router;