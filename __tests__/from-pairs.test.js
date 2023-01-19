const fromPairs = require('../from-pairs');

describe('happy paths', () => {
    test('empty array', () => {
        const input = [];

        const output = fromPairs(input);

        const expected = {};
        expect(output).toEqual(expected);
    });

    test('one property', () => {
        const input = [['a', 1]];

        const output = fromPairs(input);

        const expected = { 'a': 1 };
        expect(output).toEqual(expected);
    });

    test('three properties, more complex keys and values', () => {
        const input = [['a', 1], [2, 'b'], ['multiple words', 'double word']];

        const output = fromPairs(input);

        const expected = { 'a': 1, '2': 'b', 'multiple words': 'double word' };
        expect(output).toEqual(expected);
    });
});
