const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth')


//GET ALL COMMENTS | http://localhost:3001/api/comments/
router.get('/', (req, res) => {
  Comment.findAll()
    .then(commentData => res.json(commentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


//POST CREATE COMMENT | http://localhost:3001/api/comments/
router.post("/", withAuth, (req, res) => {
  Comment.create({
    comment_text: req.body.comment_text,
    user_id: req.session.user_id,
    movie_id: req.body.movie_id
  }).then(commentData => res.json(commentData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

//DELETE SINGLE COMMENT | http://localhost:3001/api/comments/1
router.delete("/:id", (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id
    }
  }).then(commentData => {
    if (!commentData) {
      res.status(404).json({ message: "No comment found with this id." })
    }
    res.json(commentData);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;