// Async post function
const postData = async (url='', data={}) => {
  const response = await fetch(url, {
    method: 'POST',
    //credentials: 'same-origin',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  try {
    const newData = await response.json();
    console.log(newData);
    return newData
  }
  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
};

// Create a new date instance dynamically with JS


// Listen for click of button
document.getElementById('submit-form').addEventListener('click', performAction);

// Async fetch that gets info for the URL to get weather data
function performAction(e) {
  event.preventDefault()
  const inputCity =  document.getElementById('city').value;
  const inputDate = document.getElementById('date').value;
  getLongLat(inputCity)
  .then(function(data){
    console.log("first step done", data);
    postData('http://localhost:9090/addTripData', {
    //  city:data.geonames.toponymName,
    //  country:data.geonames.countryName,
    //  long:data.geonames.lng,
    //  lat:data.geonames.lat
    });
    // Calls update user interface function
    //updateUI();
  });
}

//Async post
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


/*
//POST request
app.post('/destination', async(req, res) => {
  // API URL variables
  let geoNameApiKey = process.env.GEONAME_API_KEY;
  let weatherbitApiKey = process.env.WEATHER_API_KEY;
  let pixabayApiKey = process.env.PIXABAY_API_KEY;

  const userCity = req.body.city;
  console.log(req.body.city)

  const geoNameData = await fetch(`http://api.geonames.org/searchJSON?q=${userCity}&maxRows=1&username=${geoNameApiKey}`, {
    method: 'POST'
  });
  try {
    const data = await geoNameData.json()
    console.log(geoNameData)
    console.log("::: geoNameData :::", data)
    res.send(data);
  }
  catch (err) {
    console.log("error", err)
  }
});



//Async post that creates the URL and returns data
const getTemp = async (baseURL, cityName, apiKey)=>{
  const response = await fetch(baseURL + cityName + '&appid=' + apiKey + '&units=metric');
  try {
    const data = await response.json();
      console.log(data);
      return data;
    }
    catch(error) {
      console.log("error", error);
      // appropriately handle the error
  }
}
/*
// Update user interface
const updateUI = async () => {
    const request = await fetch('http://localhost:9090/all');
    try {
        const allData = await request.json();
        console.log(allData);
        document.getElementById('date').innerHTML = `Date: ${allData.date}`;
        document.getElementById('temp').innerHTML = `${allData.temperature} C`;
        document.getElementById('content').innerHTML = `You feel: ${allData.feelings}`;
    }
    catch (error) {
        console.log("error", error);
    }
}
*/
