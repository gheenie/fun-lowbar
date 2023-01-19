function fromPairs(arr) {
    // [[key0, value0], [key1, value1]] to { key0: value0, key1: value1}
    
    const keyValuePairs = JSON.parse( JSON.stringify(arr) );

    const singleObj = {};

    for (let i = 0; i < copyArr.length; i++) {
        singleObj[keyValuePairs[i][0]] = keyValuePairs[i][1];
    }

    return singleObj;
}

module.exports = fromPairs;
