import Cookies from 'js-cookie';

export const saveConsent = () => {
  Cookies.set('cookiebar', 'consent', 1);
}

export const checkConsent = () => {
  if (Cookies.get('cookiebar')) {
    return true;
  } else {
    return false;
  }
}