import Cookies from 'js-cookie';

export const saveConsent = () => {

}

export const checkConsent = () => {
  if (Cookies.get('cookiebar')) {
    return true;
  } else {
    return false;
  }
}