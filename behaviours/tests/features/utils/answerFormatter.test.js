'use strict';

const formatter = require('./answerFormatter');

describe('answerFormatter', () => {
    it('Should format string booleans to boolean type', () => {
        const truthyAnswer = 'true';
        const falsyAnswer = 'false';

        const truthyActual = formatter(truthyAnswer);
        const falsyActual = formatter(falsyAnswer);

        expect(truthyActual).toEqual(true);
        expect(typeof truthyActual).toEqual('boolean');
        expect(falsyActual).toEqual(false);
        expect(typeof falsyActual).toEqual('boolean');
    });

    it('Should format a date in the form "dd mm yyyy" as an iso string', () => {
        const answer = '01 01 2000';

        const actual = formatter(answer);

        expect(actual).toEqual('2000-01-01T00:00:00.000Z');
    });

    it('Should format a partial date in the form "mm yyyy" as an iso string', () => {
        const answer = '01 2000';

        const actual = formatter(answer);

        expect(actual).toEqual('2000-01-01T00:00:00.000Z');
    });

    it('Should return answers as is if no formatting is required', () => {
        const answer = 'This is an answer';

        const actual = formatter(answer);

        expect(actual).toEqual(answer);
    });
});
