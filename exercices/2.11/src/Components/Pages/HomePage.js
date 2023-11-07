import avengers from '../../img/avengers.jpg';
import broly from '../../img/broly.jpg';

const HomePage = () => {
  const main = document.querySelector('main');
  main.innerHTML = `
  <div class='text-center'>
  <h1> My Movies </h1>
  <div>
    <img src=${avengers} class="rounded float-start" alt="avengers endgame">
  </div>
  <img src=${broly} class="rounded float-end" alt="DBS broly">

  `;
};

export default HomePage;
