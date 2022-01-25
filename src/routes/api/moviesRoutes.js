const express = require('express');
const router = express.Router();
const apiMoviesController = require('../../controllers/api/moviesController');

router.post('/movies/create', apiMoviesController.create);

router.delete('/movies/delete/:id', apiMoviesController.destroy);

module.exports = router
