const mongoose = require('mongoose');

const VoteSchema = new mongoose.Schema({
    isPositive: Boolean,
    createdAt: {
        type: Date,
        default: new Date()
    },
    answerId: mongoose.SchemaTypes.ObjectId,
    createdById: mongoose.SchemaTypes.ObjectId
})

module.exports = {
    VoteSchema
};