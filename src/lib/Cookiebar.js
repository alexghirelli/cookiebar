import './css/Cookiebar.scss';

class Cookiebar {
  constructor(){
    // YOUTUBE NO COOKIES: https://www.youtube-nocookie.com/

    this.createBar('#root', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium vero saepe delectus earum! Adipisci, ullam.', 'click');
  }

  createBar = (target, text, action) => {
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
}

export default Cookiebar;