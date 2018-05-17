const { NotAcceptable } = require('rest-api-errors');
const { sendCreated } = require('../../middleware/requests-helpers');
const _ = require('lodash');

const create = ({ Vote }, { config }) => async (req, res, next) => {
    try {
        const vote = new Vote();
        _.extend(vote, req.body);
        await vote.save();

        return sendCreated(res, { vote });
    } catch (error) {
        next(error);
    }
};

module.exports= { create };