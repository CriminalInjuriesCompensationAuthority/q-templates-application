'use strict';

const credentials = {
    integration: {
        FORMATED_2FA_KEY: '',
        ONE_LOGIN_BASIC_AUTH_URL: '',
        ONE_LOGIN_ACCOUNT_EMAIL_ADDRESS: '',
        ONE_LOGIN_ACCOUNT_PASSWORD: '',
        ONE_LOGIN_LOGOUT_URL: ''
    },
    prod: {
        FORMATED_2FA_KEY: '',
        ONE_LOGIN_BASIC_AUTH_URL: '',
        ONE_LOGIN_ACCOUNT_EMAIL_ADDRESS: '',
        ONE_LOGIN_ACCOUNT_PASSWORD: '',
        ONE_LOGIN_LOGOUT_URL: ''
    }
};

function getSecrets(environment) {
    return credentials[environment] || credentials.integration;
}

module.exports = getSecrets;
