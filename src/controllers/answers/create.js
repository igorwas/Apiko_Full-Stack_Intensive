const { NotAcceptable } = require('rest-api-errors');
const { sendCreated } = require('../../middleware/requests-helpers');
const _ = require('lodash');

const create = ({ Answer }, { config }) => async (req, res, next) => {
    try {
        const answer = new Answer();
        if (!req.body.description) {
            throw new NotAcceptable(405, 'Description are required!');
        }
        _.extend(answer, req.body);
        await answer.save();

        return sendCreated(res, { answer });
    } catch (error) {
        next(error);
    }
};

module.exports= { create };