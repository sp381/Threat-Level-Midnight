const router = require("express").Router();
//const { User } = require("../models");

//HOME PAGE RENDER NAME = HANDLEBARS FILE NAME
//http://localhost:3001/
router.get("/", (req, res) => {
    res.render("login");
});
//http://localhost:3001/movies = "movies" FILE NAME
router.get("/movies", (req, res) => {
    res.render("movies");
});

module.exports = router;