const times = require('../times');

describe('happy paths', () => {
    const return2 = () => {
        return 2;
    };

    test('function called 0 times', () => {
        const input1 = 0;
        const input2 = return2;

        const output = times(input1, input2);

        const expected = [];
        expect(output).toEqual(expected);
    });

    test('function called 3 times', () => {
        const input1 = 3;
        const input2 = return2;

        const output = times(input1, input2);

        const expected = [2, 2, 2];
        expect(output).toEqual(expected);
    });

    test('call String() 3 times', () => {
        const input1 = 3;
        const input2 = String;

        const output = times(input1, input2);

        const expected = ['', '', ''];
        expect(output).toEqual(expected);
    });
});
