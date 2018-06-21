import {pad} from './DateHelper';

function dateCellRenderer(params) {
  if (params.value) {
    return pad(params.value.getDate(), 2) + '/' +
      pad(params.value.getMonth() + 1, 2) + '/' +
      params.value.getFullYear();
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
  moneyRenderer
};
