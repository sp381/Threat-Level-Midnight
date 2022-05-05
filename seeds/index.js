const seedUsers = require('./user-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection')

const seedAll = async () => {
    await sequelize.sync({ force: false });
    await seedUsers();
    await seedComments();
    console.log('-----ALL SEEDED-----');

    process.exit(0);
};

seedAll();