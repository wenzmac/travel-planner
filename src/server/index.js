// dotenv for private API key
const dotenv = require('dotenv');
dotenv.config();

// Setup empty JS object to act as endpoint for all routes
let destinationData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

// Require Body-parser as middleware
const bodyParser = require('body-parser');

const path = require('path');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// fetch
const fetch = require('node-fetch');

// Initialize the main project folder
app.use(express.static('dist'));

// get route
app.get('/', (req, res) => {
  res.sendFile('dist/index.html')
});

// designates what port the app will listen to for incoming requests
app.listen(9090, function () {
    console.log('Example app listening on port 9090!')
})

//Get route
app.get('/all', function (request, response) {
  response.send(destinationData);
});

//Post route
app.post('/addTripData', addData);

function addData (request, response) {
    //destinationData.temperature = request.body.temperature;
  //  destinationData.date = request.body.date;
    //destinationData.feelings = request.body.feelings;
    response.end();
    console.log(destinationData);
}
