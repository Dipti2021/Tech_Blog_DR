const { Comment } = require('../models');

const commentData = [//added day care id
    {
        user_id: 1,
        post_id: 5,
        comment_text: "Thanks for that."
    },
    {
        user_id: 2,
        post_id: 4,
        comment_text: "Wow, amazing information!"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "I didn't know about that"
    },
    {
        user_id: 4,
        post_id: 2,

        comment_text: "Thats too cool!"
    }
    
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;