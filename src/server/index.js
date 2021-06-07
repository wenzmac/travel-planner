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

app.get('/all', function (request, response) {
  response.send(destData);
});

app.post('/destination', async (request, response) => {
  let destData = {};

  // let geoNameApiKey = process.env.GEONAME_API_KEY;
  let geoNameApiKey = 'wenzmac';
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
  // let weatherApiKey = process.env.WEATHERBIT_API_KEY;
  let weatherApiKey = '5648924cf38e4749b78edae008960acd';
  await fetch(`https://api.weatherbit.io/v2.0/current?lat=${destData.lat}&lon=${destData.long}&key=${weatherApiKey}`)
    .then(response => response.json())
    .then(response => {
      destData = {
        ...destData,
        currentTemp: response.data[0].temp,
        currentDescription: response.data[0].weather.description,
        currentIcon: response.data[0].weather.icon,
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
        day1: [{date: response.data[1].valid_date, maxTemp: response.data[1].max_temp, description: response.data[1].weather.description, icon: response.data[1].weather.icon}],
        day2: [{date: response.data[2].valid_date, maxTemp: response.data[2].max_temp, description: response.data[2].weather.description, icon: response.data[2].weather.icon}],
        day3: [{date: response.data[3].valid_date, maxTemp: response.data[3].max_temp, description: response.data[3].weather.description, icon: response.data[3].weather.icon}],
        day4: [{date: response.data[4].valid_date, maxTemp: response.data[4].max_temp, description: response.data[4].weather.description, icon: response.data[4].weather.icon}],
        day5: [{date: response.data[5].valid_date, maxTemp: response.data[5].max_temp, description: response.data[5].weather.description, icon: response.data[5].weather.icon}],
        day6: [{date: response.data[6].valid_date, maxTemp: response.data[6].max_temp, description: response.data[6].weather.description, icon: response.data[6].weather.icon}],
        day7: [{date: response.data[7].valid_date, maxTemp: response.data[7].max_temp, description: response.data[7].weather.description, icon: response.data[7].weather.icon}],
        day8: [{date: response.data[8].valid_date, maxTemp: response.data[8].max_temp, description: response.data[8].weather.description, icon: response.data[8].weather.icon}]
      }
    })
    .then(response => console.log("weatherbit forecast fetch done"))
    .catch(error => console.log("weatherbit forecast fetch error", error));

  // pixabay fetch store info in destData
  // let pixabayApiKey = process.env.PIXABAY_API_KEY;
  let pixabayApiKey = '21842735-6a61d10b908332f54c187953f';

  await fetch(`https://pixabay.com/api/?key=${pixabayApiKey}&q=${destData.city}&orientation=horizontal&image_type=photo`)
    .then(response => response.json())
    .then(response => {
      destData = {
        ...destData,
        cityImage: response.hits[0].webformatURL
      }
    })
    .catch(error => console.log("pixabayCity fetch error", error));

  await fetch(`https://pixabay.com/api/?key=${pixabayApiKey}&q=${destData.country}&orientation=horizontal&image_type=photo`)
    .then(response => response.json())
    .then(response => {
      destData = {
        ...destData,
        countryImage: response.hits[0].webformatURL
      }
    })
    .then(response => console.log("pixabay fetch"))
    .catch(error => console.log("pixabayCountry fetch error", error));

  await fetch(`https://restcountries.eu/rest/v2/name/${destData.country}`)
    .then(response => response.json())
    .then(response => {
      destData = {
        ...destData,
        language: response[0].languages[0].name,
        currency: response[0].currencies[0].name,
        population: response[0].population
      }
    })
    .then(response => console.log("rest countries fetch", destData))
    .catch(error => console.log("rest countries fetch error", error));

  try {
    response.send(destData);
  }

  catch (error) {
    console.log("end of fetch error", error)
  }
});
