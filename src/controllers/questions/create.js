const { NotAcceptable } = require('rest-api-errors');
const { sendCreated } = require('../../middleware/requests-helpers');
const _ = require('lodash');

const create = ({ Question }, { config }) => async (req, res, next) => {
    try {
        const question = new Question();
        if (!req.body.title || !req.body.description) {
            throw new NotAcceptable(405, 'Title and description are required!');
        }
        _.extend(question, req.body);
        await question.save();

        return sendCreated(res, { question });
    } catch (error) {
        next(error);
    }
};

module.exports= { create };