const updateUI = async () => {
    const request = await fetch('http://localhost:9090/all');
    try {
        await request.json({destData});
        console.log("destData received for updateUI");
        document.getElementById('results').innerHTML = `
        <h2>Hooray! You're going to ${destData.city}, ${destData.counrty}</h2>
          <p>Your trip is XX days away</p>
          <h3>Current weather</h3>
          <p><img="https://www.weatherbit.io/static/img/icons/${destData.currentIcon}.png"> ${destData.currentDescription}, ${destData.currentTemp} C</p>
          `
    }
    catch (error) {
        console.log("error at updateUI", error);
    }
}

//export {updateUI}
