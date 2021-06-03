
// Listen for click of button
document.getElementById('generate').addEventListener('click', performAction);


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
  .then (response => {
  return response.json()
  })
  //.then(response => response.json()
  //console.log("client fetch")
  //)
  .then (function (response) {
        console.log("Updating UI")
        //updateUI();
    })

  .catch((error => console.log(error)));
}

const updateUI = async () => {
    const request = await fetch('http://localhost:9090/all');
    try {
        const allData = await request.json();
        console.log("allData received for updateUI");
        document.getElementById('results').innerHTML = `
        <h2>Hooray! You're going to ${allData.city}, ${allData.counrty}</h2>
          <p>Your trip is XX days away</p>
          <h3>Current weather</h3>
          <p><img="https://www.weatherbit.io/static/img/icons/${allData.currentIcon}.png"> ${allData.currentDescription}, ${destData.currentTemp} C</p>
          `
    }
    catch (error) {
        console.log("error at updateUI", error);
    }
}

export {performAction}
