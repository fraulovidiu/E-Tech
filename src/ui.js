
class  UI {
    constructor() {
        this.productsDiv = document.getElementById('products');
        this.title = document.getElementById('title');
        this.price = document.getElementById('price');
        this.description = document.getElementById('description');
        this.memory = document.getElementById('memory')
        this.detailsDiv = document.getElementById('product-details');
        this.adminDiv = document.getElementById('admin-control');
        this.id = document.getElementById('id');
        this.tableBody = document.getElementById('table-body');
        this.cartDiv = document.getElementById('cart-div');
        this.cartBody = document.getElementById('cart-body');
    }

    showProducts(products) {
        let output = '';
        products.forEach((product) => {
            output += `

            <div class="card m-3" style="width: 18rem;">
            <div class="card-body">
            <img src="${product.image}" class="card-img-top" alt"...">
            <h4 class="card-title"><span id="title">${product.title}</span><span id="price"> ${product.price} EUR </span></h4>
            <button onclick="window.location.href='details.html?id=${product.id}'" type="button" class="btn btn-dark">Details</button>
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
                        <h4 class="d-flex justify-content-center">${product.title}</h4>
                        <h6 class="card-description">${product.description}</h6>
                        <h5 class="card-price1 d-flex justify-content-center">Price:${product.price}$</h5>
                        <input class="quantity" type="number" min="1" max="10">
                        <button  id="addProductToCart" type="button" class="btn btn-success rounded">Add to Cart</button>
                    </div>
                
                
                </div>
                </div
            `;
            this.detailsDiv.innerHTML = output;
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
                        <td><button id=${product.id} type="button" class="card-button delete"><i class="far fa-trash-alt"></i></button></td>
                    </tr>
                </tbody>   
                </table> 
                `;
                this.tableBody.innerHTML += output;
                });
            }
        
            showProductsCart() {
                let output = '';
                products.forEach((product) => {
                    output = `
                    <table id="cart-table">
                    <tbody> 
                    <tr class="cartRows">
                        <td><img src="${product.image}" class="admin-card-img"</td>
                        <td>${product.title}</td>
                        <td>${product.price}</td>
                        <td><input class="quantity" type="number" min="1" max="10"</td>
                        <td><button id=${product.id} type="button" class="card-button delete">Remove product</button></td>
                </tr>
                </tbody>   
                </table> 
                    `;
                this.cartBody.innerHTML += output;
                });
            
            }
        
        }
    export const ui = new UI();