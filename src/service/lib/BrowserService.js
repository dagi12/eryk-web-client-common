/**
 * Created by eryk on 04.06.17.
 */
class BrowserService {

  static isInternetExplorer() {
    const ua = window.navigator.userAgent;
    const msie = ua.indexOf('MSIE ');
    return msie > 0;
  }

}

export default BrowserService;
