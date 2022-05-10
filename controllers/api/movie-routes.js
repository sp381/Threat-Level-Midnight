const router = require('express').Router();
const { Movie } = require('../../models');


//GET ALL MOVIES | http://localhost:3001/api/movie/
router.get('/', (req, res) => {
  Movie.findAll()
    .then(movieData => res.json(movieData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;