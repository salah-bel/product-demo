const cardList = document.getElementById('card-list');
import {products} from './db.js';
import {card} from './partials/card.js';



products.forEach(product=> cardList.innerHTML += card(product));




