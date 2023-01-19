function map(collection, iteratee)
{
    const collectionIsArray = Array.isArray(collection);
    const collectionIsObject = !collectionIsArray && typeof collection === 'object' && collection !== null;
    const iterateeIsString = typeof iteratee === 'string'
    
    const mappedArray = [];

    if (collectionIsArray && !iterateeIsString) {
        for (let i = 0; i < collection.length; i++) {
            mappedArray.push( iteratee(collection[i]) );
        }
    }

    if (collectionIsObject) {
        const collectionValues = Object.values(collection);
        
        for (let i = 0; i < collectionValues.length; i++) {
            mappedArray.push( iteratee(collectionValues[i]) );
        }
    }

    if (collectionIsArray && iterateeIsString) {
        for (let i = 0; i < collection.length; i++) {
            mappedArray.push(collection[i][iteratee]);
        }
    }

    return mappedArray;
}

module.exports = map;
