function map(arr,func)
{
    const m = 'empty';
    let resultarr =[];
    if(arr.length === 0)
    return m;
    for(let i = 0 ; i < arr.length ; i++)
    {
        resultarr.push(func(arr[i]));
    }
    return resultarr;
}
module.exports = map;