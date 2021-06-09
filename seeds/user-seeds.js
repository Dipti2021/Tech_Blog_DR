const { User } = require('../models');

const userData = [
    {
        username: "dipti_r",
        email: "dipti_ra@gmail.com",
        password: "asdf1234"
    },
    {
        username: "amitabh_bachchan",
        email: "a_b@gmail.com",
        password: "qwer1234"
    },
    {
        username: "aggie_r",
        email: "aggie_r@gmail.com",
        password: "zxcv1234"
    },
    {
        username: "dip_ti",
        email: "dipti_razdan@gmail.com",
        password: "p1234qwer"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;