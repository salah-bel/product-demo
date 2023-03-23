import {products} from './db.js'
 const product = document.getElementById('product')
 const carouselInner = document.getElementById('carousel-inner')

let url = document.location.search;
let params = new URLSearchParams(url);
let id = params.get('id');


let p = products.find(p => p.id == id);

// affichage pruduct
    product.innerHTML = `        
            <img class="w-25" src="${p.thumbnail}" alt="">
            <div id="product-info " class="w-50">
                <h2 class="card-title mb-3">${p.title}</h2>
                <h4>Prix : <strong>${p.price} &euro;</strong></h4>
                <span class="badge text-bg-succes">Stock:44</span>
                <p class="card-text">${p.description}</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
    
    `

    // carousel images
    p.images.forEach((url, i ) => {
        
        carouselInner.innerHTML += `
        <div class="carousel-item ${(i == 0?"active":"")}">
             <img src="${url}" class="d-block w-100" alt="...">
        </div>
        
        `

    })
    
    
      





