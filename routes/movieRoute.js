const express = require('express')
const router = express.Router()
const Movie = require('../models/Movie')



router.get('/', (req, res) =>{
	res.redirect('/movies')
})

router.get('/add-movie', (req, res) => {
	console.log('Home route was hit..')
	res.render('index')
})


router.post('/save', async (req,res) => {

	const movie = new Movie(req.body)
	try {
		const savedMovie = await movie.save()
		res.redirect('/movies')
	} catch(err){

	}

})


router.get('/movies', async (req, res) => {

	try {
		const movies = await Movie.find()
		console.log(movies)
		res.render('movies', {movies})

	} catch(err){
		res.status(500).send(err)
	}
})

router.get('/movie/:id', async (req, res) => {
	try {
		const eachMovie = await Movie.findById(req.params.id)
		console.log(eachMovie)
		res.render('movie', {eachMovie})
	} catch(err){
		res.status(500).send(err)
	}
})

module.exports = router