const sample = require('../katas/sample');

describe('', () => {
    test('only 1 argument', () => {
        const input = [1, 2, 3, 4];
        const randomSpy = jest.spyOn(Math, 'random');
        const floorSpy = jest.spyOn(Math, 'floor');

        const output = sample(input);
      
        expect(input).toContain(output);
        expect(randomSpy).toHaveBeenCalledTimes(1);
        expect(floorSpy).toHaveBeenCalledTimes(1);
        
        randomSpy.mockClear();
        floorSpy.mockClear();

        sample(input);
        
        expect(randomSpy).toHaveBeenCalledTimes(1);
        expect(floorSpy).toHaveBeenCalledTimes(1);
        
        randomSpy.mockClear();
        floorSpy.mockClear();
    });

    test('with 2nd argument', () => {
        const input = [1, 2, 3, 4];
        const input2 = 2;
        const randomSpy = jest.spyOn(Math, 'random');
        const floorSpy = jest.spyOn(Math, 'floor');

        const output = sample(input, input2);
      
        expect(input).toContain(output[0]);
        expect(input).toContain(output[1]);
        expect(randomSpy).toHaveBeenCalledTimes(3);
        expect(floorSpy).toHaveBeenCalledTimes(3);
        
        randomSpy.mockClear();
        floorSpy.mockClear();
    });
});
