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
    res.json(MOVIES)
});

module.exports = router;