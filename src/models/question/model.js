const { QuestionSchema } = require('./schema')
const mongoose = require('mongoose');

const Question =  mongoose.model("questions", QuestionSchema);

module.exports = {
    Question
}