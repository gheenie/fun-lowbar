function filter(collection, predicate) {
    const predicateIsArray = Array.isArray(predicate);
    const predicateIsObject = !predicateIsArray && typeof predicate === 'object' && predicate !== null;
    const predicateIsString = typeof predicate === 'string';
    const predicateIsFunction = typeof predicate === 'function';

    const filteredArray = [];

    if (predicateIsFunction) {
        for (let i = 0; i < collection.length; i++){
            if ( predicate(collection[i]) ) {
                filteredArray.push(collection[i]);
            }
        }
    }

    if (predicateIsObject) {
        for (let i = 0; i < collection.length; i++) {
            let propertiesCount = 0;
            let itemHasPropertyCount = 0

            for (const key in predicate) {
                propertiesCount++;
                
                if (collection[i][key] !== predicate[key]) break;

                itemHasPropertyCount++;
            }
            
            if (itemHasPropertyCount === propertiesCount) {
                filteredArray.push(collection[i]);
            }
        }
    }

    if (predicateIsArray) {
        for (let i = 0 ; i < collection.length ; i++)
        {
            if (collection[i][predicate[0]] === predicate[1]) {
                filteredArray.push(collection[i]);
            }
        }       
    }

    if (predicateIsString) {
        for (let i = 0; i < collection.length; i++) {
            if (collection[i][predicate]) {
                filteredArray.push(collection[i]);
            }
        }
    }

    return filteredArray;
}

module.exports = filter;
