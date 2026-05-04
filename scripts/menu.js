import { navbar } from "./components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

fetch('./data/products.json')
    .then(res => res.json())
    .then(data => {
        console.log(data.products);

        const container = document.getElementById("products");

        data.products.forEach(product => {
            container.innerHTML += `
        <div class="card">
          <img src="${product.image}"  alt="product img"/>
          <h3>${product.name}</h3>
          <p>$${product.price}</p>
        </div>
      `;
        });
    });