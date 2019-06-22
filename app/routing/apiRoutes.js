// Dependencies
var path = require("path");
var userArray = require("../data/friends.js");

// Routes
module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(userArray);
  });

  app.post("/api/friends", function(req, res) {
    var newPerson = {
      name: req.body.name,
      photo: req.body.photo,
      scores: JSON.parse(req.body.scores)
    };

    var differencesArray = [];

    userArray.forEach(function(item, index) {
      var difference = 0;
      for (var i = 0; i < item.scores.length; i++) {
        difference += Math.abs(item.scores[i] - newPerson.scores[i]);
      }
      differencesArray.push({ difference: difference, index: index });
    });

    differencesArray.sort(function(a, b) {
      return a.difference - b.difference;
    });

    userArray.push(newPerson);
    res.json(userArray[differencesArray[0].index]);
  });
};
