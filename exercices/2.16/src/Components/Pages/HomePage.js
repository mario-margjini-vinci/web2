const HomePage = () => {
  
  fetch('http://localhost:3000/questions')
  .then((response) => {
    if(!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
    return response.json();
  })
  .then((questions) => {
    renderJoke(questions);
  })
  .catch((err) =>{
    console.error('HomePage::error: ', err);
  });
};

function renderQuestions(questions) {
  l= questions.length;
  let q1 = Math.random(0,l);
  let q2 = Math.random(0,l);



  const main = document.querySelector('main');
  main.innerHTML =`
 
  `
}

export default HomePage;
