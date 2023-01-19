function forEach(collection, iteratee) {
    const collectionIsArray = Array.isArray(collection);
    const collectionIsObject = !collectionIsArray && typeof collection === 'object' && collection !== null;

    const results = [];

    if (collectionIsArray) {
        for (let i = 0; i < collection.length; i++) {
            results.push( iteratee(collection[i]) );
        }
    }
    
    if (collectionIsObject) {
        for (const key in collection) {
            results.push( iteratee(collection[key], key) );
        }
    }

    return results;
}

module.exports = forEach;
