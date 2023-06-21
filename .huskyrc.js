/*! m0-start */
const config = {
    hooks: {
        'pre-commit': 'lint-staged',
        'pre-commit': 'npm run test'
    }
};
/*! m0-end */

/*! m0-start */
module.exports = config;
/*! m0-end */
