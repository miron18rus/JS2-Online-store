const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/';


class ProductsList{
    constructor(container = '.main__products') {
        this.container = container;
        this.goods = [];
        this._getProducts()
            .then(data => {
                this.goods = [...data];
                this.render()
            });
        this.render();
        this.getSumProducts();
    }
    _getProducts() {

        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
    }

    getSumProducts() {
        let priceSum = 0;
        for(let product of this.goods) {
            priceSum += product.price;
        }
        console.log(`Сумма всех продуктов ровна ${priceSum}`);
    }

    render() {
        const block = document.querySelector(this.container);
        for(let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML('beforeend',item.render());
        }
    }
}

class ProductItem {
    constructor(product, img='image/all.jpg') {
        this.title = product.product_name;
        this.id = product.id_product;
        this.price = product.price;
        this.img = img;
    }

    render(){
        return `<div class="product-item">
            <img src=${this.img} width="220px" height="160px">
            <h3 class="product-title">${this.title}</h3>
            <p class="product-price">${this.price}</p>
            <button class="product-buy-btn">В корзину</button>
        </div>`
    }
}

class Cart {
    constructor(container = '.cart'){
        this.container = container;
        this.goods = [];

        this._clickButton();
        this._getCartProducts()
            .then(data => {
                this.goods = [...data.contents];
                this.render()
            });
    }

    _getCartProducts() {
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const block = document.querySelector(this.container);
        for(let product of this.goods) {
            const obj = new ProductCartItem();

            block.insertAdjacentHTML('beforeend', obj.render(product));
        }
    }
    
    
    addCartGoods() {

    }

    removeCartGoods() {

    }

    changeCartGoods() {


    }
    _clickButton() {
        document.querySelector('.header__btn-cart').addEventListener('click',(e) => {
            document.querySelector('.cart').classList.toggle('hidden');
        })
    }

 }

   

 class ProductCartItem {

    render(product){
        return `<div class="cart__product">
            <h3 class="cart-title">${product.product_name}</h3>
            <p class="cart-price">${product.price}</p>
            <button class="cart-buy-btn">убрать</button>
        </div>`
    }
}

 class ItemCart{
    render() {

    }
 }

let cart = new Cart();
let list = new ProductsList();
