var express = require('express');
var router = express.Router();

const MOVIES = [
    {
       id : 1,
       title: 'The Equalizer 3',
       duration:  109,
       budget: 70,
       link: 'https://www.imdb.com/title/tt17024450/'

    },
    {
        id:2,
        title:'FAST X',
        duration: 141,
        budget:340,
        link:'https://www.imdb.com/title/tt5433140/'
    },
    {
        id:3,
        title:'Dragon ball super : Broly',
        duration: 100,
        budget: 8.5,
        link: 'https://www.imdb.com/title/tt7961060/'
    },

];

// Read all the movies from the menu
router.get('/',(req,res,next) =>{
    console.log('GET /movies');
    const minimumFilmDuration = req?.query
    ? Number(req.query['minimum-duration'])
    : undefined;
    if (typeof minimumFilmDuration !=='number' || minimumFilmDuration<=0||!minimumFilmDuration){
        return res.json(MOVIES);
    }
    const  MOVIESReachingMinimumDuration = MOVIES.filter(
        (film) => film.duration >= minimumFilmDuration
    );
    return res.json(MOVIESReachingMinimumDuration);
});

router.get('/:id',(req,res)=>{
    console.log(`GET /movies/${req.params.id}`);
    
    const indexOfFilmFound = MOVIES.findIndex((movie) => movie.id == req.params.id);

    if (indexOfFilmFound < 0||indexOfFilmFound >= MOVIES.length) return res.sendStatus(404);


    res.json(MOVIES[indexOfFilmFound]);
});

router.post('/',(req,res) => {

    const title = req?.body?.title?.length !== 0 ? req.body.title : undefined;
    const duration =req?.body?.duration !==0 ? req.body.duration : undefined;
    const budget =req?.body?.budget !==0 ? req.body.budget : undefined;
    const link = req?.body?.link?.length !== 0 ? req.body.link : undefined;

    console.log('POST /movies');

    if (!title|| !duration || !budget) return res.sendStatus(400);
    if (MOVIES.find((film)=> film.title.toLowerCase=== title.toLowerCase)) return res.sendStatus(409);
    const lastItemIndex = MOVIES?.length !== 0 ? MOVIES.length -1 : undefined;
    const lastId = lastItemIndex !== undefined ? MOVIES[lastItemIndex]?.id : 0;
    const nextId = lastId +1;

    const newMovie = {
        id:nextId,
        title: title,
        duration: duration,
        budget: budget,
        link:link,
    };

    MOVIES.push(newMovie);

    res.json(newMovie);
});

router.delete('/:id',(req,res)=>{
    console.log(`DELETE /movies/${req.params.id}`);

    const foundIndex = MOVIES.findIndex(movie => movie.id == req.params.id);

    if (foundIndex < 0) return res.sendStatus(404);

    const itemsRemovedFromMovies = MOVIES.splice(foundIndex,1);
    const itemRemoved = itemsRemovedFromMovies[0];
    
    res.json(itemRemoved);
});

router.patch('/:id',(req,res) => {
    console.log(`PATCH /movies/${req.params.id}`);

    const title =req?.body?.title;
    const duration = req?.body?.duration;
    const budget = req?.body?.budget;
    const link = req?.body?.link;

    console.log('POST /movies');

    if (
        !req.body ||
        (title !== undefined && !title.trim()) ||
        (link !== undefined && !link.trim()) ||
        (duration !== undefined && (typeof req?.body?.duration !== 'number' || duration < 0)) ||
        (budget !== undefined && (typeof req?.body?.budget !== 'number' || budget < 0))
      ) return res.sendStatus(400);

    const foundIndex =  MOVIES.findIndex(movie => movie.id == req.params.id);

    if (foundIndex<0) return res.sendStatus(404);

    const updatedMovie = {...MOVIES[foundIndex], ...req.body};

    MOVIES[foundIndex] = updatedMovie;

    res.json(updatedMovie);
});

router.put('/:id',(req,res)=>{
    
    console.log(`PUT /movies/${req.params.id}`);

    const title =req?.body?.title;
    const duration = req?.body?.duration;
    const budget = req?.body?.budget;
    const link = req?.body?.link;

    if (
        !req.body ||
        !title ||
        !title.trim() ||
        !link ||
        !link.trim() ||
        duration === undefined ||
        typeof req?.body?.duration !== 'number' ||
        duration < 0 ||
        budget === undefined ||
        typeof req?.body?.budget !== 'number' ||
        budget < 0
      )
        return res.sendStatus(400);
    
    const id = req.params.id;
    const indexOfFilmFound = MOVIES.findIndex((movie) => movie.id == id);    
    
    if (indexOfFilmFound < 0) {
        const newFilm = { id, title, link, duration, budget };
        MOVIES.push(newFilm);
        return res.json(newFilm);
      }
      const filmPriorToChange = MOVIES[indexOfFilmFound];
      const objectContainingPropertiesToBeUpdated = req.body;
    
      const updatedFilm = {
        ...filmPriorToChange,
        ...objectContainingPropertiesToBeUpdated,
      };
    
      MOVIES[indexOfFilmFound] = updatedFilm;
    
      return res.json(updatedFilm);
    });
    
module.exports = router;