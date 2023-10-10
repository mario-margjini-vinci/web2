const path = require("node:path");
const { serialize, parse } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/films.json');

const defaultFilms = [
    {
      id: 1,
      title: 'Star Wars: The Phantom Menace (Episode I)',
      duration: 136,
      budget: '115',
      link: 'https://en.wikipedia.org/wiki/Star_Wars:_Episode_I_%E2%80%93_The_Phantom_Menace',
    },
    {
      id: 2,
      title: 'Star Wars: Episode II – Attack of the Clones',
      duration: 142,
      budget: 115,
      link: 'https://en.wikipedia.org/wiki/Star_Wars:_Episode_II_%E2%80%93_Attack_of_the_Clones',
    },
    {
      id: 3,
      title: "Zack Snyder's Justice League",
      duration: 242,
      budget: 70,
      link: 'https://en.wikipedia.org/wiki/Zack_Snyder%27s_Justice_League',
    },
  ];

  
function readAllFilms(minimumFilmDuration){
    const films = parse(jsonDbPath, defaultFilms);

  if (!minimumFilmDuration) return films;

  const filmsReachingMinimumDuration = films.filter(
    (film) => film.duration >= minimumFilmDuration
  );
  return filmsReachingMinimumDuration;
}

function readOneFilm(id){
    const films = parse(jsonDbPath, defaultFilms);

    const indexOfFilmFound = films.findIndex((film) => film.id === id);
  
    if (indexOfFilmFound < 0) return undefined
  
    return films[indexOfFilmFound];
}

function createFilm(title,duration,budget,link){
    const films = parse(jsonDbPath, defaultFilms);

    const existingFilm = films.find(
        (film) => film.title.toLowerCase() === title.toLowerCase()
      );
      if (existingFilm) return undefined;
    
      const newFilm = { id: getNextId(),
        title,
        link,  
        duration,
        budget };
    
      films.push(newFilm);
    
      serialize(jsonDbPath, films);
    
    return newFilm;

    
}

function getNextId(){
    const films = parse(jsonDbPath,defaultFilms);

    const lastItemIndex = films?.length !== 0 ? films.length-1 : undefined;
    if(lastItemIndex===undefined) return 1;
    const lastId = films[lastItemIndex]?.id;
    const nextId = lastId +1;
    return nextId;
}

function deleteFilm(id){
    const films = parse(jsonDbPath, defaultFilms);

    // eslint-disable-next-line eqeqeq
    const indexOfFilmFound = films.findIndex((film) => film.id === id);
  
    if (indexOfFilmFound < 0) return undefined;
  
    const itemsRemoved = films.splice(indexOfFilmFound, 1);
    const itemRemoved = itemsRemoved[0];
  
    serialize(jsonDbPath, films);
  
    return itemRemoved;
}

function patchFilm(id,propertiesToUpdate){
    const films = parse(jsonDbPath, defaultFilms);
    const idInRequest = parseInt(id,10);
    const indexOfFilmFound = films.findIndex((film) => film.id === idInRequest);
  
    if (indexOfFilmFound < 0) return undefined
  
 
  
    const updatedFilm = {
      ...films[indexOfFilmFound],
      ...propertiesToUpdate};
  
    films[indexOfFilmFound] = updatedFilm;
  
    serialize(jsonDbPath, films);
  
    return updatedFilm;
}
