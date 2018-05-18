/**
 * Created by eryk on 14.05.17.
 */

const HEADER_KEY = 'header';

class LocalStorageManager {

  constructor() {
    this.header = this.getHeader();
  }

  login(header) {
    this.header = header;
    window.localStorage.setItem(HEADER_KEY, JSON.stringify(header));
  }

  logout() {
    this.header = null;
    window.localStorage.removeItem(HEADER_KEY);
  }

  getHeader() {
    if (!this.header) {
      const header = window.localStorage.getItem(HEADER_KEY);
      if (header) {
        try {
          this.header = JSON.parse(header);
        } catch (e) {
          return null;
        }
        return this.header;
      }
      return null;
    }
    return this.header;
  }

}

export default new LocalStorageManager();
