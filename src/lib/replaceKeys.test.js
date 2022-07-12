'use strict';

const replaceKeys = require('./replaceKeys');

describe('replace keys', () => {
    it('should replace a matching key in a json object with the respective value', () => {
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
        const actual = replaceKeys(json, {foo: 'new_key'});

        const expected = {
            new_key: 'bar',
            biz: 'baz',
            a: {
                new_key: 'bar',
                biz: 'baz',
                b: {
                    new_key: 'bar',
                    biz: 'baz'
                }
            }
        };

        expect(actual).toEqual(expected);
    });

    it('should replace all matching keys in a json object with their respective values', () => {
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
        const actual = replaceKeys(json, {foo: 'new_key', biz: 'other_new_key'});

        const expected = {
            new_key: 'bar',
            other_new_key: 'baz',
            a: {
                new_key: 'bar',
                other_new_key: 'baz',
                b: {
                    new_key: 'bar',
                    other_new_key: 'baz'
                }
            }
        };

        expect(actual).toEqual(expected);
    });

    it('should NOT replace any keys in a json object if no match is found', () => {
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

        const matcher = {no_match: 'new_key'};

        const actual = replaceKeys(json, matcher);

        expect(actual).not.toMatchObject(matcher);
    });
});
