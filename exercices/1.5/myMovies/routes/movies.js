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
    const  filmsReachingMinimumDuration = MOVIES.filter(
        (film) => film.duration >= minimumFilmDuration
    );
    return res.json(filmsReachingMinimumDuration);
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



module.exports = router;