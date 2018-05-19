const mongoose = require('mongoose');
const { EMAIL } = require('../../utils/regexes');

const UserProfileSchema = {
    fullName: String,
    post: String //I think better to use enum
};

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: email => EMAIL.test(email),
            message: 'Field [email] wrong format.',
        },
    },
    profile: UserProfileSchema,
    services: {}
})

module.exports = {
    UserSchema
};