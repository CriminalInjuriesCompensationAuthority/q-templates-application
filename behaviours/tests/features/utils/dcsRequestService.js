'use strict';

const got = require('got');
const merge = require('lodash.merge');

function requestService() {
    function post(options) {
        let opts = {
            method: 'POST',
            headers: {
                accept: 'application/vnd.api+json',
                'Content-Type': 'application/vnd.api+json'
            },
            responseType: 'json',
            throwHttpErrors: false
        };
        opts = merge(opts, options);
        return got(opts);
    }

    function get(options) {
        let opts = {
            method: 'GET',
            headers: {
                accept: 'application/vnd.api+json',
                'Content-Type': 'application/vnd.api+json'
            },
            responseType: 'json',
            throwHttpErrors: false
        };
        opts = merge(opts, options);
        return got(opts);
    }

    return Object.freeze({
        post,
        get
    });
}

module.exports = requestService;
