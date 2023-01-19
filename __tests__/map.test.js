const map = require('../map');

describe('', () => {
    test('empty array should give an empty array', () => {
        const input = [];
        const output = map(input);

        expect(output).toEqual('empty');
    });
    test('the array should be squared', () => {
        const input = [1,2,3];
        function fofo(num)
        {return num*num;}
        const expected = map(input,fofo);
        expect(expected).toEqual([1,4,9]);
    });
});
