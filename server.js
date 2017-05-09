var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var apis = require('./routes/apis');

const app             = express();
const publicPath     = express.static(path.join(__dirname, 'public'), { redirect : false });

const indexPath  = path.join(__dirname, 'public/index.html');

app.use(publicPath);
app.use(bodyParser.json());
app.get('/', function (_, res) { res.sendFile(indexPath) });
app.use('/api', apis);

var server = app.listen(process.env.PORT || 3001, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log(`Example app listening at http://%s%s`, host, port);
});