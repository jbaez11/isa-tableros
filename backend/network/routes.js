const express = require('express');
const basekeywords = require('../components/baseKeywords/network');
const agents = require('../components/agents/network');
const asesores = require('../components/asesores/network');
const basephrases = require('../components/basePhrases/network');
const routes = function(server){
    server.use(`/basekeywords`, basekeywords);
    server.use('/agents', agents);
    server.use('/asesores', asesores);
    server.use('/basephrases', basephrases);
}

module.exports = routes;

