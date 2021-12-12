import faker from "faker";

let products = "";

for (let i = 0; i < 3; i++) {
  const name = faker.commerce.productName();
  products += `<div>${name}</div>`;
}

console.log(products);
console.log("test");
const container = document.querySelector("#dev_products");
container.innerHTML = products;
