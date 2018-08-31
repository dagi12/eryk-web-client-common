import MobileDetect from 'mobile-detect';

const MyMobileDetect = new MobileDetect(window.navigator.userAgent);

export function mobile() {
  return MyMobileDetect.mobile();
}

export default mobile;
