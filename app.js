
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

const app = express()


const port = 8000
const url = 'mongodb+srv://amondo:amondo@ngalabiiscluster.lurxh.mongodb.net/favouriteMovies?retryWrites=true&w=majority'
const movieRoute = require('./routes/movieRoute')

app.use(express.urlencoded({extended: true})) //parse data for request body

//Setup view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// serve static files
app.use(express.static(path.join(__dirname,'public')))

//Connection to Atlas online mongoDb
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function (err, db){
	if (err){
		throw err
	}

	console.info('***Successful connection to Atlas Online MongoDB****')
})

// Use routes
app.use(movieRoute)


// Listen on specified port and host
app.listen(port, () => {
	console.info(`Server is running on http://localhost:${port}`)
})
