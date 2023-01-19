function times(num, func)
{
    // Call func num number of times. Return an array of results.

    const results = [];

    for (let i = 0 ; i < num; i++)
    {
        results.push( func() );
    }

    return results;
}

module.exports = times;
