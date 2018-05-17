const _ = require('lodash');
const { sendList} = require('../../middleware/requests-helpers')

const list = ({ Question }, { config }) => async (req, res, next) => {
    let { limit, skip, search } = req.query;
    skip = skip ? parseInt(skip, 10) : 0;
    limit = limit ? parseInt(limit, 10) : 100;

    try {
        const query = {};
        if (search) {
            _.extend(query, { title: new RegExp(`${search}`, 'i') })
        }
        const questions = await Question.find(query)
            .skip(skip)
            .limit(limit)
            .sort({ _id: -1 });

        return sendList(res, { questions })
    } catch (error) {
        next(error);
    }
};

module.exports= { list };