const { Post } = require('../models');

const postData = [
    {
        title: "What is jQuery?",
        post_content: "jQuery is a fast, small, and feature-rich JavaScript library.",
        user_id: 3
    },
    {
        title: "Meaning of ORM",
        post_content: "Object-relational-mapping is the idea of being able to write queries like the one above, as well as much more complicated ones, using the object-oriented paradigm of your preferred programming language.",
        user_id: 1
    },
    {
        title: "Encapsulation Vs Abstraction",
        post_content: "Abstraction is a feature of OOPs that hides the unnecessary detail but shows the essential information. Encapsulation hides the code and data into a single entity or unit so that the data can be protected from the outside world.",
        user_id: 2

    },
    {
        title: "Model-View-Controller",
        post_content: "The Model-View-Controller (MVC) framework is an architectural pattern that separates an application into three main logical components Model, View, and Controller. Hence the abbreviation MVC.",
        user_id: 4
    },
    {
        title: "API routes injavascript ",
        post_content: "API routes provide a solution to build your API with Next.js.Any file inside the folder pages/api is mapped to /api/* and will be treated as an API endpoint instead of a page.",
        user_id: 4
    }
]


const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;