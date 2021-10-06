'use strict';

const deleteKeys = require('./deleteKeys');


describe('delete keys', () => {
        it('should strip a json object of the provided key', () => {
            const json = {
                "foo": "bar",
                "biz": "baz",
                "a": {
                    "foo": "bar",
                    "biz": "baz",
                    "b": {
                        "foo": "bar",
                        "biz": "baz"
                    }
                }
            };
            const actual = deleteKeys(json, ["a"]);

            const expected = {
                "foo": "bar",
                "biz": "baz"
            };

            expect(actual).toEqual(expected);
        });

        it('should strip a json object of the provided nested key', () => {
            const json = {
                "foo": "bar",
                "biz": "baz",
                "a": {
                    "foo": "bar",
                    "biz": "baz",
                    "b": {
                        "foo": "bar",
                        "biz": "baz"
                    }
                }
            };
            const actual = deleteKeys(json, ["b"]);

            const expected = {
                "foo": "bar",
                "biz": "baz",
                "a": {
                    "foo": "bar",
                    "biz": "baz"
                }
            };

            expect(actual).toEqual(expected);
        });

        it('should strip a json object of the provided nested keys', () => {
            const json = {
                "foo": "bar",
                "biz": "baz",
                "a": {
                    "foo": "bar",
                    "biz": "baz",
                    "b": {
                        "foo": "bar",
                        "biz": "baz"
                    }
                }
            };
            const actual = deleteKeys(json, ["b", "biz"]);

            const expected = {
                "foo": "bar",
                "a": {
                    "foo": "bar"
                }
            };

            expect(actual).toEqual(expected);
        })
    });