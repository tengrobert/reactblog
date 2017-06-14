var mongoose = require('mongoose');

var blogSchema = new mongoose.Schema({
  author: String,
  title: String,
  text: String,
  time: String
});

module.exports = mongoose.model('Blog', blogSchema);
