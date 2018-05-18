/**
 * Created by Eryk Mariankowski on 18.07.2017.
 */
import {copyParams} from '../util/JsHelper';

export default class BaseObj {

  constructor(obj) {
    copyParams(obj, this);
  }


}
