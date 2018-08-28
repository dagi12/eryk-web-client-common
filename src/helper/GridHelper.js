import {pad} from './DateHelper';
import {prepareDate} from '../date.service';

function dateToString(date) {
  return pad(date.getDate(), 2) + '.' +
    pad(date.getMonth() + 1, 2) + '.' +
    date.getFullYear();
}

const dateCellRenderer = params => params.value ? dateToString(prepareDate(params.value)) : null;

function momentCellRenderer(params) {
  if (params.value) {
    return params.value.format('DD.MM.YYYY');
  }
  return null;
}


function moneyRenderer(params) {
  if (params.value) {
    return params.value.toFixed(2);
  }
  return '0.00';
}


// function momentCellRenderer(params) {
//     if (params.value) {
//         return params.value.format('DD/MM/YYYY');
//     }
//     return null;
// }

function yesNoRenderer(params) {
  if (params) {
    if (params.value) {
      return 'Tak';
    } else if (params.value === false) {
      return 'Nie';
    }
  }
  return '';
}

export {
  dateCellRenderer,
  yesNoRenderer,
  moneyRenderer,
  momentCellRenderer
};
