function updateUI() {
  if (response.cityImage === ''){
    const cityOrCountryImage = response.countryImage;
  } else {
    const cityOrCountryImage = response.cityImage;
  }
  document.getElementById('results').innerHTML = `
  <div class="main-result-flex">
    <div class="flex-box-left">
      <h2>${response.city}, ${response.country}</h2>
      <p>Your trip is ${daysToTrip} days away</p>
      <img src="https://www.weatherbit.io/static/img/icons/${response.currentIcon}.png">
      <p class="temp-text">${response.currentTemp}°C</p>
      <p>${response.currentDescription}</p>
      <p class="small">(currently)</p>
    </div>

    <div class="flex-box-right">
      <img id="destinationImage" src="${cityOrCountryImage}">
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
        <li>
          ${response.day1.date}
          <img src="https://www.weatherbit.io/static/img/icons/${response.day1.icon}.png">
          ${response.day1.maxTemp}°C, ${response.day1.description}
        </li>
        <li>
          ${response.day2.date}
          <img src="https://www.weatherbit.io/static/img/icons/${response.day2.icon}.png">
          ${response.day2.maxTemp}°C, ${response.day2.description}
        </li>
        <li>
          ${response.day3.date}
          <img src="https://www.weatherbit.io/static/img/icons/${response.day3.icon}.png">
          ${response.day3.maxTemp}°C, ${response.day3.description}
        </li>
        <li>
          ${response.day4.date}
          <img src="https://www.weatherbit.io/static/img/icons/${response.day4.icon}.png">
          ${response.day4.maxTemp}°C, ${response.day4.description}
        </li>
      </ul>
    </div>

    <div class="flex-box-forecast">
      <ul>
        <li>
          ${response.day5.date}
          <img src="https://www.weatherbit.io/static/img/icons/${response.day5.icon}.png">
          ${response.day5.maxTemp}°C, ${response.day5.description}
        </li>
        <li>
          ${response.day6.date}
          <img src="https://www.weatherbit.io/static/img/icons/${response.day6.icon}.png">
          ${response.day6.maxTemp}°C, ${response.day6.description}
        </li>
        <li>
          ${response.day7.date}
          <img src="https://www.weatherbit.io/static/img/icons/${response.day7.icon}.png">
          ${response.day7.maxTemp}°C, ${response.day7.description}
        </li>
        <li>
          ${response.day8.date}
          <img src="https://www.weatherbit.io/static/img/icons/${response.day8.icon}.png">
          ${response.day8.maxTemp}°C, ${response.day8.description}
        </li>
      </ul>
    </div>
  </div>
  `
}

//export {updateUI}
