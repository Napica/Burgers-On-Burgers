var express = require("express");

var router = express.Router();

var burger = require ("../models/burger.js")

// router.get ("/", (req,res)=> {
//     res.render("index");
// })

// Get route for the default page to display the information
router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });



module.exports = router; 