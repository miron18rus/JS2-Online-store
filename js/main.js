const products = [
    {id: 1, title: 'Notebook', price: 2000, img: 'image/notebook.jpg'},
    {id: 2, title: 'Mouse', price: 20, img: 'image/mouse.jpg'},
    {id: 3, title: 'Keyboard', price: 200, img: 'image/keyboard.jpg'},
    {id: 4, title: 'Gamepad', price: 50, img: 'image/gamepad.jpg'},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (title, price, img) => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <p>${price}</p>
                <img src=${img}>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title,item.price, item.img));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList;
};

renderPage(products);