'use strict';

module.exports = function ($, config) {
    var _ = $.lodash;
    return _.merge({
        order: {
            preprocess: 10
        },
        preprocess: {
            dev: {context: {target: 'dev'}},
            prod: {context: {target: 'prod'}}
        }
    })
};