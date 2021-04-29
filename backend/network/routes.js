const express = require('express');
const basekeywords = require('../components/baseKeywords/network');
const agents = require('../components/agents/network');
const basephrases = require('../components/basePhrases/network');
const agentsaudit = require('../components/agentsAudit/network');
const agentsauditphrases = require('../components/agentsAuditPhrases/network');
const consumption = require('../components/consumption/network');
const keywords = require('../components/keywords/network');
const phrases = require('../components/phrases/network');
const scores = require('../components/scorebykeywords/network');
const scoringkeywords = require('../components/scoringKeywords/network');
const auditconversations = require('../components/auditconversations/network');
const conversations = require('../components/conversations/network');
const stadisticsofkeywords = require('../components/stadisticsofkeywords/network')



const routes = function(server){
    server.use(`/:bd/basekeywords`, basekeywords);
    server.use('/:bd/baseagents', agents);
    server.use('/:bd/basephrases', basephrases);
    server.use('/:bd/auditkeywords', agentsaudit);
    server.use('/:bd/auditphrases', agentsauditphrases);
    server.use('/:bd/consumptions', consumption);
    server.use('/:bd/keywords', keywords);
    server.use('/:bd/phrases', phrases);
    server.use('/:bd/auditscoringkeywords', scores);
    server.use('/:bd/scoringkeywords', scoringkeywords);
    server.use('/:bd/auditconversations', auditconversations);
    server.use('/:bd/conversations', conversations);
    server.use('/:bd/stadisticsofkeywords', stadisticsofkeywords);
    
}

module.exports = routes;

