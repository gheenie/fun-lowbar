function sample(arr, howManyReturns) {
    let randomIndex = Math.floor(Math.random() * arr.length);

    if (howManyReturns === undefined) return arr[randomIndex];

    const sampledItems = [];

    for (let i = 0; i < howManyReturns; i++) {
        sampledItems.push(arr[randomIndex]);
        
        randomIndex = Math.floor(Math.random() * arr.length);
    }

    return sampledItems;
}

module.exports = sample;
