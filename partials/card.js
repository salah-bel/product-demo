export const card = function(product) {
    return `
    <div class="card" style="width: 18rem;">
        <img src="${product.thumbnail}" class="card-img-top" height="150">
        <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text ">*${product.description.substring(0,50)}
            <a href="show-one-product.html?id=${product.id}" class="">...</a>
            </p>
            <span>Prix : ${product.price} 	&euro;</span>
            <a href="show-one-product.html?id=${product.id}" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    `
}


