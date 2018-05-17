const _ = require('lodash');
const { sendUpdated } = require('../../middleware/requests-helpers');

const update = ({ Question }, { config }) => async (req, res, next) => {
    const { _id } = req.params;
    try {
        const question = await Question.findOne({ _id });
        _.extend(question, req.body);
        await question.save();
        sendUpdated(res, { question });
    } catch (error) {
        next(error);
    }
};

module.exports= { update };