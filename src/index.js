function generatePoem(event) {
  event.preventDefault();

  let poemElement = document.querySelector("#poem-display");
  new Typewriter(poemElement, {
    strings: "La tombe dit à la rose",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);