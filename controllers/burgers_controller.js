var express = require("express");

var router = express.Router();

var burgers = require("../models/burger.js");

// Get route for the default page to display the information
router.get("/", function (req, res) {
  burgers.all(function (data) {
    var hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function (req, res) {
  burgers.create(["name", "devoured"], [req.body.name], function (
    result
  ) {
    // Send back the ID of the new quote
    res.redirect("/");
  });
});



module.exports = router;
