const createBtn = document.querySelector("#createBtn");
const textInput = document.querySelector("#textInput");
const lists = document.querySelector("#lists");
const total = document.querySelector("#total");
const doneTotal = document.querySelector("#doneTotal");

const data = ["111", "222", "333", "444", "555"];

const counter = () => {
  const totalCount = lists.children.length;
  const doneTotalCount = [...lists.children].filter(
    (el) => el.querySelector(".form-check-input").checked === true
  ).length;
  total.innerText = totalCount;
  doneTotal.innerText = doneTotalCount;
};

const createLi = (text) => {
  // const dynamicId = "flexCheck" + Date.now();
  const dynamicId = "flexCheck" + Math.random();
  const li = document.createElement("li");
  // li.addEventListener("dblclick", edit);
  // li.ondblclick = edit;
  li.className =
    "list-group-item d-flex align-items-center justify-content-between";
  li.innerHTML = `
  <div class="form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="${dynamicId}"
      onchange=done(event)
    />
    <label class="form-check-label" for="${dynamicId}">
      ${text}
    </label>
  </div>
  <div class="btn-group">
    <button class="btn btn-sm btn-primary" onclick="edit(event)">
      <i class="bi bi-pencil pe-none"></i>
    </button>
    <button class="btn btn-sm btn-danger" onclick="del(event)">
      <i class="bi bi-trash pe-none"></i>
    </button>
  </div>
  `;

  return li;
};

const addList = () => {
  if (textInput.value.trim()) {
    lists.append(createLi(textInput.value));
    textInput.value = null;
    textInput.focus();
    counter();
  } else {
    alert("Input text is empty");
  }
};

const del = (event) => {
  // console.dir(event);
  // console.log(event);
  if (confirm("Are you sure?"))
    // event.target.parentElement.parentElement.remove();
    event.target.closest("li").remove();
  counter();
};

const done = (event) => {
  console.log(event.target.nextElementSibling);
  event.target.nextElementSibling.classList.toggle(
    "text-decoration-line-through"
  );
  counter();
};

// const edit = (event) => {
//   const old = event.target.querySelector(".form-check-label");
//   const newText = prompt("Input new text", old.innerText);
//   console.log(newText);
//   old.innerText = newText;
// };

// ကိုယ့်ဟာကိုယ်ရေးထားတာ
const edit = (event) => {
  const old =
    // event.target.parentElement.previousElementSibling.querySelector(
    //   ".form-check-label"
    // );
    event.target.closest(".list-group-item").querySelector(".form-check-label");
  const newText = prompt("Input new text", old.innerText);
  if (newText && newText.trim()) {
    old.innerText = newText;
  }
};

data.forEach((d) => lists.append(createLi(d)));

createBtn.addEventListener("click", addList);

textInput.addEventListener("keyup", (event) => {
  // console.log(event);
  // console.dir(event);
  if (event.keyCode === 13) {
    addList();
  } else if (event.keyCode === 27) {
    textInput.blur();
  }
});

window.addEventListener("load", counter);
