const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', function(req,res){
    controller.getBaseKeywords()
    .then((baseKeywordsList) => {
        response.success(req,res, baseKeywordsList, 200);
    })
    .catch(e => {
        response.error(req,res, 'Unexpected Error', 500 , e);
    })

});

router.post('/', function(req,res){
    controller.addBaseKeywords(req.body.keyword, req.body.module, req.body.category)
        .then((fullBaseKeywords) => {
            response.success(req,res, fullBaseKeywords, 201 );
        })
        .catch(e => {
            response.error(req,res,'Informacion Invalida', 400, 'error en el controller post');
        })
})

module.exports = router;
