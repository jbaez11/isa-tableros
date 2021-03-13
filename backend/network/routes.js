const express = require('express');
const basekeywords = require('../components/baseKeywords/network');
const agents = require('../components/agents/network');
const basephrases = require('../components/basePhrases/network');
const agentsaudit = require('../components/agentsAudit/network');
const agentsauditphrases = require('../components/agentsAuditPhrases/network');
const consumption = require('../components/consumption/network');
const keywords = require('../components/keywords/network');
const phrases = require('../components/phrases/network');



const routes = function(server){
    server.use(`/:bd/basekeywords`, basekeywords);
    server.use('/:bd/agents', agents);
    server.use('/:bd/basephrases', basephrases);
    server.use('/:bd/agentsaudit', agentsaudit);
    server.use('/:bd/agentsauditphrases', agentsauditphrases);
    server.use('/:bd/consumption', consumption);
    server.use('/:bd/keywords', keywords);
    server.use('/:bd/phrases', phrases);
    
}

module.exports = routes;

