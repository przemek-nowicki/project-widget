'use strict';

var _ = require('lodash');
var express = require('express');
var path = require('path');
var app = express();

var listenPort = getListenPort();
var basePath = path.join(__dirname, 'static');

app.use('/', express.static('static'));
app.use("/css",  express.static(path.join(basePath, 'css')));
app.use("/js",  express.static(path.join(basePath, 'js')));
app.all('/*', function(req, res, next) {
    res.sendFile('index.html', { root: path.join(__dirname, 'static') });
});

app.listen(listenPort);

console.log('Server started at port', listenPort);

function getListenPort() {
    var args = process.argv.slice(2);
    return _.head(args) || 9000;
};