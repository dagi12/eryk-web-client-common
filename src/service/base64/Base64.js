/**
 * Created by eryk on 04.06.17.
 */
import BrowserService from '../lib/BrowserService';
import StandardBase64 from './StandardBase64';
import IEBase64 from './IEBase64';

function decide() {
    if (BrowserService.isInternetExplorer()) {
        return new IEBase64();
    } else {
        return new StandardBase64();
    }
}

export default decide();
