const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");


const Movies = db.Movie;
const Genres = db.Genre;
const Actors = db.Actor;

module.exports = {

    create: function (req,res) {
        Movies.create(
            {
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre_id
            }
        )
        .then(movie=> {
            res.status(200).json(movie)})            
        .catch(error => res.status(500).json({error}))
    },

    destroy: function (req,res) {
        let movieId = req.params.id;
        Movies.destroy(
            {where: {id: movieId}, force: true}) 
            // force: true -> para asegurar que se ejecute la acción
        .then(movie=>{
            res.status(200).json(movie)})
        .catch(error => res.send(error)) 
    }
}