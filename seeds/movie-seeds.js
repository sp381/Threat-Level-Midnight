const { Movie } = require('../models');

const movieData = [
    {
        movie_title: 'Birth of a Nation',
    },
    {
        movie_title: 'The Interview',
    },
    {
        movie_title: 'Wonder Woman',
    },
    {
        movie_title: 'Noah',
    },
];

const seedMovies = () => Movie.bulkCreate(movieData);

module.exports = seedMovies;