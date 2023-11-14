import { clearPage, renderPageTitle } from '../../utils/render'
import Navigate  from '../Router/Navigate'

const HomePage = () =>{
  clearPage();
  renderPageTitle('Trivial Vinci');
  renderHomePage();
  attachMouseEventToRules();
  }
function renderHomePage() {
  const main = document.querySelector('main');
  main.innerHTML = `
    
  <div class="align-item-center">
    <h1 class="display-1 text-center">
      <p class="fw-bold">Trivial Vinci</p>
    </h1>
  </div>
  <div class = "text-center">
      <a href="" id="RulesClick" class="text-decoration-underline fs-2">Regles</a>
  </div>
  <div class = "text-center">
      <a href="" class="text-decoration-underline fs-2">Jouer</a>
  </div>
    `;
}
  function attachMouseEventToRules(){
    const link = document.querySelector('#RulesClick');
    link.addEventListener('click',()=>{
      Navigate('/rule')
    });
}

export default HomePage;
