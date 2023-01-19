function map(collection, iterator)
{
    const collectionIsArray = Array.isArray(collection);
    const collectionIsObject = !collectionIsArray && typeof collection === 'object' && collection !== null;
    const iteratorIsString = typeof iterator === 'string'
    
    const mappedArray = [];

    if (collectionIsArray) {
        for (let i = 0; i < collection.length; i++) {
            mappedArray.push( iterator(collection[i]) );
        }
    }

    if (collectionIsObject) {
        const collectionValues = Object.values(collection);
        
        for (let i = 0; i < collectionValues.length; i++) {
            mappedArray.push( iterator(collectionValues[i]) );
        }
    }

    return mappedArray;
}

module.exports = map;
