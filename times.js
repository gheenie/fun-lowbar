function times(num,func)
{
    const ma = 'call times is 0';
    let arr=[];
    let value = 0;
    if(num === 0)
    return ma;
    for(let i = 0 ;i<num;i++)
    {
        value= func();
        arr.push(value);
    }
    return arr ;
}

module.exports = times;
