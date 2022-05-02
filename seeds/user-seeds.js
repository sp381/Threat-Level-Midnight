const { User } = require('../models');

const userData = [
    {
        username: 'user1',
        email: 'johnnybgoode@gmail.com',
        password: '123456'
    },
    {
        username: 'notAuser',
        email: 'fakemail@gmail.com',
        password: 'asdfghjkl'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;