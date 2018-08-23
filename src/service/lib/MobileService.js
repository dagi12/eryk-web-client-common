/**
 * Created by softra43 on 20.06.2017.
 */
class MobileService {

  static instance;

  constructor() {
    if (MobileService.instance) {
      return MobileService.instance;
    }
    MobileService.instance = this;
    this.mobile = MobileService.windowDetect() || MobileService.mobileAndTabletCheck();
  }

  static windowDetect() {
    return window.innerWidth <= 800 && window.innerHeight <= 600;
  }

  static mobileAndTabletCheck() {
    // eslint-disable-next-line
    const REGEX = /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/;
    const NAV_NAME = navigator.userAgent || navigator.vendor || window.opera;
    return REGEX.test(NAV_NAME.substr(0, 4));
  }

  isMobile() {
    return this.mobile;
  }

}

export default MobileService;
