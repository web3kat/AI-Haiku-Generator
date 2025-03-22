function displayHaiku(response) {
  new Typewriter("#haiku", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateHaiku(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#user-instruction");
  let prompt = `Generate a haiku about ${instructionInput.value}`;
  let context =
    "A haiku is a traditional Japanese poem which follows a 5-7-5 syllable pattern and is typically unrhymed. You are a haiku expert. Your mission is to generate a haiku based on the user input. Do not include a title. Please separate each line with a <br />. Please sign the haiku with 'SheCodes AI' inside a <strong> element in a new line after the end of the haiku.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${API_KEY}`;

  let haikuElement = document.querySelector("#haiku");
  haikuElement.classList.remove("hidden");
  haikuElement.innerHTML = `<div class="blink">⏳ Generating a haiku about ${instructionInput.value}</div>`;

  axios.get(apiUrl).then(displayHaiku);
}

import API_KEY from "./apikey.js";

let haikuFormElement = document.querySelector("#haiku-generator-form");
haikuFormElement.addEventListener("submit", generateHaiku);
