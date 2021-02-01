const express = require('express');
const basekeywords = require('../components/baseKeywords/network');

const routes = function(server){
    server.use('/basekeywords', basekeywords);
}

module.exports = routes;

