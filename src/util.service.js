function _addZero(item) {
  if (item < 10) {
    return '0' + item;
  }
  return item;
}

export /*@ngInject*/function urlEncodedTransformer(obj) {
  const str = [];
  for (const p in obj) {
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
    }
  }
  return str.join('&');
}

function _prepareDate(date) {
  const day = date.getDate(), month = date.getMonth() +
        1, year = date.getFullYear(), hours = date.getHours();
  return year + '-' + _addZero(month) + '-' + _addZero(day) + '-' + _addZero(hours) + ':00';
}

export function mergeObjects(obj1, obj2, leftToRight) {
  const mergeResult = {};
  if (leftToRight) {
    for (const attrname in obj1) {
      if (obj1.hasOwnProperty(attrname)) {
        obj2[attrname] = obj1[attrname];
      }
    }
    return;
  }
  for (const attrname in obj1) {
    if (obj1.hasOwnProperty(attrname)) {
      mergeResult[attrname] = obj1[attrname];
    }
  }
  for (const attrname in obj2) {
    if (obj2.hasOwnProperty(attrname)) {
      mergeResult[attrname] = obj2[attrname];
    }
  }
  return mergeResult;
}

export function getUrl(fileName) {
  return fileName.replace(/^.*[\\\/]/, '');
}

export class UtilService {

  static addToObjectWithPrefix(prefix, srcObj, destObj) {
    let oldName;
    let newName;
    if (prefix) {
      for (const attrName in srcObj) {
        if (srcObj.hasOwnProperty(attrName)) {
          oldName = UtilService.copy(attrName);
          newName = prefix + oldName[0].toUpperCase() + oldName.substring(1);
          destObj[newName] = srcObj[oldName];
        }
      }
    }
  }

  static copy(primitive) {
    return (function (i) {
      return i;
    }(primitive));
  }


  static prepareDate(date) {
    if (date) {
      return _prepareDate(new Date(date));
    }
    return null;
  }

  static isNumber(val) {
    return /^\d+$/.test(val);
  }

  static getNestedProp(obj, desc) {
    const arr = desc.split('.');
    while (arr.length && obj) {
      let prop = arr.shift();
      if (typeof obj[prop] === 'function') {
        obj = obj[prop]();
      } else {
        obj = obj[prop];
      }
    }
    return obj;
  }

  static clone(obj) {
    return angular.fromJson(angular.toJson(obj));
  }

  static cloneArr(arr) {
    let clonedArr = [];
    for (const item of arr) {
      clonedArr.push(this.clone(item));
    }
    return clonedArr;
  }

}
