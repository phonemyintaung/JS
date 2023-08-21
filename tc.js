// variables

const fonts = [
  "Courier New",
  "Arial",
  "Garamond",
  "Gigi Regular",
  "Jokerman Regular",
  "Lucida Sans",
];

// selectors

const output = document.querySelector("#output");
const text = document.querySelector("#text");
const count = document.querySelector("#count");
const color = document.querySelector("#color");
const fontSize = document.querySelector("#fontSize");
const fontFamily = document.querySelector("#fontFamily");

fonts.forEach((font) => {
  //   console.log(font);
  //   console.log(new Option(font, font));
  fontFamily.append(new Option(font, font));
});

// actions

text.addEventListener("keyup", (event) => {
  //   output.innerText = event.target.value;
  output.innerText = text.value;
  count.innerText = text.value.length;
});

color.addEventListener("change", (event) => {
  //   output.style.color = event.target.value;
  output.style.color = color.value;
});

fontSize.addEventListener("change", (event) => {
  //   console.log(fontSize.value);
  //   output.style.fontSize = event.target.value + "px";
  output.style["font-size"] = `${fontSize.value}px`;
});

fontFamily.addEventListener("change", (event) => {
  //   output.style.fontFamily = event.target.value;
  output.style.fontFamily = fontFamily.value;
});
