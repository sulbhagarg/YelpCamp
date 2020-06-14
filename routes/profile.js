var express = require("express");
var router = express.Router({mergeParams: true});
var middleware = require("../middleware");

router.get("/", middleware.isLoggedIn, function(req, res){
    res.render("profile");
});

module.exports = router;