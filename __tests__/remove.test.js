const remove = require('../katas/remove');

describe('', () => {
    test('', () => {
        const input = [1, 2, 3, 4, 5, 6];
        const input2 = function(num) { return num % 2 == 0; };

        const output = remove(input, input2);

        const expected = [2, 4, 6];
        expect(output).toEqual(expected);
    });
});
