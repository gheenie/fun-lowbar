function remove(arr, func) {
    const filtered = [];
    let i = -1;
    const length = arr.length;

    while (++i < length) {
        if ( func(arr[i]) ) {
            filtered.push(arr[i]);
        }
    }
    
    return filtered;
}

module.exports = remove;
