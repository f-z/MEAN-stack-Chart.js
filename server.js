let express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose');

const app = express();
var port = process.env.PORT || 4000;

var server = app.listen(function () {
    console.log('Listening on port ' + port);
});
