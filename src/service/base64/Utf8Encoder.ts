/**
 * Created by Eryk Mariankowski on 20.07.2017.
 */

export default class Utf8Encoder {

  static utf8_decode(utfText) {
    let string = '';
    let i = 0;
    let c = 0;
    let c2;
    let c3;

    while (i < utfText.length) {

      c = utfText.charCodeAt(i);

      if (c < 128) {
        string += String.fromCharCode(c);
        i++;
      }
      else if ((c > 191) && (c < 224)) {
        c2 = utfText.charCodeAt(i + 1);
        string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
        i += 2;
      }
      else {
        c2 = utfText.charCodeAt(i + 1);
        c3 = utfText.charCodeAt(i + 2);
        string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
        i += 3;
      }

    }

    return string;
  }

  static utf8_encode(string) {
    string = string.replace(/\r\n/g, '\n');
    let utfText = '';

    for (let n = 0; n < string.length; n++) {

      const c = string.charCodeAt(n);

      if (c < 128) {
        utfText += String.fromCharCode(c);
      }
      else if ((c > 127) && (c < 2048)) {
        utfText += String.fromCharCode((c >> 6) | 192);
        utfText += String.fromCharCode((c & 63) | 128);
      }
      else {
        utfText += String.fromCharCode((c >> 12) | 224);
        utfText += String.fromCharCode(((c >> 6) & 63) | 128);
        utfText += String.fromCharCode((c & 63) | 128);
      }

    }

    return utfText;
  }

}
