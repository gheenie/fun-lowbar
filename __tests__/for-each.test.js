const forEach = require('../katas/for-each');

describe('happy paths, function returns value', () => {
    function double(n) {
        return n * 2;
    }
    
    function combineValueKey(value, key) {
        return value + key;
    }
    
    test('input1 is array, input2 is one-argument func', () => {
        const input1 = [1, 2];
        const input2 = double;

        const output = forEach(input1, input2);

        const expected = [2, 4];
        expect(output).toEqual(expected);
    });

    test('input1 is object, input2 is two-argument func', () => {
        const input1 = { 'a': 1, 'b': 2 };
        const input2 = combineValueKey;

        // unguaranteed iteration order. sort() to make assertion easier.
        const output = forEach(input1, input2).sort();

        const expected = ['1a', '2b'];
        expect(output).toEqual(expected);
    });
});

describe('happy paths, function does not return value', () => {
    test('input1 is array, input2 is one-argument func', () => {
        const input1 = [1, 2];
        const output = [];
        function input2(x) {
            output.push(x);
        }

        forEach(input1, input2);

        const expected = [1, 2];
        expect(output).toEqual(expected);
    });

    test('input1 is object, input2 is two-argument func', () => {
        const input1 = { 'a': 1, 'b': 2 };
        const output = [];
        function input2(x, y) {
            output.push(x);
            output.push(y);
        }

        forEach(input1, input2);

        const expected = [1, 'a', 2, 'b'];
        expect(output).toEqual(expected);
    });
});

describe('happy paths, function does not return value, use mock functions', () => {
    test('input1 is array, input2 is one-argument func', () => {
        const input1 = [1, 2];
        const mockFunc = jest.fn();

        forEach(input1, mockFunc);
        const output = mockFunc.mock.calls;

        const expected = [[1], [2]];
        expect(output).toEqual(expected);
    });

    test('input1 is object, input2 is two-argument func', () => {
        const input1 = { 'a': 1, 'b': 2 };
        const mockFunc = jest.fn();

        forEach(input1, mockFunc);
        const output = mockFunc.mock.calls;

        const expected = [[1, 'a'], [2, 'b']];
        expect(output).toEqual(expected);
    });
});
