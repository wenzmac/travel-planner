// dotenv for private API keys
const dotenv = require('dotenv');
dotenv.config();

// Setup empty JS object to act as endpoint for all routes
let projectData = {};

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const fetch = require('node-fetch')
const { response } = require('express');
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'));

// designates what port the app will listen to for incoming requests
app.listen(9090, function () {
  console.log('Example app listening on port 9090!')
})

app.get('/', function (req, res) {
  res.sendFile(path.resolve('dist/index.html'))
  // res.sendFile('dist/index.html')
})

app.post('/destination', async (request, response) => {
  let destData = {};

  let geoNameApiKey = process.env.GEONAME_API_KEY;
  const inputCity = request.body.destCity;

  // geoname fetch store info in destData
  await fetch('http://api.geonames.org/searchJSON?q=' + inputCity + '&maxRows=1&username=' + geoNameApiKey)
  .then(response => response.json())
  .then(response => {
    destData = {
      city: response.geonames[0].toponymName,
      country: response.geonames[0].countryName,
      lat: response.geonames[0].lat,
      long: response.geonames[0].lng
    }
  })
  .then(response => console.log("geoName fetch done", inputCity))
  .catch(error => console.log("geoName fetch error", error));

  // weatherbit fetch store info in destData
  let weatherApiKey = process.env.WEATHERBIT_API_KEY;
  await fetch(`https://api.weatherbit.io/v2.0/current?lat=${destData.lat}&lon=${destData.long}&key=${weatherApiKey}`)
    .then(response => response.json())
    .then(response => {
      destData = {
        ...destData,
        currentWeather: response.data[0]
      }
    })
    .then(response => console.log("weatherbit current fetch done"))
    .catch(error => console.log("weatherbit current fetch error", error));

  // forecast weather fetch store info in destData
  await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${destData.lat}&lon=${destData.long}&key=${weatherApiKey}`)
    .then(response => response.json())
    .then(response => {
      destData = {
        ...destData,
        forecastWeather: response.data
      }
    })
    .then(response => console.log("weatherbit forecast fetch done"))
    .catch(error => console.log("weatherbit forecast fetch error", error));

  // pixabay fetch store info in destData
  let pixabayApiKey = process.env.PIXABAY_API_KEY;
  const pixabayCity  = destData.city;
  const pixabayCountry  = destData.country;

  await fetch(`https://pixabay.com/api/?key=${pixabayApiKey}&q=${pixabayCity}&orientation=horizontal&image_type=photo`)
    .then(response => response.json())
    .then(response => {
      destData = {
        ...destData,
        cityImage: response.hits[1].webformatURL
      }
    })
    .catch(error => console.log("pixabayCity fetch error", error));

  await fetch(`https://pixabay.com/api/?key=${pixabayApiKey}&q=${pixabayCountry}&orientation=horizontal&image_type=photo`)
    .then(response => response.json())
    .then(response => {
      destData = {
        ...destData,
        countryImage: response.hits[0].webformatURL
      }
    })
    .then(response => console.log("pixabay fetch", destData))
    .catch(error => console.log("pixabayCountry fetch error", error));

  response.send(destData);
});
/*
app.get('/background', (req, res) => {
    const key = process.env.PIXABAY_KEY;
    const query = '&q=city&orientation=horizontal&image_type=photo';
    const url = `https://pixabay.com/api/?key=${key}${query}`;
    const options = {
        method: 'POST'
    }
    fetch(url, options)
    .then(response => response.json())
    .then(data => {
        const randomImage = Math.floor(Math.random() * 20);
        const image = data.hits[randomImage];
        if(image !== undefined || image !== '') {
            res.send({url:image.largeImageURL});
        }
    })
    .catch(error => console.log('error', error));
});
*/
