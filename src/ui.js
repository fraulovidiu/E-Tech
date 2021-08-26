import { addProductsInLocalStorage, updateQuantityInLocalStorage, getElementFromLocalStorage, removeElementFromLocalStorage } from './localStorage.js';
class  UI {
    constructor() {
        this.productsDiv = document.getElementById('products');
        this.title = document.getElementById('title');
        this.price = document.getElementById('price');
        this.description = document.getElementById('description');
        this.detailsDiv = document.getElementById('product-details');
        this.adminDiv = document.getElementById('admin-control');
        this.id = document.getElementById('id');
        this.tableBody = document.getElementById('table-body');
        this.cartDiv = document.getElementById('cart-div');
        this.cartBody = document.getElementById('cart-body');
        this.quantity = document.getElementById('quantity');
        this.total = document.getElementById('total');
        this.subtotal = document.getElementById('subtotal');
        this.adddedToCart = document.getElementById('addProductToCart')
    }

    showProducts(products) {
        let output = '';
        products.forEach((product) => {
            output += `
            
            <div class="card m-3" style="width: 20rem;">
            <div class="container">
            <img src="${product.image}" class="card-img-top" alt"...">
            <div class="overlay">
            <h4 class="card-title"><span id="title">${product.title}</span><br><BR><span id="price"> ${product.price} $ </span></h4>
            <button onclick="window.location.href='details.html?id=${product.id}'" type="button" class="details"><i class="far fa-eye"></i>See more</button>
            </div>
            </div>
            </div>
            `;
            this.productsDiv.innerHTML = output;
        });
    }

    showDetails(product) {
        let output = '';

            output = `
            <div class="details-card">
                <div class="row">
                    <div class="col-md-5">
                        <img src="${product.image}" class="card-img1">
                    </div>
                    <div class="col-md-7">
                        <h4 class="prod-title">${product.title}</h4>
                        <h6 class="card-description">${product.description}</h6>
                        <h5 class="card-price1 d-flex justify-content-center">Price:${product.price}$</h5>
                        <input id="quantity" type="number" min="1" max="10">
                        <button onclick="addCart()" id="addProductToCart" type="button" class="btn btn-success rounded">Add to Cart</button>
                        <div><img src="./images/paypal.png" class="secureCheck"></div>
                        <div class="delivery">
                            <a href="https://www.dhl.com"><img src="./images/dhl.jpg" class="dhl"></a>
                            <a href="https://www.fedex.com"><img src="./images/fedex.jpg" class="fedex"></a>
                            <a href="https://www.ups.com"><img src="./images/ups.jpg" class="ups"></a>
                        <div>
                    </div>
                </d>
                </div
            `;
            this.detailsDiv.innerHTML = output;
            let addProductToCart = document.getElementById('addProductToCart');
            
                        addProductToCart.addEventListener('click',() => {
                            let count = parseInt(quantity.value);
                            if (isNaN(count)) {
                                count = 1;
                            }
                            addProductsInLocalStorage(product, count);
                        });            
            }

            showProductsAdmin(products) {
                let output = '';
                products.forEach((product) => {
                    output = `
                    <table id="table-admin" class="table">
                    <tbody> 
                    <tr scope="row">
                        <td><img src="${product.image}" class="admin-card-img"</td>
                        <td>${product.title}</td>
                        <td>${product.price}$</td>
                        <td>10</td>
                        <td><button id=${product.id} type="button" class="card-button delete">x</button></td>
                    </tr>
                </tbody>   
                </table> 
                `;
                this.tableBody.innerHTML += output;
                });
            }
        
            showProductsCart(storageItems) {
                let output = '';
                storageItems.forEach((item) => {
                    output = `
                    <table id="cart-table table">
                        <tbody> 
                            <tr class="cartRows" scope="row">
                        <td><img src="${item.product.image}" class="admin-card-img"</td>
                        <td><button onclick="window.location.href='details.html?id=${item.product.id}'" class="btn btn-dark">${item.product.title}</button></td>  
                        <td>${item.product.price}$</td>
                        <td><input value=${item.count} class="quantity" type="number" min="1" max="10"/></td>
                        <td id="subtotal">${item.product.price*item.count}$</td>
                        <td><button id=${item.product.id} type="button" class="btn btn-danger card-button delete">Remove</button></td>
                </tr>
                </tbody>    
                </table> 
                    `;
                this.cartBody.innerHTML += output;
                });

                let inputFields = document.querySelectorAll("input");
                inputFields.forEach( (inputElement) => {
                    let row = inputElement.parentElement.parentElement;
                    let removeButton = row.lastElementChild.firstElementChild;
                    let productId = removeButton.id;
                    inputElement.addEventListener('change', (e) => {
                        let count = parseInt(e.target.value);
                        if(!isNaN(count) && count > 0) {
                            updateQuantityInLocalStorage(productId, count);
                            return window.location.reload();
                        } else {
                            let storageElement = getElementFromLocalStorage(productId);
                            e.target.value = storageElement.count;
                        }
                    });  
                    
                    removeButton.addEventListener('click', (e) => {
                        removeElementFromLocalStorage(e.target.id);
                        row.remove();
                            return window.location.reload();
                        });
                    });  
                }
            }
    export const ui = new UI();