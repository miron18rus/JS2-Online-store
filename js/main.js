const products = [
    {id: 1, title: 'Notebook', price: 2000, img: 'image/notebook.jpg'},
    {id: 2, title: 'Mouse', price: 20, img: 'image/mouse.jpg'},
    {id: 3, title: 'Keyboard', price: 200, img: 'image/keyboard.jpg'},
    {id: 4, title: 'Gamepad', price: 50, img: 'image/gamepad.jpg'},
    {id: 5, title: 'Notebook', price: 2000, img: 'image/notebook.jpg'},
    {id: 6, title: 'Mouse', price: 20, img: 'image/mouse.jpg'},
    {id: 7, title: 'Keyboard', price: 200, img: 'image/keyboard.jpg'},
    {id: 8, title: 'Notebook', price: 2000, img: 'image/notebook.jpg'},
    {id: 9, title: 'Keyboard', price: 200, img: 'image/keyboard.jpg'},
    {id: 10, title: 'Gamepad', price: 50, img: 'image/gamepad.jpg'},
    {id: 11, title: 'Keyboard', price: 200, img: 'image/keyboard.jpg'},
    {id: 12, title: 'Notebook', price: 2000, img: 'image/notebook.jpg'},
    {id: 13, title: 'Gamepad', price: 50, img: 'image/gamepad.jpg'},
    {id: 14, title: 'Keyboard', price: 200, img: 'image/keyboard.jpg'},
    {id: 15, title: 'Notebook', price: 2000, img: 'image/notebook.jpg'},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (obj) => {
    console.log(obj)
    return `<div class="product-item">
                <img src=${obj.img} width="220px" height="160px">
                <h3 class="product-title">${obj.title}</h3>
                <p class="product-price">${obj.price}</p>
                <button class="product-buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    console.log(productsList);
    document.querySelector('.main__products').innerHTML = productsList.join('');
};
renderPage(products);