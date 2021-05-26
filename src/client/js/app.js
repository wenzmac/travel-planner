function handleSubmit(event) {
  const userCity = document.getElementById('city').value;
  event.preventDefault()
  console.log("::: Form Submitted :::")
  // Fetch request
  fetch('http://localhost:9090/destination',{
    method: 'POST',
    cache: "no-cache",
    credentials: 'same-origin',
    mode: 'cors',
    headers: {
      'Content-Type':'application/json',
      },
    body:JSON.stringify({inputText}),
    })
    .then (res => {
      console.log(res)
      return res.json()
    })
    .then (function (response) {
      console.log("Update UI")
    })
  }
  //else {
  //  alert("Please enter a valid URL");
  //  console.log("Not valid url");
  //}


export { handleSubmit }





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

// today's date
let d = new Date();
let month = d.getMonth() +1;
let newDate = d.getDate()+'.'+month+'.'+ d.getFullYear();

// Listen for click of button
document.getElementById('submit-form').addEventListener('click', handleSubmit);

/*
// Async fetch that gets info for the URL to get weather data
const performAction(e) => {
  postData('http://localhost:3030/destination', {
      temperature:data.main.temp,
      date:newDate,
      feelings:userFeelings});
    // Calls update user interface function
    // updateUI();
  });
}
*/
