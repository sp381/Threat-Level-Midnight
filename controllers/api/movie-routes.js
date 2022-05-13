const router = require('express').Router();
const { Movie, Comment, User } = require('../../models');
const withAuth = require('../../utils/auth')


//GET ALL MOVIES | http://localhost:3001/api/movie/
router.get('/', (req, res) => {
  Movie.findAll({
    include: [{
      model: Comment,
      attributes: ["id", "comment_text", "created_at", "user_id"],
      include: [{
        model: User,
        attributes: ["username"]
      }]
    }]
  }).then(movieData => res.json(movieData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
  Movie.create({
      movie_title: req.body.movie_title,
      movie_text: req.body.movie_text,
      user_id: req.session.user_id
  })
  .then(pubData => res.json(pubData))
  .catch(err => {
      console.log(err)
      res.status(400).json(err);
  });
});


module.exports = router;