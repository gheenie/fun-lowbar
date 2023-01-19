function map(collection, iterator)
{
    const mappedArray = [];

    for (let i = 0; i < collection.length; i++)
    {
        mappedArray.push( iterator(collection[i]) );
    }
    
    return mappedArray;
}
module.exports = map;