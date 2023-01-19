const filter = require('../filter');

describe('happy paths', () => {
    test('predicate is a function', () => {
        const input = [
            { 'user': 'barney', 'age': 36, 'active': true },
            { 'user': 'fred', 'age': 40, 'active': false }
        ];

        const predicate = function(o) { return !o.active; };

        const output = filter(input, predicate);

        const expected = [{ 'user': 'fred', 'age': 40, 'active': false }];
        expect(output).toEqual(expected);
    });

    test('predicate is an object with multiple properties', () => {
        const input = [
            { 'user': 'fred', 'age': 36, 'active': false },
            { 'user': 'barney', 'age': 36, 'active': true }
        ];

        const predicate = { 'age': 36, 'active': true };

        const output = filter(input, predicate);

        const expected = [{ 'user': 'barney', 'age': 36, 'active': true }];
        expect(output).toEqual(expected);
    });

    test('predicate is an array, representing one property', () => {
        const input = [
            { 'user': 'barney', 'age': 36, 'active': true },
            { 'user': 'fred', 'age': 40, 'active': false }
        ];

        const predicate = ['active', false];

        const output = filter(input, predicate);

        const expected = [{ 'user': 'fred', 'age': 40, 'active': false }];
        expect(output).toEqual(expected);
    });

    test('predicate is a string representing a key, where value === true', () => {
        const input = [
            { 'user': 'barney', 'age': 36, 'active': true },
            { 'user': 'fred', 'age': 40, 'active': false }
        ];

        const predicate = 'active';

        const output = filter(input, predicate);

        const expected = [{ 'user': 'barney', 'age': 36, 'active': true}];
        expect(output).toEqual(expected);
    });
});
