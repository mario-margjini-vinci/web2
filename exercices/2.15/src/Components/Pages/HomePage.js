const HomePage = () => {
  
  fetch('https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?type=single')
  .then((response) => {
    if(!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
    return response.json();
  })
  .then((joke) => {
    renderJoke(joke);
  })
  .catch((err) =>{
    console.error('HomePage::error: ', err);
  });
};

function renderJoke(joke) {
  const main = document.querySelector('main');
  main.innerHTML =`
    category : ${joke.category} </br>
    joke : ${joke.joke}
  `
}

export default HomePage;
