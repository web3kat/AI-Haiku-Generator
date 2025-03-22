function generateHaiku(event) {
  event.preventDefault();

  new Typewriter("#haiku", {
    strings: "A world of dew",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let haikuFormElement = document.querySelector("#haiku-generator-form");
haikuFormElement.addEventListener("submit", generateHaiku);
