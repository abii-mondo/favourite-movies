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

	// needs validation
	const movie = new Movie({
		username: req.body.username,
		title: req.body.title,
		genre: req.body.genre,
		director: req.body.director,
		star: req.body.star,
		releaseDate:  req.body.releaseDate
	})

	try {
		const savedMovie = await movie.save()
		res.status(201).redirect('/movies')
	} catch(err){
		//400 error for user passing bad data
		res.status(400).send(err.message)
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


// Getting specific movie using the middleware
router.get('/movie/:id', async (req, res) => {
	try {
		const eachMovie = await Movie.findById(req.params.id)
		console.log(eachMovie)
		res.render('movie', {eachMovie})
	} catch(err){
		res.status(500).send(err)
	}
})



// Delete one movie
router.delete('/delete', async (req, res) => {

	try {
		await Movies.findOneAndDelete({
			title: req.body.title
		})
		res.json({message: 'Deleted!'})
	} catch(err) {
		res.status(500).json({message: err.message})
	}
})

router.patch('/update/:id', async (req, res) => {

	try {

		const userMovie = await Movie.findByIdAndUpdate(req.params.id)
		userMovie.username = req.body.username
		res.json(userMovie)

	} catch(err) {

		send.status(500).send(err)
	}
})





module.exports = router