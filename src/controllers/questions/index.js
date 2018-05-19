const { Router: router } = require('express');

const { get } = require('./get');
const { list } = require('./list');
const { create } = require('./create');
const { update } = require('./update');
const { remove } = require('./remove');
const { getAnswers } = require('./getAnswers')
const { authenticate } = require('../../middleware')

/**
 * Provide api for questions
 *
 *
 * GET /api/v1/questions/ - List
 @header
 Authorization: Bearer {token}
 @optionalQueryParameters
 search {String} - value to search
 limit {Number} - count of item to send
 skip {Number} - value to search
 *
 *
 * **/

module.exports = (models, { config }) => {
    const api = router();

    api.get('/', authenticate, list(models, { config }));
    api.get('/:_id', get(models, { config }));
    api.use('/:_id/answers', getAnswers(models, { config }));
    api.post('/',authenticate, create(models, { config }));
    api.patch('/:_id',authenticate, update(models, { config }));
    api.delete('/:_id',authenticate, remove(models, { config }));

    return api;
};