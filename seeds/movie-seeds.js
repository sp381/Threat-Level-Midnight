const { Movie } = require('../models');



const movieData = [
    {
        movie_title: 'Birth of a Nation',
        movie_url: "/images/Birth_of_a_Nation.jpg",
        movie_text: 'Something about this movie'
    },
    {
        movie_title: 'The Interview',
        movie_url: "/images/The Interview.jpg",
        movie_text: 'Something about this movie'
    },
    {
        movie_title: 'Wonder Woman',
        movie_url: "/images/Wonder Woman.jpg",
        movie_text: 'Something about this movie'
    },
    {
        movie_title: 'Noah',
        movie_url: "/images/Noah.jpg",
        movie_text: 'Something about this movie'
    },
];

const seedMovies = () => Movie.bulkCreate(movieData);

module.exports = seedMovies;