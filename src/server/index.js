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

const getLongLat = async (inputCity) => {
  let geoNameApiKey = process.env.GEONAME_API_KEY;
  const response = await fetch('http://api.geonames.org/searchJSON?q=' + inputCity + '&maxRows=1&username=' + geoNameApiKey);
  try {
    const data = await response.json();
      console.log("getLongLat function done", data);
      return data;
    }
    catch(error) {
      console.log("error", error);
  }
}

app.post('/destination', async (req, res) => {
  let geoNameApiKey = process.env.GEONAME_API_KEY;
  //let weatherKey = process.env.WEATHERBIT_KEY;
  //let pixabayKey = process.env.PIXABAY_KEY;

  let destData = {};

  const inputCity = req.body.destination;

  // geoname fetch store info in destData
  await fetch('http://api.geonames.org/searchJSON?q=' + inputCity + '&maxRows=1&username=' + geoNameApiKey)
  .then(response => response.json())
  .then(response => {
    destData = {
      city: response.geonames[0].toponymName,
      country: response.geonames[0].countryName,
      lat: response.geonames[0].lat,
      long: response.geonames[0].lat
    }
  })
  .then(response => console.log("server fetch", inputCity, destData))
  //.catch(error => console.log("geoName fetch error", error));
  /*
  // weatherbit fetch store info in destData
  await fetch(`https://api.weatherbit.io/v2.0/current?lat=${destData.lat}&lon=${destData.lng}&key=${weatherKey}`)
  .then(response => response.json())
  .then(response => {
    destData = {
      ...destData,
      curentWeather: response.data[0]
    }
  })
  .catch(error => console.log("weatherbit current weather fetch error", error));

  // forecast weather fetch store info in destData
  await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${destData.lat}&lon=${destData.lng}&key=${weatherKey}`)
  .then(response => response.json())
  .then(response => {
    destData = {
      ...destData,
      forecastWeather: response.data
    }
  })
  .catch(error => console.log("weatherbit forecast fetch error", error));

  const pixabayQueryCity  = `&q=${data.city}&orientation=horizontal&image_type=photo`;
  const pixabayQueryCountry  = `&q=${data.countryName}&orientation=horizontal&image_type=photo`;
  let pixabayUrl = `https://pixabay.com/api/?key=${pixabayKey}${pixabayQueryCity}`;
  let imageURL = '';

  await fetch(pixabayUrl)
  .then(response => response.json())
  .then(response => {
    imageURL = response.hits[0].webformatURL;
  })
  .catch(error => console.log('error', error));

  if(imageURL === '') {
    let pixabayUrl = `https://pixabay.com/api/?key=${pixabayKey}${pixabayQueryCountry}`;
    await fetch(pixabayUrl)
    .then(response => response.json())
    .then(response => {
      imageURL = response.hits[0].webformatURL;
    })
    .catch(error => console.log('error', error));
  }

  destData = {
    ...destData,
    imageURL
  }

  res.send(data);
  */
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
