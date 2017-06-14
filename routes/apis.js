var express = require('express');
var router = express.Router();
var Blog = require('./models/Blog')

router.get('/posts', function (req, res) {
    Blog.find(function (err, blog) {
        if (err) return console.log(err);
        res.json(blog);
    });
});
router.get('/posts/:id', function (req, res) {
    console.log(req.params.id);
    Blog.findById(req.params.id,function (err, blog) {
        if (err) return console.log(err);
        console.log(blog);
        res.json(blog);
    });
});
router.post('/post', function (req, res) {
    var x = req.body;
    x.time = new Date().toLocaleString();
    Blog.create({ author: x.author, title: x.title, text: x.text, time: x.time }, function (err, blog) {
        if (err) return console.log(err);
        // saved!
    })
    res.json('item create');
});

module.exports = router;