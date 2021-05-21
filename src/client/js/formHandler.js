function handleSubmit(event) {
  const inputText = document.getElementById('name').value;
  event.preventDefault()
  console.log("::: Form Submitted :::")
  //check what text was put into the form field
  if(Client.checkForName(inputText)) {
    document.getElementById('coming').classList.remove('hide')
    document.getElementById('data-list').classList.add('hide')
    // Fetch request
    fetch('http://localhost:9090/getSentiment',{
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
        console.log("Updating UI")
        document.getElementById('coming').classList.add('hide')
        const newScore_tag = Client.rankScore(response.score_tag);
        document.getElementById('score_tag').innerHTML = `Overall sentiment: ${newScore_tag}`
        document.getElementById('agreement').innerHTML = `Agreement: ${response.agreement}`
        document.getElementById('confidence').innerHTML = `Confidence: ${response.confidence}/100`
        document.getElementById('irony').innerHTML = `Irony: ${response.irony}`
        document.getElementById('subjectivity').innerHTML = `Subjectivity: ${response.subjectivity}`
        document.getElementById('data-list').classList.remove('hide')
    })
  }
  else {
    alert("Please enter a valid URL");
    console.log("Not valid url");
  }
}

export { handleSubmit }
