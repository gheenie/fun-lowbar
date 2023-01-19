const times = require('../times');
describe('', () => {
    test('a function without a reurned value', () => {
     
        function fofo ()
        {return 2;};
       /* const mock = jest.fn( times(3, func) );
        expect(mock).toHaveBeenCalledTimes(3);      */   
        expect(times(3,fofo)).toEqual([2,2,2]);
    });
    test('if the number of times was 0', () => {
     
        function fofo ()
        {return 2;}; 
        const ma = 'call times is 0';
        expect(times(0,fofo)).toEqual(ma);
    });
});
