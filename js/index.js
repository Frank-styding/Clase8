function createCardTemplate(name, price) {
  return `
    <div class="card">
          <div class="info-container">
            <div class="name">${name}</div>
            <div class="price">$${price}</div>
          </div>
          <div class="buttons">
            <div class="button-container">
              <div class="button buy">Buy</div>
            </div>
          </div>
        </div>
    `;
}
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}
let products = [];
products.push(new Product("Producto 1", 200.4));
products.push(new Product("Producto 2", 400.4));
products.push(new Product("Producto 3", 300.4));
products.push(new Product("Producto 4", 500.4));
let container = document.querySelector(".cards-container");

for (const product of products) {
  let template = createCardTemplate(product.name, product.price);
  container.innerHTML += template;
}
