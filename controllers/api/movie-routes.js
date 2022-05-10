const router = require('express').Router();
const { Movie, Comment, User } = require('../../models');


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

module.exports = router;