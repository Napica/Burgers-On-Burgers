var express = require("express");

var router = express.Router();

var burgers = require("../models/burger.js");

// Get route for the default page to display the information
router.get("/", function (req, res) {
  burgers.all(function (data) {
    var hbsObject = {
      burgers: data,
    };
    // console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function (req, res) {
  burgers.create(["name", "devoured"], [req.body.name], function () {
    // Send back the ID of the new quote
    res.redirect("/");
  });
});

router.put("/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  // console.log("condition", condition);
  burgers.update({ devoured: req.body.devoured }, condition, function () {
    res.redirect("/");
  });
});

module.exports = router;
