const forEach = require('../for-each');

function double(n) {
    return n * 2;
}

function combineValueKey(value, key) {
    return value + key;
}

describe('happy paths, function returns value', () => {
    test('input1 is array, input2 is one-argument func', () => {
        const input = [1, 2];

        const output = forEach(input, double);

        const expected = [2, 4];
        expect(output).toEqual(expected);
    });

    test('input1 is object, input2 is two-argument func', () => {
        const input = { 'a': 1, 'b': 2 };

        // unguaranteed iteration order. sort() to make assertion easier.
        const output = forEach(input, combineValueKey);

        const expected = ['1a', '2b'];
        expect(output).toEqual(expected);
    });
});
