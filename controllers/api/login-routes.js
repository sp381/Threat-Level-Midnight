const router = require("express").Router();
//const { User } = require("../models");

//HOME PAGE RENDER NAME = HANDLEBARS FILE NAME
router.get("/", (req, res) => {
    res.render("login");
});

module.exports = router;