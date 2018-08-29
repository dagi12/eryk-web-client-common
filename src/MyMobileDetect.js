import MobileDetect from 'mobile-detect';

const MyMobileDetect = new MobileDetect(window.navigator.userAgent);
export {
  MyMobileDetect
};
export default MyMobileDetect;
