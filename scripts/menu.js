import { navbar } from "./components/navbar.js";

document.getElementById("navbar").innerHTML = navbar(true);

const contentDiv = document.getElementById("content");
const navbarDiv = document.getElementById("navbar");

contentDiv.addEventListener("scroll", () => {
    if (contentDiv.scrollTop > 10) {
        navbarDiv.classList.add("navbar-shadow");
    } else {
        navbarDiv.classList.remove("navbar-shadow");
    }
});

const productsContainer = document.getElementById("products");
const sortSelect = document.getElementById("sort");
let products = [];

function renderProducts(data) {
    productsContainer.innerHTML = "";

    data.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="card-content">
                <h3>${product.name}</h3>
                <p class="price">₾${product.price.toFixed(2)}</p>
                <p class="description">${product.description || ""}</p>
            </div>
        `;

        productsContainer.appendChild(card);
    });
}


async function loadProducts() {
    try {
        const res = await fetch('./data/products.json');
        if (!res.ok) throw new Error("Could not fetch product data");

        const data = await res.json();
        products = data.products;

        renderProducts(products);
    } catch (err) {
        console.error("Error loading bagels:", err);
        productsContainer.innerHTML = "<p>Failed to load menu. Please try again later.</p>";
    }
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
        case "Bagels":
            sorted= products.filter(p => p.category === "Bagels");
            break;
        case "Drinks":
            sorted= products.filter(p => p.category === "Drinks");
            break;
    }

    renderProducts(sorted);
});
loadProducts();