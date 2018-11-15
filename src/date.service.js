import moment from 'moment';

export function dateWithoutHours() {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  return date;
}

export function momentToMidnight() {
  const date = new Date();
  date.setHours(23, 59, 0, 0);
  return moment(date);
}

export function todayInputValue() {
  const today = new Date();
  const local = new Date();
  local.setMinutes(today.getMinutes() - today.getTimezoneOffset());
  return local.toJSON().slice(0, 10);
}

export const toInputFromMomentValue = momentInstance => momentInstance.format('YYYY-MM-DD');

export function toDateFromInputValue(s) {
  const b = s.split(/\D/);
  return new Date(b[0], --b[1], b[2]);
}

export function prepareDate(date) {
  if (date) {
    if (date instanceof Date) {
      return date;
    } else if (typeof date === 'number') {
      return new Date(date);
    } else if (typeof date === 'string') {
      return moment(date).toDate();
    } else if (moment.isMoment(date)) {
      return moment.toDate();
    }
  }
  return date;
}

export function verifyPeselBirthDate(date, _peselDate) {
  const peselDate = dateFromPesel(_peselDate);
  return date.getFullYear() === peselDate.getFullYear() &&
    date.getMonth() === peselDate.getMonth() &&
    date.getDay() === peselDate.getDay();
}


export function dateFromPesel(pesel) {
  const month = parseInt(pesel.substring(2, 4), 10);
  const year = parseInt(pesel.substring(0, 2), 10) + (month > 19 ? 2000 : 1900);
  const day = parseInt(pesel.substring(4, 6), 10);
  return new Date(year, month - 1, day);
}

export function currMonthRange() {
  const currDate = new Date();
  const firstDay = new Date(currDate.getFullYear(), currDate.getMonth(), 1);
  const lastDay = new Date(currDate.getFullYear(), currDate.getMonth() + 1, 0);

  return {
    start: firstDay,
    end: lastDay
  };
}

export function monthAgo() {
  const d = new Date();
  d.setMonth(d.getMonth() - 1);
  d.setHours(0, 0, 0);
  d.setMilliseconds(0);
  return d;
}

function addZero(item) {
  if (item < 10) {
    return '0' + item;
  }
  return item;
}

export function prepareDateString(uncastedDate) {

  const date = prepareDate(uncastedDate);
  if (date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return year + '-' + addZero(month) + '-' + addZero(day) + ' ' + addZero(hours) + ':' + addZero(minutes);
  }
  return '';
}

export function apiDateFormat(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return year + '-' +
    addZero(month) + '-' +
    addZero(day) + ' ' +
    addZero(hours) + ':' +
    addZero(minutes) + ':' +
    addZero(seconds);
}

const dayInMilli = 24 * 3600 * 1000;
const weekInMilli = dayInMilli * 7;

export function diffInDays(d1, d2) {
  const t2 = d2.getTime();
  const t1 = d1.getTime();
  const diff = t2 - t1;
  const i = diff / dayInMilli;
  return parseInt(i, 10);
}

export function diffInWeeks(d1, d2) {
  const t2 = d2.getTime();
  const t1 = d1.getTime();
  const diff = t2 - t1;
  const i = diff / weekInMilli;
  return parseInt(i, 10);
}

export function diffInMonths(d1, d2) {
  const d1Y = d1.getFullYear();
  const d2Y = d2.getFullYear();
  const d1M = d1.getMonth();
  const d2M = d2.getMonth();
  return (d2M + 12 * d2Y) - (d1M + 12 * d1Y);
}

export function diffInYears(d1, d2) {
  return d2.getFullYear() - d1.getFullYear();
}

