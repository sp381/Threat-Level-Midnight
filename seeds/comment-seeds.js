const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'Do not watch fantastic 4',
        user_id: 1
    },
    {
        comment_text: 'This sucks',
        user_id: 1
    },
    {
        comment_text: 'You liar',
        user_id: 2
    },
    {
        comment_text: 'It could be worst',
        user_id: 2
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;