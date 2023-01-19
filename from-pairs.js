function fromPairs(arr) {
    const copyArr = JSON.parse( JSON.stringify(arr) );

    const pairs = {};
    for (let i = 0; i < copyArr.length; i++) {
        pairs[copyArr[i][0]] = copyArr[i][1];
    }
    return pairs;
}

module.exports = fromPairs;
