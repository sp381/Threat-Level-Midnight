const router = require("express").Router();
const { User, Comment, Movie } = require("../models");

//HOME PAGE RENDER NAME = HANDLEBARS FILE NAME
http://localhost:3001/
// router.get("/", (req, res) => {
//     res.render("movies", {
//         id: 1,
//         comment_text: "meow",
//         created_at: new Date(),
//         movie_url: "/images/Birth_of_a_Nation.jpg",
//         user: {
//             username: "test_user"
//         }
//     });
// });

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
        res.render("movies", { movies });
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
            "created_at",
            "movie_url:"
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
            comments
        }).catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    });
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