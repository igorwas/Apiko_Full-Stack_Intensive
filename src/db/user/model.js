const { UserSchema } = require('./schema')
const mongoose = require('mongoose');

const User =  mongoose.model("users", UserSchema);

module.exports = {
    User
}