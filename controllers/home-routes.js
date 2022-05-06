const router = require("express").Router();
//const { User } = require("../models");

//HOME PAGE RENDER NAME = HANDLEBARS FILE NAME
http://localhost:3001/
router.get("/", (req, res) => {
    res.render("movies");
});



//http://localhost:3001/movies = "movies" FILE NAME
router.get("/movies", (req, res) => {
    res.render("movies");
});

//http://localhost:3001/sign-up = "movies" FILE NAME
router.get("/sign-up", (req, res) => {
    res.render("sign-up");
});

//http://localhost:3001/login = "movies" FILE NAME
router.get("/login", (req, res) => {
    res.render("login");
});


module.exports = router;