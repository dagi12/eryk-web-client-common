/**
 * Created by Eryk Mariankowski on 06.07.2017.
 */

import moment from 'moment';

// Utility function used to pad the date formatting.1
function pad(num, totalStringSize) {
  let asString = num + '';
  while (asString.length < totalStringSize) {asString = '0' + asString;}
  return asString;
}

function parseDate(dd, mm, rrrr) {
  if (dd.trim() === '' || mm.trim() === '' || rrrr.trim() === '') {
    return null;
  }
  let day = Number(dd);
  let month = Number(mm);
  let year = Number(rrrr);
  let date = new Date(year, month - 1, day);
  if (isNaN(date.getTime())) {
    return null;
  }
  if (date.getDate() !== day || date.getMonth() + 1 !== month || date.getFullYear() !== year) {
    return null;
  }

  return date;
}

function newDate(timestamp) {
  if (timestamp && timestamp > 10000) {
    return new Date(timestamp);
  }
  return undefined;
}

function makeDates(obj, ...props) {
  for (const prop of props) {
    obj[prop] = newDate(obj[prop]);
  }
  return obj;
}

function makeMoments(obj, ...props) {
  for (const prop of props) {
    obj[prop] = newMoment(obj[prop]);
  }
  return obj;
}

function makeDateArr(arr, dateProps) {
  const newArr = [];
  for (const elem of arr) {
    for (const prop of dateProps) {
      elem[prop] = newDate(elem[prop]);
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
  newDate,
  makeDates,
  makeDateArr,
  newMoment,
  makeMoments,
};
