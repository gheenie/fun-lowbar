const map = require('./map');

function filter(arr, condition) {
    const m = 'empty';
    if (arr.length === 0) return m;
    const resultarr = [];
    if(Array.isArray(condition))
    {
        for (let i = 0 ; i < arr.length ; i++)
        {
            const values = arr[i][condition[0]];
           /* const values = arr[i][condition[1]];
            console.log(key);*/
            console.log(values);
            if(arr[i].hasOwnProperty(condition[0])&&
            values === condition[1]/*&&values===condition[1]*/)
            resultarr.push(arr[i]);
            console.log(resultarr,' line 15');
        }       
    }
    else if (typeof condition === 'object' && condition !== null)
    {
        const conditionKeys = Object.keys(condition);
        const conditionValues = Object.values(condition);
        const conditionLength = conditionKeys.length;
        
        for (let i = 0; i < arr.length; i++)
        {
            let jPassed = 0;

            for (let j = 0; j < conditionLength; j++)
            {
                if (!arr[i].hasOwnProperty(conditionKeys[j])) break;

                if (!arr[i][conditionKeys[j]] === conditionValues[j]) break;
                
                jPassed++;
            }
            
            if (jPassed === conditionLength) resultarr.push(arr[i]);
        }
    }
     else {
        for (let i = 0 ; i < arr.length ; i++)
        {
            if ( condition(arr[i]) ) resultarr.push(arr[i]);
        }
    }

    return resultarr;
}

module.exports = filter;
