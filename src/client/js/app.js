// EVENT LISTENER
// Listen for click of button
document.getElementById('generate').addEventListener('click', performAction);

// MAIN APP FUNCTION
// Takes the city input and sends to the server
function performAction(e) {
  const destCity = document.getElementById('userCity').value;
  const destDate = document.getElementById('date').value;
  e.preventDefault();
  if (destCity == "" || destDate == "") {
    alert("Please enter a city and date");
  } else {
    console.log("form checked");
    document.getElementById('coming').classList.remove('hide')
    document.getElementById('loading-gif').classList.remove('hide')
    fetch('http://localhost:9090/destination', {
      method: 'POST',
      credentials: 'same-origin',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({destCity}),
      })
    // Gets destData as response from the server
    .then(response => {
      console.log("/destination fetch done")
      return response.json()
    })
    .then(response => {
      // calls the daysUntilTrip function
      const daysToTrip = daysUntilTrip();
      const dayOrDays = singleOrPlural(daysToTrip)
      const destImage = destImagePicker(response);
      // Updates UI
      console.log("Updating UI")
      document.getElementById('coming').classList.add('hide')
      document.getElementById('loading-gif').classList.add('hide')
      document.getElementById('results').innerHTML = `
      <div class="main-result-flex">
        <div class="flex-box-left">
          <h2>${response.city}, ${response.country}</h2>
          <p>Your trip is ${daysToTrip} ${dayOrDays} away</p>
          <img src="https://www.weatherbit.io/static/img/icons/${response.currentIcon}.png">
          <p class="temp-text">${response.currentTemp}°c</p>
          <p>${response.currentDescription}</p>
          <p class="small">(currently)</p>
        </div>
        <div class="flex-box-right">
          <img id="destinationImage" src="${destImage}">
        </div>
      </div>
      <div class="extra-results-flex">
        <div class="flex-box-icons">
          <img src="fab13f2ec6e368ca5122527f3862abad.png">
          <h3>Language</h3>
          <p>${response.language}</p>
        </div>
        <div class="flex-box-icons">
          <img src="e23f4589e4925b2ad271820627c51173.png">
          <h3>Currency</h3>
          <p>${response.currency}</p>
        </div>
        <div class="flex-box-icons">
          <img src="b5891e799634a520ab45f991f18f8678.png">
          <h3>Population</h3>
          <p>${response.population}</p>
        </div>
      </div>
      <div class="extra-results-flex">
        <div class="flex-box-icons">
          <img src="8603f68b267a8bab8f580bfbc2532f6a.png">
          <h3>Weather forecast</h3>
        </div>
      </div>
      <div class="extra-results-flex">
        <div class="flex-box-forecast">
          <ul>
            <li>${response.day1[0].date}<img src="https://www.weatherbit.io/static/img/icons/${response.day1[0].icon}.png">${response.day1[0].maxTemp}°c</li>
            <li>${response.day2[0].date}<img src="https://www.weatherbit.io/static/img/icons/${response.day2[0].icon}.png">${response.day2[0].maxTemp}°c</li>
            <li>${response.day3[0].date}<img src="https://www.weatherbit.io/static/img/icons/${response.day3[0].icon}.png">${response.day3[0].maxTemp}°c</li>
            <li>${response.day4[0].date}<img src="https://www.weatherbit.io/static/img/icons/${response.day4[0].icon}.png">${response.day4[0].maxTemp}°c</li>
          </ul>
        </div>
        <div class="flex-box-forecast">
          <ul>
            <li>${response.day5[0].date}<img src="https://www.weatherbit.io/static/img/icons/${response.day5[0].icon}.png">${response.day5[0].maxTemp}°c</li>
            <li>${response.day6[0].date}<img src="https://www.weatherbit.io/static/img/icons/${response.day6[0].icon}.png">${response.day6[0].maxTemp}°c</li>
            <li>${response.day7[0].date}<img src="https://www.weatherbit.io/static/img/icons/${response.day7[0].icon}.png">${response.day7[0].maxTemp}°c</li>
            <li>${response.day8[0].date}<img src="https://www.weatherbit.io/static/img/icons/${response.day8[0].icon}.png">${response.day8[0].maxTemp}°c</li>
          </ul>
        </div>
      </div>
      `
    })
    //.catch(error => alert("Something went wrong, please check the city and try again", error));
  }
}


// DATE INPUT FIELD
// creates todays date then formats it so the month and day have 2 digits and as yyyy-mm-dd
// from todays date it calls on the addDays function to create the date in 16 days
const dateRestrict = () => {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  const dateToday = yyyy+'-'+mm+'-'+dd;
  const dateFuture = addDays(today, 16);
  const ddFuture = String(dateFuture.getDate()).padStart(2, '0');
  const mmFuture = String(dateFuture.getMonth() + 1).padStart(2, '0');
  const yyyyFuture = dateFuture.getFullYear();
  const dateMax = yyyyFuture+'-'+mmFuture+'-'+ddFuture;
  document.getElementById('date').min = dateToday;
  document.getElementById('date').max = dateMax;
}

// adds days to a date format
const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

// DAYS UNTIL TRIP
// adds days to a date format
const daysUntilTrip = () => {
  const departDate = document.getElementById('date').value;
  const today = new Date();
  const depart = new Date(departDate);
  const result = depart.getDate() - today.getDate();
  return result;
  console.log(result);
};

dateRestrict();

const destImagePicker = (response) => {
  const cityImage = response.cityImage;
  const countryImage = response.countryImage;
  if (typeof cityImage === 'undefined') {
    console.log("countryImage");
    return countryImage;
  }
  else {
    console.log("cityImage");
    return cityImage;
  }
}

const singleOrPlural = (daysToTrip) => {
  if (daysToTrip == 1) {
    return "day";
  }
  else {
    return "days";
  }
}

export {performAction}
