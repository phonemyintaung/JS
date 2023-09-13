const services = [
  {
    id: 1,
    title: "Foot Massage",
    price: 3,
  },
  {
    id: 2,
    title: "Body Massage",
    price: 5,
  },
  {
    id: 3,
    title: "Hot Spa Massage",
    price: 7,
  },
  {
    id: 4,
    title: "Toxic Release Massage",
    price: 9,
  },
];

const invoiceForm = document.querySelector("#invoiceForm");
const selectService = document.querySelector("#selectService");
const quantity = document.querySelector("#quantity");
const lists = document.querySelector("#lists");

const createTr = (service, quantity) => {
  const tr = document.createElement("tr");
  tr.setAttribute("service-id", service.id);
  const total = service.price * quantity;
  tr.innerHTML = `
    <td class="text-end">${service.title}</td>
    <td class="text-end list-quantity">${quantity}</td>
    <td class="text-end">${service.price}</td>
    <td class="text-end list-total">${total}</td>
  `;

  return tr;
};

services.forEach((service) => {
  selectService.append(new Option(service.title, service.id));
});

invoiceForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const selectedService = services.find((el) => el.id == selectService.value);

  const existedService = [...lists.children].find(
    (el) => el.getAttribute("service-id") == selectedService.id
  );

  if (existedService) {
    const existedQuantity = existedService.querySelector(".list-quantity");
    existedQuantity.innerText =
      parseFloat(existedQuantity.innerText) + quantity.valueAsNumber;
    existedService.querySelector(".list-total").innerText =
      existedQuantity.innerText * selectedService.price;
  } else {
    lists.append(createTr(selectedService, quantity.valueAsNumber));
  }

  invoiceForm.reset();
});
