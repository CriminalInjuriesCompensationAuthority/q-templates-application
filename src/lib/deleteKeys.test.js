'use strict';

const deleteKeys = require('./deleteKeys');
const template = require('../template');

describe('delete keys', () => {
    it('should strip a json object of the provided key', () => {
        const json = {
            foo: 'bar',
            biz: 'baz',
            a: {
                foo: 'bar',
                biz: 'baz',
                b: {
                    foo: 'bar',
                    biz: 'baz'
                }
            }
        };
        const actual = deleteKeys(json, ['a']);

        const expected = {
            foo: 'bar',
            biz: 'baz'
        };

        expect(actual).toEqual(expected);
    });

    it('should strip a json object of the provided nested key', () => {
        const json = {
            foo: 'bar',
            biz: 'baz',
            a: {
                foo: 'bar',
                biz: 'baz',
                b: {
                    foo: 'bar',
                    biz: 'baz'
                }
            }
        };
        const actual = deleteKeys(json, ['b']);

        const expected = {
            foo: 'bar',
            biz: 'baz',
            a: {
                foo: 'bar',
                biz: 'baz'
            }
        };

        expect(actual).toEqual(expected);
    });

    it('should strip a json object of the provided nested keys', () => {
        const json = {
            foo: 'bar',
            biz: 'baz',
            a: {
                foo: 'bar',
                biz: 'baz',
                b: {
                    foo: 'bar',
                    biz: 'baz'
                }
            }
        };
        const actual = deleteKeys(json, ['b', 'biz']);

        const expected = {
            foo: 'bar',
            a: {
                foo: 'bar'
            }
        };

        expect(actual).toEqual(expected);
    });

    it('should strip the current templaate of the provided nested keys and return expected properties', () => {
        const actual = deleteKeys(template, ['examples', 'invalidExamples']);
        expect(actual).toHaveProperty('answers');
        expect(actual).toHaveProperty('meta');
        expect(actual).toHaveProperty('progress');
        expect(actual).toHaveProperty('routes');
        expect(actual).toHaveProperty('sections');
        expect(actual).toHaveProperty('taxonomies');
        expect(actual).toHaveProperty('type');
        expect(actual).toHaveProperty('version');
    });
});
