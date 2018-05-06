const { VoteSchema } = require("./schema")
const mongoose = require('mongoose');

const Vote =  mongoose.model("votes", VoteSchema);

module.exports = {
    Vote
}