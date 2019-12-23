import {
  Cookies,
  Restriction,
  Utility
} from './utils';
import './css/Cookiebar.scss';

Restriction.restrictAll();

class Cookiebar {
  // YOUTUBE NO COOKIES: https://www.youtube-nocookie.com/
  constructor(target, text) {
    if (!Cookies.checkConsent()) {
      this.createBar(target, text);
    } 
  }

  createBar = async (target, text) => {
    let targetPosition = await Utility.selectElement(target);
    let bar = Utility.createElement();

    bar.className += 'cookiebar cookiebar--align-bottom';

    bar.innerHTML = `
      <div class="text">
        ${text}
      </div>
      <button class="agree-btn">Agree</button>
    `;

    await Utility.insertBefore(targetPosition, bar);
    await this.bindAgreeButton();
  }

  bindAgreeButton = async () => {
    let agreeBtn = document.querySelector('.agree-btn');

    agreeBtn.addEventListener('click', Restriction.allowAll);
  }
}

export default Cookiebar;