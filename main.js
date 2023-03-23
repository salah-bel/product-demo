const cardList = document.getElementById('card-list');
// import {products} from './db.js';
import {card} from './partials/card.js';



fetch('https://dummyjson.com/products') // Promise
.then(res => {return res.json()}) // et ensuite
.then(data => {
    console.log(data.products)
    data.products.forEach(product=> cardList.innerHTML += card(product));
}) 






