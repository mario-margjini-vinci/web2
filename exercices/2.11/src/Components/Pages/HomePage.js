import avengers from '../../img/avengers.jpg';
import broly from '../../img/broly.jpg';

const HomePage = () => {
  const main = document.querySelector('main');
  main.innerHTML = `
<div class="container text-center">
  <h1> My Movies </h1>
  <div class="row align-items-start">
    <div class="col">
      <img src=${avengers} class="rounded float" alt="avengers endgame">
      <p class='text-start'>
      Le Titan Thanos, ayant réussi à s'approprier les six Pierres d'Infinité et à les réunir sur le Gantelet doré,
      a pu réaliser son objectif de pulvériser la moitié de la population de l'Univers.
      Cinq ans plus tard, Scott Lang, alias Ant-Man, parvient à s'échapper de la dimension subatomique où il était coincé. 
      Il propose aux Avengers une solution pour faire revenir à la vie tous les êtres disparus, 
      dont leurs alliés et coéquipiers : récupérer les Pierres d'Infinité dans le passé
      </p>
    </div>   
    <div class="col">
      <img src=${broly} class="rounded float" alt="DBS broly">
      <p class='text-start'>
      La Terre est en paix après le Tournoi du Pouvoir mais Goku continue à s'entraîner, 
      persuadé qu'il y a des forces encore plus fortes dans l'univers. 
      En effet, Goku et Vegeta vont font face à un nouvel ennemi, 
      le Super Saïyen Légendaire Broly, dans un combat explosif pour sauver notre planète.
      </p>
    </div>
  </div>
</div>
  `;
};

export default HomePage;
