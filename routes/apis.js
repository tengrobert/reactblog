var express = require('express');
var router = express.Router();
const data = [];

router.get('/comments', function(req, res) {
    res.json( data );
});
router.post('/comments', function(req, res) {
    var x = req.body;
    x.time =  new Date().toLocaleString();
    data.push(x);
    res.json('item create');
});

module.exports = router;