const { sendAccepted } = require('../../middleware/requests-helpers');

const signOut = (req, res) => {
    req.logOut();
    sendAccepted(res)();
};

module.exports = signOut;