const text = document.querySelector("#textInput");
const btn = document.querySelector("#btn");
const lists = document.querySelector("#lists");

btn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.className =
    "list-group-item d-flex justify-content-between align-items-center";
  li.innerHTML = `
    <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                    ${text.value}
                  </label>
                </div>
                <button class="btn btn-sm btn-danger">Del</button>
    `;

  lists.append(li);
  text.value = null;
  text.focus();
});
