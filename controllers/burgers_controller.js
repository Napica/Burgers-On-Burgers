var express = require("express");

var router = express.Router();

var burger = require ("../models/burger.js")

router.get ("/", (req,res)=> {
    res.render("index");
})

module.exports = router; 