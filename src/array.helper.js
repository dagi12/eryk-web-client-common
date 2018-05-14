import {UtilService} from './util.service';
import {DateService} from './date.service';

export function deleteByProperty(arr, propertyName, propertyValue, callback) {
    for (let i = 0; i < arr.length; ++i) {
        const item = arr[i];
        if (item[propertyName] === propertyValue) {
            arr.splice(i, 1);
            if (callback) {
                callback();
            }
            break;
        }
    }
}

export function propertyArray(arr, property) {
    const propertyArr = [];
    if (arr && property && arr.length > 0 && angular.isDefined(arr[0][property])) {
        for (const item of arr) {
            propertyArr.push(item[property]);
        }
    }
    return propertyArr;
}

export function datify(props, arr) {
    for (const item of arr) {
        for (const prop of props) {
            item[prop] = DateService.prepareDateString(item[prop]);
        }
    }
    return arr;
}

export function datifyResponse(props, res) {
    const arr = res.data;
    for (const item of arr) {
        for (const prop of props) {
            item[prop] = DateService.prepareDateString(item[prop]);
        }
    }
    return res;
}

export function iterateTwoArrays(arr1, arr2, callback) {
    if (!arr1 || !arr2 || arr1.length !== arr2.length) {
        return;
    }
    $.each(arr1, (i) => {
        callback(arr1[i], arr2[i]);
    });
}

export function isEmpty(arr) {
    return !arr || arr.length < 1;
}

export function arrayClassification(Class, arr) {
    const classificatedArr = [];
    if (arr && arr.length) {
        for (const row of arr) {
            classificatedArr.push(new Class(row));
        }
    }
    return classificatedArr;
}

export function itemByProperty(arr, propertyName, propertyValue, ifCallback, indexOnly) {
    for (const [index, element] of arr.entries()) {
        const nestedProp = propertyName.indexOf('.') > -1 ?
            UtilService.getNestedProp(element, propertyName) :
            element[propertyName];
        if (nestedProp === propertyValue && indexOnly) {
            return index;
        } else if ((ifCallback && ifCallback(element) && nestedProp === propertyValue) ||
            (!ifCallback && nestedProp === propertyValue)) {
            return {
                item: element,
                index: index
            };
        }
    }
}

export function itemByFnResult(arr, fnName, fnValue) {
    let result = null;
    arr.some((element) => {
        let value;
        if (element[fnName]) {
            value = element[fnName]();
        }
        if (value && value === fnValue) {
            result = element;
            return true;
        }
    });
    return result;
}

export function arrayToMap(map, arr, nameProperty) {
    for (const [index, step] of arr.entries()) {
        step.arrIndex = index;
        map[step[nameProperty]] = step;
    }
}

export function containsProperty(arr, propertyName, property) {
    const result = $.grep(arr, (e) => {
        return e[propertyName] === property;
    });
    return (result.length > 0);
}


export function objectNotEmpty(model) {
    return model && typeof model === 'object' && Object.getOwnPropertyNames(model).length > 0;
}

export function firstFreeIndex(arr) {
    let index = -1, condition;
    do {
        index += 1;
        condition = arr.length === 0 || !containsProperty(arr, 'index', index);
        if (condition) {
            return index;
        }

    } while (!condition);
}
