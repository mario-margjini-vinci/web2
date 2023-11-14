import Navigate from '../Router/Navigate';
import { clearPage } from '../../utils/render';

const RulePage = () => {
  clearPage();
  renderRulePage();
  renderGoBackHomeButton();
};

function renderRulePage(){
  const main = document.querySelector('main');
  main.innerHTML=`
  <div>
  <h1 class="text-center">Comment Jouer</h1>
  </div>
  <div>
    <p class="text-start">
      pour jouer il faut repondre aux diffreernejhtjdjhbjb</br>
      et il faut blalallalalalal
    </p>
  </div>`
}

function renderGoBackHomeButton() {
  const main = document.querySelector('main');
  const submit = document.createElement('input');
  submit.value = 'Go back to HomePage';
  submit.className = 'btn btn-secondary mt-3';
  submit.addEventListener('click', () => {
    Navigate('/');
  });

  main.appendChild(submit);
}

export default RulePage;
