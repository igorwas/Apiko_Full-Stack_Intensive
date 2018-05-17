const _ = require('lodash');
const { sendList} = require('../../middleware/requests-helpers')

const getAnswers = ({ Answer }, { config }) => async (req, res, next) => {
    let { _id } = req.params;
    let { limit, skip } = req.query;
    skip = skip ? parseInt(skip, 10) : 0;
    limit = limit ? parseInt(limit, 10) : 100;

    try {
        const answers = await Answer.find({ questionId: _id })
            .skip(skip)
            .limit(limit)
            .sort({ _id: -1 });

        return sendList(res, { answers })
    } catch (error) {
        next(error);
    }
};

module.exports= { getAnswers };