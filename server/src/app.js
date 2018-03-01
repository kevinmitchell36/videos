const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

var mongoose = require("mongoose");
mongoose.connect("mongodb:localhost:27017/videos");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback) {
  console.log("Connection Succeeded");
});

app.get("/videos", (req, res) => {
  res.send([
    {
      title: "Reverse an Array",
      description: "It reversed",
      url: "https://www.google.com/"
    }
  ]);
});

var Video = require("../models/video");

app.post("/videos", (req, res) => {
  var db = req.db;
  var title = req.body.title;
  var description = req.body.description;
  var url = req.body.url;
  var newVideo = new Video({
    title: title,
    description: description,
    url: url
  });

  newVideo.save(function(error) {
    if (error) {
      console.log(error);
    }
    res.send({
      success: true,
      message: "Video saved successfully!"
    });
  });
});

app.listen(process.env.PORT || 8081);
