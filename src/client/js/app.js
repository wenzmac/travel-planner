// EVENT LISTENER
// Listen for click of button
document.getElementById('generate').addEventListener('click', performAction);

// MAIN APP FUNCTION
// Takes the city input and sends to the server
function performAction(e) {
  e.preventDefault();
  const destCity = document.getElementById('userCity').value;
  // put formChecker here
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
// Updates UI
  .then(response => {
    console.log("Updating UI")
    // calls the daysUntilTrip function
    const daysToTrip = daysUntilTrip();
    document.getElementById('results').innerHTML = `
      <p>Hooray! You're going to</p>
      <h2>${response.city}, ${response.country}</h2>
      <p>Your trip is ${daysToTrip} days away</p>
      <p><img src="https://www.weatherbit.io/static/img/icons/${response.currentIcon}.png"></p>
      <p class="temp-text">${response.currentTemp}°C</p>
      <p>${response.currentDescription}</p>
    `
  })
  .catch(error => console.log("/destination fetch error", error));
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

export {performAction}
