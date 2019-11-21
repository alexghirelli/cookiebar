import {
  Cookies,
  Restriction
} from './utils';
import './css/Cookiebar.scss';

const _Restriction = new Restriction();

class Cookiebar {
  constructor() {
    // YOUTUBE NO COOKIES: https://www.youtube-nocookie.com/
    this.init('#root', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium vero saepe delectus earum! Adipisci, ullam.', 'click');
  }

  init = async (target, text) => {
    if (!Cookies.checkConsent()) {
      await this.createBar(target, text);

      window.addEventListener('load', function(){
        this.selectElements()
      }.bind(this));
    }
  }

  createBar = async (target, text) => {
    let targetPosition = document.querySelector(target);
    let bar = document.createElement('div');

    bar.className += 'cookiebar cookiebar--align-bottom';

    bar.innerHTML = `
      <div class="text">
        ${text}
      </div>
      <button class="agree-btn">Agree</button>
    `;

    targetPosition.parentNode.insertBefore(bar, targetPosition);
  }

  selectElements = async () => {
    let elements = document.getElementsByTagName("iframe");
    for (let element of elements) {
      await _Restriction.restrict(element);
    }
  }
}

export default Cookiebar;