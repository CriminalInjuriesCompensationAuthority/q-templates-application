/*! m0-start */

'use strict';

const config = {
    testEnvironment: 'node',
    moduleNameMapper: {
        "^@cucumber/cucumber/api$": "<rootDir>/node_modules/@cucumber/cucumber",
        moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node', '.d.ts']
    },
    resolver: "jest-node-resolver"
};
/*! m0-end */

/*! m0-start */
module.exports = config;
/*! m0-end */
