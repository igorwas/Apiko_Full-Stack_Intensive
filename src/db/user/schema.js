const mongoose = require('mongoose');

const UserProfileSchema = {
    fullName: String,
    post: String //I think better to use enum
};

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    profile: UserProfileSchema,
    services: {}
})

module.exports = {
    UserSchema
};