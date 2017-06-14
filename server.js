var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var apis = require('./routes/apis');
var mongoose = require('mongoose');

mongoose.connect('mongodb://shoutrobert:areyoubitch@ds127492.mlab.com:27492/blog')
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('db connected!');// we're connected!
});

const app             = express();
const publicPath     = express.static(path.join(__dirname, 'public'), { redirect : false });

const indexPath  = path.join(__dirname, 'public/index.html');

app.use(publicPath);
app.use(bodyParser.json());
app.use('/api', apis);
app.get('/', function (_, res) { res.sendFile(indexPath) });
app.get('*', function (_, res) { res.sendFile(indexPath) });

var server = app.listen(process.env.PORT || 3001, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log(`Example app listening at http://%s%s`, host, port);
});