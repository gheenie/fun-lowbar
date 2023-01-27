const shuffle = require('../katas/shuffle');

describe('', () => {
    test('100 for-looping', () => {
        const input = [1, 2, 3, 4, 5, 6];
        const randomSpy = jest.spyOn(Math, 'random');
        const floorSpy = jest.spyOn(Math, 'floor');

        const output = shuffle(input);
      
        for (let i = 0; i< input.length; i++) {
            expect(input).toContain(output[i]);
        }
        expect(randomSpy).toHaveBeenCalledTimes(202);
        expect(floorSpy).toHaveBeenCalledTimes(202);
        
        randomSpy.mockClear();
        floorSpy.mockClear();
    });
});
