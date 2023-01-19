const for_each = require('../forEach');

describe('', () => {
    test('the passed element is array', () => {
        const input = [1, 2];
        function fofo(num)
        {return num *2;}
        const output = for_each(input,fofo);

        const expected = [2,4];
        expect(output).toBe(expected);
    });
    test('the passed element is object', () => {
        const input = { 'a': 1, 'b': 2 };
        function fofo(num)
        {return num *2;}
        const output = for_each(input,fofo);
        const expected = { 'a': 2, 'b': 4 };
        expect(output).toBe(expected);
    });
});
