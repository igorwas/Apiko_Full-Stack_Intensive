const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 10
    },
    description: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 200
    },
    tags: [String],
    createdAt: {
        type: Date,
        default: new Date()
    },
    createdById: mongoose.SchemaTypes.ObjectId
})

module.exports = {
    QuestionSchema
};