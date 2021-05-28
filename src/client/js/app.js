
// Listen for click of button
document.getElementById('generate').addEventListener('click', performAction);


function performAction(e) {
  e.preventDefault();
  const city = document.getElementById('userCity').value;
  fetch('http://localhost:9090/destination', {
    method: 'POST',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(e),
    },
  {destination:city})
  .then(response => response.json(),
  console.log("client fetch")
  )

  .then (function (response) {
        console.log("Updating UI")
        document.getElementById('city').innerHTML = `The city you're travelling to is: ${destData.city}`
    })

  .catch((error => console.log(error)));
}

export {performAction}
