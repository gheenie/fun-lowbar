function shuffle(arr) {
    // Is this Fisher-Yates shuffle? Is it unbiased permutation? Is it O(n) and in place?

    let randomIndex1 = Math.floor(Math.random() * arr.length);
    let randomIndex2 = Math.floor(Math.random() * arr.length);

    const shuffledItems = JSON.parse( JSON.stringify(arr) );
    let tempElement = '';

    for (let i = 0; i < 100; i++) {
        tempElement = shuffledItems[randomIndex1];
        shuffledItems[randomIndex1] = shuffledItems[randomIndex2];
        shuffledItems[randomIndex2] = tempElement;
        
        randomIndex1 = Math.floor(Math.random() * arr.length);
        randomIndex2 = Math.floor(Math.random() * arr.length);
    }

    console.log(shuffledItems);
    return shuffledItems;
}

module.exports = shuffle;
