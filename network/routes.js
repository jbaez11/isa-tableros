const express = require('express');
const basekeywords = require('../components/baseKeywords/network');
const agents = require('../components/agents/network');

const routes = function(server){
    server.use('/basekeywords', basekeywords);
    server.use('/agents', agents);
}

module.exports = routes;

