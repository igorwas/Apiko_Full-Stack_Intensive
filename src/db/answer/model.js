const { AnswerSchema } = require("./schema")
const mongoose = require('mongoose');

const Answer =  mongoose.model("answers", AnswerSchema);

module.exports = {
    Answer
}