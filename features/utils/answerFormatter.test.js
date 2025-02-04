'use strict';

const formatter = require('./answerFormatter');

describe('answerFormatter', () => {
    it('Should format string booleans to boolean type', () => {
        const truthyAnswer = 'true';
        const falsyAnswer = 'false';
        const tags = ['@closedQuestion'];

        const truthyActual = formatter(truthyAnswer, tags);
        const falsyActual = formatter(falsyAnswer, tags);

        expect(truthyActual).toEqual(true);
        expect(typeof truthyActual).toEqual('boolean');
        expect(falsyActual).toEqual(false);
        expect(typeof falsyActual).toEqual('boolean');
    });

    it('Should format a date as an iso string', () => {
        const answer = '1/1/2000';
        const tags = ['@openQuestion'];

        const actual = formatter(answer, tags);

        expect(actual).toEqual(new Date('2000-01-01T00:00:00.000Z'));
    });

    it('Should format a partial date as an iso string', () => {
        const answer = 'January 2000';
        const tags = ['@openQuestion'];

        const actual = formatter(answer, tags);

        expect(actual).toEqual(new Date('2000-01-01T00:00:00.000Z'));
    });

    it('Should return answers as is if no formatting is required', () => {
        const answer = 'This is an open question';
        const tags = ['@openQuestion'];

        const actual = formatter(answer, tags);

        expect(actual).toEqual(answer);
    });

    it('Should treat questions with no tags as closed questions.', () => {
        const answer = 'This is an closed question';

        const actual = formatter(answer);

        expect(actual).toEqual(answer);
    });
});