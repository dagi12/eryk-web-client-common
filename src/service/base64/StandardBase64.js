/**
 * Created by Eryk Mariankowski on 20.07.2017.
 */

export default class StandardBase64 {

    encode(input) {
        return btoa(input);
    }

    decode(input) {
        return atob(input);
    }
}
