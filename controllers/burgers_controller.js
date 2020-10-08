var express = require("express");

var router = express.Router();

var burgers = require ("../models/burgers.js")

router.get ("/", (req,res)=> {
    res.render("index");
})

module.exports = router; 