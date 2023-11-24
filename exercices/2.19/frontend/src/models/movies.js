import Navigate from "../Components/Router/Navigate";

async function readAllMovies(){
    try {
        const response = await fetch('/api/films');

        if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

        const pizzas = await response.json();

        return pizzas;
    } catch (err) {
        console.error('getAllPizzas::error: ', err);
        throw err;
    }
};

async function addOneMovie (options){
    const response = await fetch('/api/films', options);

    if(!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

    const newPizza = await response.json();

    console.log('New movie added: ', newMovie);
} ;

export { readAllMovies, addOneMovie };
