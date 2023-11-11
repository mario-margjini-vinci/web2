import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';

Navbar();
HomePage();
attachMouseEventToRules




function Navbar(){
    const navbarWrapper = document.querySelector('#navbarWrapper');
  const navbar = `
  <nav class="navbar navbar-expand-lg navbar-light "style="background-color:#00FFFF">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Trivial Vinci</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#" data-uri="/">Home</a>
              </li>                     
            </ul>
          </div>
        </div>
      </nav>
  `;
  navbarWrapper.innerHTML = navbar;
}

function HomePage(){
const main = document.querySelector('main');
main.innerHTML = `
  
<div class="align-item-center">
  <h1 class="display-1 text-center">
    <p class="fw-bold">Trivial Vinci</p>
  </h1>
</div>
<div class = "text-center">
    <a href="#" id="RulesClick" class="text-decoration-underline fs-2">Regles</a>
</div>
<div class = "text-center">
    <a href="#" class="text-decoration-underline fs-2">Jouer</a>
</div>
  `;
}

function attachMouseEventToRules(){
    const link = document.querySelector('#RulesClick');
    link.addEventListener('click',Rules());
}

function Rules(){
    const main = document.querySelector('main');
    main.innerHTML=`
    <div>
    <h1>Comment Jouer</h1>
    </div>
    `
}


