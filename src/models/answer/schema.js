const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({
    title: String,
    description: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 200
    },
    questionId: mongoose.SchemaTypes.ObjectId,
    createdAt: {
        type: Date,
        default: new Date()
    },
    createdById: mongoose.SchemaTypes.ObjectId
})

module.exports = {
    AnswerSchema
};