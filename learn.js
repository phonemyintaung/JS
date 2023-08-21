// input

// const x = window.prompt();
// window.alert(x);

// area calc (w, b)
// const width = window.prompt("Input Width");
// const breadth = window.prompt("Input Breadth");
// const area = width * breadth;
// window.alert("Area is " + area + " sqft");

// const run = (x, y) => {
//   window.alert(typeof x);
//   window.alert(typeof y);
//   return parseFloat(x) + parseFloat(y);
// };

// const inputX = window.prompt("Input x ...");
// const inputY = window.prompt("Input y ...");
// window.alert(run(inputX, inputY));

// const answer = window.confirm("ထမင်းစားပြီးပြီးလား?");
// window.alert(answer ? "စားပြီးပြီ" : "မစားရသေးဘူး");

// const myName = window.prompt("What's your name?");
// console.log(`My name is ${myName}`);

// const obj = {
//   a: "111",
// };

// console.log(obj.a);

// obj.a = "aaa"; // reasign value | overrite | overwrite value

// console.log(obj.a);

// const h1 = document.getElementsByTagName("h1")[0];

// console.dir(h1);
// console.log(h1.innerText);
// console.log(h1.style.color);
// console.log(h1.title);

// const showAlert = (event, x, y) => alert(x + y);

// const btn = document.querySelector("#btn");

// btn.onclick = showAlert.bind(null, event, 5, 6);
// // console.dir(btn);

// btn.addEventListener(
//   "click",
//   showAlert.bind(null, event, "Hello, ", "Min ga lar par")
// );

// const h1 = document.querySelector("h1");

// h1.addEventListener("mouseenter", () => {
//   console.log("Mouse enter event");
// });

// h1.addEventListener("mouseout", () => {
//   console.log("Mouse out event");
// });

// h1.addEventListener("mousemove", (e) => {
//   console.log(e, "Mouse move event");
// });

// h1.addEventListener("click", (e) => {
//   console.log(e, "Mouse move event");
// });

// const input = document.querySelector("input");
// // const select = document.querySelector("select");

// input.addEventListener("change", function (event) {
//   // console.log(this.valueAsDate);
//   console.log(event.target.valueAsDate);
// });

// input.addEventListener("keydown", () => {
//   console.log("Keydown event");
// });

// input.addEventListener("keypress", () => {
//   console.log("Keypress event");
// });

// input.addEventListener("keyup", () => {
//   console.log("Keyup event");
// });

// input.addEventListener("focus", () => {
//   console.log("Focus event");
// });

// input.addEventListener("blur", () => {
//   console.log("Blur event");
// });

// input.addEventListener("change", () => {
//   console.log("Change event");
// });

// select.addEventListener("change", () => {
//   console.log("Change event");
// });

// const form = document.querySelector("form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log(document.querySelector("input").valueAsDate);
// });

// // submit event က form ရှိမှပဲသုံးလို့ရမယ် form tag ကိုမသုံးရင် မရဘူး

// form.addEventListener("submit", () => {
//   console.log("You've submitted form");
// });

// window.addEventListener("scroll", () => {
//   console.log(`You're scrolling body`);
// });

// document.querySelector("#box").addEventListener("scroll", () => {
//   console.log("You're scrolling div");
// });

// window.addEventListener("load", () => {
//   console.log("window loaded");
// });

// console.log("hello 1");
// console.log("hello 2");
// console.log("hello 3");

// document.querySelector("a").addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log(e);
// });

const btn = document.querySelector("#btn");
const showConsole = (event) => {
  console.log(event);
  // console.log("You clicked");
  // btn.removeEventListener("click", showConsole);
};

btn.addEventListener("click", showConsole);

// console.log(new EventTarget());
