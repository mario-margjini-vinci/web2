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

async function addOneMovie (movie){} movies.push(movie);

export { readAllMovies, addOneMovie };
