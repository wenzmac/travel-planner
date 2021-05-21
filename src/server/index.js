// dotenv for private API key
const dotenv = require('dotenv');
dotenv.config();

// Setup empty JS object to act as endpoint for all routes
projectData = {};

const path = require('path');

// express
const express = require('express');
const app = express();
app.use(express.static('dist'));

// bodyParser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// cors
const cors = require('cors');
app.use(cors());

// fetch
const fetch = require('node-fetch')

console.log(__dirname)

// API URL variables
let baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key=';
let apiKey = process.env.API_KEY;

// get route
app.get('/', function (req, res) {
    //res.send(projectData);
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(9090, function () {
    console.log('Example app listening on port 9090!')
})

//POST request
app.post('/getSentiment', async(req, res) => {
  console.log(req.body.inputText)
  const apiData = await fetch(baseURL + apiKey + '&of=json&url=' + req.body.inputText + '&lang=en', {
    method: 'POST'
  });
  try {
    const data = await apiData.json()
    console.log(apiData)
    console.log("::: apiData :::", data)
    res.send(data);
  }
  catch (err) {
    console.log("error", err)
  }
});
