/**
 * Created by Eryk Mariankowski on 06.07.2017.
 */

import moment from 'moment';
import {prepareDate} from '../date.service';

// Utility function used to pad the date formatting.1
function pad(num, totalStringSize) {
  let asString = num + '';
  while (asString.length < totalStringSize) {
    asString = '0' + asString;
  }
  return asString;
}

function makeDates(obj, arr) {
  for (const prop of arr) {
    obj[prop] = prepareDate(obj[prop]);
  }
  return obj;
}

function makeMoments(obj, ...props) {
  for (const prop of props) {
    obj[prop] = newMoment(obj[prop]);
  }
  return obj;
}

function makeMomentArr(arr, dateProps) {
  const newArr = [];
  for (const elem of arr) {
    for (const prop of dateProps) {
      elem[prop] = newMoment(elem[prop]);
    }
    newArr.push(elem);
  }
  return newArr;
}

function makeDateArr(arr, dateProps) {
  const newArr = [];
  for (const elem of arr) {
    for (const prop of dateProps) {
      elem[prop] = prepareDate(elem[prop]);
    }
    newArr.push(elem);
  }
  return newArr;
}

function newMoment(timestamp) {
  if (timestamp) {
    return moment(timestamp);
  }
  return null;
}


export {
  pad,
  makeDates,
  makeDateArr,
  newMoment,
  makeMoments,
  makeMomentArr
};
