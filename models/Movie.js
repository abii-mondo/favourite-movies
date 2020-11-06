const mongoose = require('mongoose')
const MovieSchema = new mongoose.Schema({

	username: {type: String, required: true},
	title: {type: String, required: true},
	genre: {type: String, required: true},
	director: {type: String, required: true},
	star: {type: String, required: true},
	releaseYear: {type: Date},
	postedAt: {type: Date, default: new Date()},
	image: {type: String}
	
})

module.exports = mongoose.model('Movie', MovieSchema)