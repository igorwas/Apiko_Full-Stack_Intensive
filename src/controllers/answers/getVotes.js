const _ = require('lodash');
const { sendList} = require('../../middleware/requests-helpers')

const getVotes = ({ Vote }, { config }) => async (req, res, next) => {
    let { _id } = req.params;

    try {
        const votes = await Vote.find({ answerId: _id })

        return sendList(res, { votes })
    } catch (error) {
        next(error);
    }
};

module.exports= { getVotes };