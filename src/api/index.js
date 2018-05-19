const express = require('express');
const { errorHandler } = require('../middleware/error-handller');
//models
const { User } = require('../models/user');
const { Question } = require('../models/question');
const { Answer } = require('../models/answer');
const { Vote } = require('../models/vote');

const models = { User, Question, Answer, Vote };

//controllers
const questions = require('../controllers/questions');
const answers = require('../controllers/answers');
const votes = require('../controllers/votes');
const auth = require('../controllers/auth');

const routersInit = config => {
    const router = express();

    router.use('/questions', questions(models, {config}));
    router.use('/answers', answers(models, {config}));
    router.use('/votes', votes(models, {config}));
    router.use('/auth', auth(models, {config}));

    router.use(errorHandler);
    return router;
};

module.exports = routersInit;