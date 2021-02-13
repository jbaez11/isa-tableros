const express = require('express');
const basekeywords = require('../components/baseKeywords/network');
const agents = require('../components/agents/network');
const asesores = require('../components/asesores/network');
const basephrases = require('../components/basePhrases/network');
const routes = function(server){
    server.use(`/:bd/basekeywords`, basekeywords);
    server.use('/:bd/agents', agents);
    server.use('/:bd/asesores', asesores);
    server.use('/:bd/basephrases', basephrases);
}

module.exports = routes;

