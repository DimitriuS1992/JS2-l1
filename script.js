'use strict';

const products = [
    { id: 1, title: 'Товар №1', price: 150 },
    { id: 2, title: 'Товар №2', price: 80 },
    { id: 3, title: 'Товар №3', price: 100 },
    { id: 4, title: 'Товар №4', price: 200 },
    { id: 5, title: 'Товар №5', price: 150 },
    { id: 6, title: 'Товар №6', price: 200 },
    { id: 7, title: 'Товар №7', price: 100 },
    { id: 8, title: 'Товар №8', price: 150 },
    { id: 9, title: 'Товар №9', price: 250 },
    { id: 10, title:'Товар №10', price: 200 },
];

const renderProduct = (item, img ='https://via.placeholder.com/200x150/258DC8/E0F6FD') =>
             `<div class="product-item">
                <img src="${img}" alt="image" class="product-img">
                <h3 class="product-title">${item.title}</h3>
                <p class="product-price">${item.price} руб</p>
                <button class="by-btn">В корзину</button>
            </div>`;

const renderProducts = list => {
    document.querySelector('.mainContainer').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item, item.img)).join(''));
};

renderProducts(products);