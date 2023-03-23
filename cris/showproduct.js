import {products} from "../db.js";

let url = document.location.search;
let params = new URLSearchParams(url);
let id = params.get('id');

let carouselExampleControls = document.getElementById('carouselExampleControls');

products.forEach(function(product) {
    if (product.id == id) {
        let carouselItems = "";
        product.images.forEach((imageUrl, index) => {
            carouselItems += `
            <div class="carousel-item ${index == 0 ? "active" : ""}">
                <img src="${imageUrl}" class="d-block w-100" alt="...">
            </div>`;
        });
        carouselExampleControls.innerHTML = `
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    ${carouselItems}
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>`;

        document.querySelector(".product-title").textContent = product.title;
        document.querySelector(".product-description").textContent = `Description: ${product.description}`;
        document.querySelector(".product-price").textContent = `Price: ${product.price} $`;
        document.querySelector(".product-brand").textContent = `Brand: ${product.brand}`;
        document.querySelector(".product-category").textContent = `Category: ${product.category}`;
        document.querySelector(".product-rating").textContent = `Rating: ${product.rating} / 5`;
        document.querySelector(".product-stock").textContent = `In stock: ${product.stock} units`;
    }
});

//***********test code**************** */

// import {products} from "./db.js";

// // console.log(document.location.search)
// let url = document.location.search  // stocke les variables dans l'url
// let params = new URLSearchParams(url) //
// let id = params.get('id') // stocke l'id
// console.log(id)

// let carouselExampleControls = document.getElementById('carouselExampleControls')
// products.forEach(function(product) {
//     if (product.id == id) {
//         console.log(product)
//         carouselExampleControls.innerHTML =

// `<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" >
//     <div class="carousel-inner">
//         <div class="carousel-item active">
//             <img src="https://i.dummyjson.com/data/products/1/1.jpg" class="d-block w-100" alt="...">
//         </div>
//         <div class="carousel-item">
//             <img src="https://i.dummyjson.com/data/products/1/1.jpg" class="d-block w-100" alt="...">
//         </div>
//         <div class="carousel-item">
//             <img src="https://i.dummyjson.com/data/products/1/1.jpg" class="d-block w-100" alt="...">
//         </div>
//     </div>
//     <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
//         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span class="visually-hidden">Previous</span>
//     </button>
//     <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
//         <span class="carousel-control-next-icon" aria-hidden="true"></span>
//         <span class="visually-hidden">Next</span>
//     </button>
// </div>`
//     }});
//     function showProductImages(images) {
//         const imageContainer = document.querySelector(".product-images");
//         imageContainer.innerHTML = "";
      
//         images.forEach((imageUrl) => {
//           const imageElement = document.createElement("img");
//           imageElement.src = imageUrl;
//           imageContainer.appendChild(imageElement);
//         });
//       }
      
//       function showProduct(product) {
//         document.querySelector(".product-title").textContent = product.title;
//         document.querySelector(".product-description").textContent =
//           product.description;
//         document.querySelector(".product-price").textContent = product.price;
//         document.querySelector(".product-brand").textContent = product.brand;
//         document.querySelector(".product-category").textContent = product.category;
//         document.querySelector(".product-rating").textContent = product.rating;
//         document.querySelector(".product-stock").textContent = product.stock;
      
//         showProductImages(product.images);
//       }
      
// let productContainer = document.getElementById('product-container')
// products.forEach(function(product) {
//     if (product.id == id) {
//         console.log(product)
//         productContainer.innerHTML = `

// <div class="card-body">
//   <h5 class="card-title">${product.title}</h5>
//   <p class="card-text">${product.description}</p>
//   <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
// </div>
// `
//     }
// });