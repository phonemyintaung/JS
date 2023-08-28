// select element
const result = document.getElementById("result");
const store = document.getElementById("store");
const clear = document.getElementById("clear");
const width = document.getElementById("width");
const breadth = document.getElementById("breadth");
const calculate = document.getElementById("calculate");
const records = document.getElementById("records");

// functions
const run = (x, y) => x + y;

const clearResult = () => {
  console.log("clearResult function");

  result.innerText = null;
};

const calcArea = () => {
  console.dir(width);
  console.log("calcArea function");

  // input type number နဲ့မလို့ valueAsNumber နဲ့ number ကိုယူထားတယ် input type text ဆိုရင် value နဲ့ပဲ number ကိုယူလို့ရတယ်
  const area = width.valueAsNumber * breadth.valueAsNumber;

  // calculate
  result.innerText = `w:${width.value}ft x b:${breadth.value}ft = ${area} sqft`;

  // remove value
  width.value = null;
  breadth.value = null;

  // width.valueAsNumber = breadth.valueAsNumber = null;
};

const storeResult = () => {
  console.log("storeResult function");

  records.innerHTML += `<li>${result.innerText}</li>`;

  clearResult();
};

// process
// clearResult() or calcArea() လို့ပေးလိုက်ရင် invoke တန်းလုပ်သွားတဲ့အတွက် အလုပ်မလုပ်တော့ဘူး အကယ်၍ function ထဲမှာဆိုရင်တော့ clearResult() လို့ပေးလို့ရတယ်
// clear.onclick = () => clearResult();
calculate.onclick = calcArea;

clear.onclick = clearResult;

// <li></li>
store.onclick = storeResult;
