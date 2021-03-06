const seedUsers = require('./user-seeds');
const seedComments = require('./comment-seeds');
const seedMovies = require('./movie-seeds');

const sequelize = require('../config/connection')

const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedMovies();
    await seedComments();
    console.log('-----ALL SEEDED-----');

    process.exit(0);
};

seedAll();