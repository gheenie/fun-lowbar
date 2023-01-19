function for_each(arr,condition) {
const resultArr = [];
console.log(typeof arr);
switch(typeof arr)
{
    case 'array':
      /*  if(typeof arr === 'array')*/
        for(let i =0;i<arr.length;i++)
        {
            condition(arr[i]);
            resultArr.push(condition(arr[i]));
        }
        break;
    case 'object':
     /*   if(typeof arr === 'object')*/
            for(const key in arr)
            {
                value = arr[key];
                condition(key,value);
                resultArr.push(condition(key,value));
            }

        break;
}
    return resultArr;
}

module.exports = for_each;
