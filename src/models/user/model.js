const { UserSchema } = require('./schema')
const mongoose = require('mongoose');
const passportLocaMongoose = require('passport-local-mongoose');

UserSchema.plugin(passportLocaMongoose,{
    usernameField: 'email'
})
const User =  mongoose.model("users", UserSchema);

module.exports = {
    User
}