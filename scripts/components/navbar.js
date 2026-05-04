const API_URL = "YOUR_API_URL_HERE"; // <-- replace this

const productsContainer = document.getElementById("products");
const sortSelect = document.getElementById("sort");

export function navbar() {
    return `
    <div class="navbar-wrapper">
        <a href="../../menu.html">Bagels</a>
        <a href="https://wolt.com/en/geo/tbilisi/restaurant/bar-bagel">Delivery</a>
        <a href="https://www.instagram.com/bar.bagel/">Social Media</a>
    </div>
    `
}

let products = [];

async function loadProducts() {
    try {
        const res = await fetch(API_URL);
        const data = await res.json();

        products = data.products;
        renderProducts(products);
    } catch (err) {
        console.error("Error:", err);
    }
}

function renderProducts(data) {
    productsContainer.innerHTML = "";

    data.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
      <img src="${product.image}" alt="${name}">
      <div class="card-content">
        <h3>${name}</h3>
        <p class="price">$${product.price}</p>
      </div>
    `;

        productsContainer.appendChild(card);
    });
}

sortSelect.addEventListener("change", () => {
    let sorted = [...products];

    switch (sortSelect.value) {
        case "price-asc":
            sorted.sort((a, b) => a.price - b.price);
            break;
        case "price-desc":
            sorted.sort((a, b) => b.price - a.price);
            break;
        case "name-asc":
            sorted.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case "name-desc":
            sorted.sort((a, b) => b.title.localeCompare(a.title));
            break;
    }

    renderProducts(sorted);
});

loadProducts();