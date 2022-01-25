const db = require('../../database/models');
const sequelize = db.sequelize;


const genresController = {
    list: (req, res) => {
        db.Genre.findAll()
            .then(genres => {
                /* res.render('genresList.ejs', {genres}) */
            
                res.json({
                    meta: {
                    status: 200,
                    total:genres.length,
                    url: "/api/genres"
                },
                data: genres
                })
            })
    },
    detail: (req, res) => {
        db.Genre.findByPk(req.params.id)
            .then(genre => {
                if (genre) {
                /* res.render('genresDetail.ejs', {genre}); */
                res.json({
                    meta: {
                        status: 200,
                        total: 1,
                        url: ('/api/genres/detail/:id')
                    },
                    data: genre
                })
            } else {
                res.json({
                    meta: {
                        status: 200,
                        total: 1,
                        url: ('/api/genres/detail/:id')
                    },
                    data: "genre no encontrado"
                })
            }
            });
    }

}

module.exports = genresController;