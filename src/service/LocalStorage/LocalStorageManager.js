/**
 * Created by eryk on 14.05.17.
 */

const TOKEN_KEY = 'id_token';

class LocalStorageManager {

  constructor() {
    this.token = this.getToken();
  }

  login(token) {
    this.token = token;
    localStorage.setItem(TOKEN_KEY, token);
  }

  logout() {
    this.token = null;
    localStorage.removeItem(TOKEN_KEY);
  }

  getToken() {
    if (!this.token) {
      this.token = localStorage.getItem(TOKEN_KEY);
    }
    return this.token;
  }

}

export default new LocalStorageManager();
