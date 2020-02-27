/*! m0-start */
const config = {
    extends: ['airbnb-base', 'prettier', 'plugin:jest/recommended'],
    env: {
        node: true
    },
    // overwrite airbnb-base to use commonjs instead of ES6 modules
    parserOptions: {
        ecmaVersion: 9,
        sourceType: 'script',
        ecmaFeatures: {
            modules: false
        }
    },
    rules: {
        'prettier/prettier': ['error'],
        'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
        'curly': ['error', 'all'],
        'jest/expect-expect': ['error'],
        // https://github.com/eslint/eslint/issues/8953#issuecomment-317697474
        strict: ['error', 'safe']
    },
    plugins: ['prettier']
};
/*! m0-end */

/*! m0-start */
module.exports = config;
/*! m0-end */

