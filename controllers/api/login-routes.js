const { User } = require("../../models");

const router = require("express").Router();
//const { User } = require("../models");

//HOME PAGE RENDER NAME = HANDLEBARS FILE NAME
router.get("/", (req, res) => {
    res.render("login");
});

router.post("/", (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


module.exports = router;