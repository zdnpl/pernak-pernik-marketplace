document.addEventListener("DOMContentLoaded", function () {
  function searchProducts() {
    const searchText = document.getElementById("search-bar").value.toLowerCase();
    const products = document.querySelectorAll(".product-item");
    let found = false;

    products.forEach(function (product) {
      const title = product.getAttribute("data-title").toLowerCase();
      if (title.includes(searchText)) {
        product.style.display = "block";
        found = true;
      } else {
        product.style.display = "none";
      }
    });

    const cantfind = document.querySelector(".cant-found-text");

    if (!found) {
      cantfind.style.display = "block";
      cantfind.innerText = "Sorry we cant find your " + searchText.toLowerCase() + " :(";
    } else {
      cantfind.style.display = "none";
    }
  }

  document.getElementById("search-button").addEventListener("click", searchProducts);

  document.getElementById("search-bar").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      searchProducts();
    }
  });
});

// add to fav
// main.js

// Ambil parameter dari URL
const urlParams = new URLSearchParams(window.location.search);
const productName = urlParams.get("id");

// Objek produk untuk contoh
const products = {
  TasPetrikBintangLaut: {
    name: "Tas Petrik Bintang Laut 1",
    image: "/assets/images/produk1.jpeg",
    price: "Rp. 599.000",
    description: "Deskripsi produk 1.",
  },
  KaosCimit: {
    name: "Kaos Cimit",
    image: "/assets/images/cimit.jpeg",
    price: "Rp. 1",
    description: "Deskripsi produk 2.",
  },
  // Tambah produk lainnya jika diperlukan
};

// Update konten berdasarkan nama produk dari parameter URL
if (products[productName]) {
  const product = products[productName];
  document.getElementById("product-name").textContent = product.name;
  document.getElementById("product-image").src = product.image;
  document.getElementById("product-price").textContent = product.price;
  document.getElementById("product-description").textContent = product.description;
  // Update title halaman dengan judul produk
  document.title = product.name + " - Detail Produk";
} else {
  // Jika produk tidak ditemukan, tampilkan pesan atau redirect ke halaman lain
  console.error("Produk tidak ditemukan.");
}

// Function to add product to favorites
function addToFavorites() {
  const productId = productName; // Gunakan nama produk sebagai ID untuk sederhana
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  // Check if product already exists in favorites
  if (!favorites.includes(productId)) {
    favorites.push(productId);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    alert("Product added to favorites!");
  } else {
    alert("Product is already in favorites!");
  }
}

// main.js (lanjutan)

document.addEventListener("DOMContentLoaded", function () {
  displayFavorites();
});

// Function to retrieve favorites from localStorage
function getFavorites() {
  return JSON.parse(localStorage.getItem("favorites")) || [];
}

// Function to display favorite products
function displayFavorites() {
  const favorites = getFavorites(); // Get favorite products from localStorage
  const favoritesContainer = document.getElementById("favorites-container"); // Assuming there's a container in your HTML for favorites

  // Clear existing content
  favoritesContainer.innerHTML = "";

  // Loop through favorite IDs and display corresponding products
  favorites.forEach((productId) => {
    if (products[productId]) {
      const product = products[productId];
      // Create elements to display product information
      const productCard = document.createElement("div");
      productCard.classList.add("col-md-3", "product-item");
      productCard.innerHTML = `
          <div class="card product-card shadow-sm">
            <img src="${product.image}" class="card-img-top" alt="${product.name}" />
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
            </div>
            <div class="card-footer">
              <span class="price">${product.price}</span>
              <span class="sold">10 sold</span>
            </div>
          </div>
        `;
      favoritesContainer.appendChild(productCard); // Append product card to favorites container
    }
  });

  // If there are no favorites, display a message
  if (favorites.length === 0) {
    favoritesContainer.innerHTML = "<p>No favorite products yet.</p>";
  }
}

// main.js (lanjutan)

document.addEventListener("DOMContentLoaded", function () {
  displayFavorites();
});

// Function to retrieve favorites from localStorage
function getFavorites() {
  return JSON.parse(localStorage.getItem("favorites")) || [];
}

// Function to display favorite products
// main.js (lanjutan)

document.addEventListener("DOMContentLoaded", function () {
  displayFavorites();
});

// Function to retrieve favorites from localStorage
function getFavorites() {
  return JSON.parse(localStorage.getItem("favorites")) || [];
}

// Function to display favorite products
function displayFavorites() {
  const favorites = getFavorites(); // Get favorite products from localStorage
  const favoritesContainer = document.getElementById("favorites-container"); // Assuming there's a container in your HTML for favorites

  // Clear existing content
  favoritesContainer.innerHTML = "";

  // Loop through favorite IDs and display corresponding products
  favorites.forEach((productId) => {
    if (products[productId]) {
      const product = products[productId];
      // Create elements to display product information
      const productCard = document.createElement("div");
      productCard.classList.add("col-md-12", "product-item", "my-3", "border", "p-3");
      productCard.innerHTML = `
          <div class="row">
            <div class="col-md-3">
              <img src="${product.image}" class="img-fluid" alt="${product.name}" />
            </div>
            <div class="col-md-6">
              <h5>${product.name}</h5>
              <p class="text-muted">${product.price}</p>
            </div>
            <div class="col-md-3 d-flex justify-content-end align-items-center">
              <button class="btn btn-primary me-2">View Product</button>
              <button class="btn btn-danger">Remove from Fav</button>
            </div>
          </div>
        `;
      favoritesContainer.appendChild(productCard); // Append product card to favorites container
    }
  });

  // If there are no favorites, display a message
  if (favorites.length === 0) {
    favoritesContainer.innerHTML = '<p class="text-center">No favorite products yet.</p>';
  }
}
