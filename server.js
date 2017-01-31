'use strict';

var _ = require('lodash');
var express = require('express');
var path = require('path');
var app = express();

var listenPort = getListenPort();

app.use('/', express.static('static'));
app.use('/', express.static('src'));  // added only temporally

app.all('/*', function(req, res, next) {
    res.sendFile('index.html', { root: path.join(__dirname, 'static') });
});
app.listen(listenPort);

console.log('Server started at port', listenPort);

function getListenPort() {
    var args = process.argv.slice(2);
    return _.head(args) || 9000;
};