import Cookies from 'js-cookie';
import './css/Cookiebar.scss';

class Cookiebar {
  constructor(){
    // YOUTUBE NO COOKIES: https://www.youtube-nocookie.com/

    this.init('#root', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium vero saepe delectus earum! Adipisci, ullam.', 'click');
  }

  init = (target, text) => {
    if (!this.checkConsent()) {
      this.createBar(target, text);
    }
  }

  createBar = (target, text) => {
    let targetPosition = document.querySelector(target);
    let bar = document.createElement('div');

    bar.className += 'cookiebar cookiebar--align-bottom';

    bar.innerHTML = `
      <div class="text">
        ${text}
      </div>
      <button>Agree</button>
    `;

    targetPosition.parentNode.insertBefore( bar, targetPosition );
  }

  saveConsent = () => {

  }

  checkConsent = () => {
    if (Cookies.get('cookiebar')) {
      return true;
    } else {
      return false;
    }
  }

  restrict =() => {
    let iframes = document.getElementsByName("iframe");

    console.log(iframes)
  }
}

export default Cookiebar;