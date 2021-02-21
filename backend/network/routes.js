const express = require('express');
const basekeywords = require('../components/baseKeywords/network');
const agents = require('../components/agents/network');
const basephrases = require('../components/basePhrases/network');
const agentsaudit = require('../components/agentsAudit/network');
const routes = function(server){
    server.use(`/:bd/basekeywords`, basekeywords);
    server.use('/:bd/agents', agents);
    server.use('/:bd/basephrases', basephrases);
    server.use('/:bd/agentsaudit', agentsaudit);
}

module.exports = routes;

