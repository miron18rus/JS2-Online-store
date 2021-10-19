class ProductList{
    constructor(container = '.main__products') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();
        this.render();
        this.getSumProducts();
    }
    _fetchProducts() {
        this.goods = [
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
            {id: 15, title: 'Notebook', price: 2000, img: 'image/notebook.jpg'}
        ];
    }

    render() {
        const block = document.querySelector(this.container);
        for(let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML('beforeend',item.render());
        }
    }

    getSumProducts() {
        let priceSum = 0;
        for(let product of this.goods) {
            priceSum += product.price;
        }
        console.log(`Сумма всех продуктов ровна ${priceSum}`);
    }
}

class ProductItem {
    constructor(product) {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = product.img;
    }

    render(){
        return `<div class="product-item">
            <img src=${this.img} width="220px" height="160px">
            <h3 class="product-title">${this.title}</h3>
            <p class="product-price">${this.price}</p>
            <button class="product-buy-btn">Купить</button>
        </div>`
    }
}

let list = new ProductList();