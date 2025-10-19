function displayPoem(response) {
    console.log("poem generated");
    new Typewriter("#poem", {
    strings: response.data.answer
    autoStart: true,
    delay: 1,
    cursor: "",
  }); 
}





function generatePoem(event) {
    event.preventDefault();
    let instructionsInputElement = document.querySelector(#user - instructions);
    let apiKey = "ce54f8031f66eoe3bt1a9b3dc47a23f4";
    let context =
        "You are a romantic poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML and seperate each line with a <br/>. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes Ai' inside a <strong></strong> element at the end of the poem and not at the beginning";
    let prompt = `User instructions: Generate a french poem about ${topic} in 4 lines.`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(prompt)}&context=${encodeURIComponent(context)}&key=${encodeURIComponent(apiKey)}`;
    //make a call to the API
    console.log("generating poem..");
   console.log(`prompt: ${prompt}`);
   console.log(`context: ${context}`);
    axios.get(apiUrl).then(displayPoem);
    //display the generated poem
  
  
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);