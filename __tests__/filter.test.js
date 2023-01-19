const filter = require('../filter');

describe('', () => {
    test('condition is a function', () => {
        const input = [
            { 'user': 'barney', 'age': 36, 'active': true },
            { 'user': 'fred', 'age': 40, 'active': false }
        ];

        const condition = function(o) { return !o.active; };

        const output = filter(input, condition);

        const expected = [{ 'user': 'fred', 'age': 40, 'active': false }];
        expect(output).toEqual(expected);
    });

    test('condition is an object', () => {
        const input = [
            { 'user': 'barney', 'age': 36, 'active': true },
            { 'user': 'fred', 'age': 40, 'active': false }
        ];

        const condition = { 'age': 36, 'active': true };

        const output = filter(input, condition);

        const expected = [{ 'user': 'barney', 'age': 36, 'active': true }];
        expect(output).toEqual(expected);
    });

    test('condition is an array', () => {
        const input = [
            { 'user': 'barney', 'age': 36, 'active': true },
            { 'user': 'fred', 'age': 40, 'active': false }
        ];

        const condition = ['active', false];

        const output = filter(input, condition);

        const expected = [{ 'user': 'fred', 'age': 40, 'active': false }];
        expect(output).toEqual(expected);
    });
    test('condition is a string', () => {
        const input = [
            { 'user': 'barney', 'age': 36, 'active': true },
            { 'user': 'fred', 'age': 40, 'active': false }
        ];

        const condition = 'active';

        const output = filter(input, condition);

        const expected = [{ 'user': 'barney', 'age': 36, 'active': true}];
        expect(output).toEqual(expected);
    });
});
