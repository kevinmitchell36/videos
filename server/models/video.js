var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var VideoSchema = new Schema({
  title: String,
  description: String,
  url: String
});

var Video = mongoose.model("Video", VideoSchema);
module.exports = Video;
