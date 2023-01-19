const map = require('../map');

describe('happy paths', () => {
    function square(n) {
        return n * n;
    }

    test('empty array', () => {
        const input1 = [];
        const input2 = square;

        const output = map(input1, input2);

        const expected = [];
        expect(output).toEqual(expected);
    });

    test('one array', () => {
        const input1 = [4, 8];
        const input2 = square;
        
        const output = map(input1, input2);

        const expected = [16, 64];
        expect(output).toEqual(expected);
    });

    test('empty object', () => {
        const input1 = {};
        const input2 = square;
        
        const output = map(input1, input2);

        const expected = [];
        expect(output).toEqual(expected);
    });

    test('one object', () => {
        const input1 = { 'a': 4, 'b': 8 };
        const input2 = square;
        
        // unguaranteed iteration order. sort() to make assertion easier.
        const output = map(input1, input2).sort();

        const expected = [16, 64];
        expect(output).toEqual(expected);
    });

    test('array of multiple objects, string for input2', () => {
        const input1 = [
            { 'user': 'barney' },
            { 'user': 'fred' }
        ];
        const input2 = 'user';
        
        const output = map(input1, input2);

        const expected = ['barney', 'fred'];
        expect(output).toEqual(expected);
    });
});
