/**
 * Created by Eryk Mariankowski on 04.07.2017.
 */
function isUndefined(arg) {
    return arg === void 0;
}

function instantiateArr(list, Type) {
    let resultList = [];
    for (const item of list) {
        resultList.push(new Type(item));
    }
    return resultList;
}

function copyParams(src, dest) {
    if (src) {
        for (const attr of Object.keys(src)) {
            if (src.hasOwnProperty(attr)) {
                dest[attr] = src[attr];
            }
        }
    }
}

export {
    isUndefined,
    instantiateArr,
    copyParams,
}
