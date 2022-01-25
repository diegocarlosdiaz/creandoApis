const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;

const Movies = db.Movie;
const Genres = db.Genre;
const Actors = db.Actor;

const apiMoviesController = {
    create: (req,res) => {
        Movies.create({
            title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre_id
        })

        .then(movie=>{
            res.json(movie)
        })
        .catch(err=>{
            res.status(500).json({error:err})
    })

    } ,

    destroy: (req,res) => 
          {
            let movieId = req.params.id;
            Movies
            .destroy({where: {id: movieId}, force: true}) // force: true es para asegurar que se ejecute la acción
            .then(()=>{
                return res.json('/movies')})
            .catch(error => res.json({err:error})) 

    }
}

module.exports = apiMoviesController