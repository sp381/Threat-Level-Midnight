const { Movie } = require('../models');

const movieData = [
    {
        movie_title: 'The Birth of a Nation (1915)',
        movie_url: "/images/Birth_of_a_Nation.jpg"
    },
    {
        movie_title: 'The Interview (2014)',
        movie_url: "/images/The Interview.jpg"
    },
    {
        movie_title: 'Wonder Woman (2017)',
        movie_url: "/images/Wonder Woman.jpg"
    },
    {
        movie_title: 'Noah (2014)',
        movie_url: "/images/Noah.jpg"
    },
    {
        movie_title: 'The Da Vinci Code (2006)',
        movie_url: "/images/Da Vinci Code.jpg"
    },
    {
        movie_title: 'Cannibal Holocaust (1980)',
        movie_url: "/images/Cannibal Holocaust.jpg"
    },
    {
        movie_title: 'Scarface (1932)',
        movie_url: "/images/Scarface_(1932_film_poster).jpg"
    },
    {
        movie_title: 'I am Curious (Yellow & Blue (1967-1968))',
        movie_url: "/images/I am Curious.jpg"
    },
    {
        movie_title: 'Brokeback Mountain (2005)',
        movie_url: "/images/Brokeback Mtn.jpg"
    },
    {
        movie_title: 'The Last Temptation of Christ (1988)',
        movie_url: "/images/The Last Temptation of Christ.jpg"
    },
];

const seedMovies = () => Movie.bulkCreate(movieData);

module.exports = seedMovies;