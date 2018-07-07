const db = require('../models/index');
const User = db.User;

module.exports = {
    getAllUsers: (request, response) => {
        User.findAll().then(users => {
            response.send(users);
        })
    }
}