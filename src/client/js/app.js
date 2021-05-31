
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
        document.getElementById('city').innerHTML = `The city you're travelling to is: ${destCity}`
    })

  .catch((error => console.log(error)));
}

export {performAction}
