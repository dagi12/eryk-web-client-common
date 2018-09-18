import {UtilService} from './util.service';
import {prepareDateString} from './date.service';

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

function isDefined(value) {
  return typeof value !== 'undefined';
}

export function propertyArray(arr, property) {
  const propertyArr = [];
  if (arr && property && arr.length > 0 && isDefined(arr[0][property])) {
    for (const item of arr) {
      propertyArr.push(item[property]);
    }
  }
  return propertyArr;
}

export function datify(props, arr) {
  for (const item of arr) {
    for (const prop of props) {
      item[prop] = prepareDateString(item[prop]);
    }
  }
  return arr;
}

export function datifyResponse(props, res) {
  const arr = res.data;
  for (const item of arr) {
    for (const prop of props) {
      item[prop] = prepareDateString(item[prop]);
    }
  }
  return res;
}

export function getArrItemByProp(propName, propValue, arr) {
  for (const item of arr) {
    if (item[propName] === propValue) {
      return item;
    }
  }
}

export function iterateTwoArrays(arr1, arr2, callback) {
  if (!arr1 || !arr2 || arr1.length !== arr2.length) {
    return;
  }
  for (let i = 0; i < arr1.length; ++i) {
    callback(arr1[i], arr2[i]);
  }
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
  arr.some(element => {
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

export function arrayToMap(arr, nameProperty, map = {}) {
  for (const [index, step] of arr.entries()) {
    step.arrIndex = index;
    map[step[nameProperty]] = step;
  }
  return map;
}

export function arrayToMap2(arr, nameProperty) {
  const map = {};
  for (const item of arr) {
    map[item[nameProperty]] = item;
  }
  return map;
}

export function containsProperty(arr, propertyName, property) {
  for (const item of arr) {
    if (item[propertyName] === property) {
      return true;
    }
  }
  return false;
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
