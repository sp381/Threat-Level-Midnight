const router = require("express").Router();
const { render } = require("express/lib/response");
const { User, Comment, Movie } = require("../models");

router.get("/", (req, res) => {
    Movie.findAll({
        attributes: [
            "id",
            "movie_title",
            "movie_url"
        ],
        include: [
            {
                model: Comment,
                attributes: ["id", "comment_text", "user_id", "created_at"],
                include: {
                    model: User,
                    attributes: ["username"]
                }
            },
        ]
    }).then(dbMovieData => {
        console.log(dbMovieData)
        const movies = dbMovieData.map(movie => movie.get({ plain: true }));
        res.render("movies", { 
            movies,
            loggedIn: req.session.loggedIn
            });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


router.get("/", (req, res) => {
    Comment.findAll({
        attributes: [
            "id",
            "comment_text",
            "created_at"
        ],
        include: [
            {
                model: User,
                attributes: ["username"]
            }
        ]
    }).then(commentData => {
        const comments = commentData.map(comment => comment.get({ plain: true }));

        res.render("movies", {
            comments,
            loggedIn: req.session.loggedIn
        }).catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    });
});

router.get('/sign-up', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('sign-up')
});

router.get('/movies', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('movies', {
        loggedIn: req.session.loggedIn
    })
});


router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login')
});



module.exports = router;