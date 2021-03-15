import { http } from './http'

//Get Products on DOM Load
document.addEventListener('DOMContentLoaded', getProducts);

function getProducts() {
    const http = new customHTTPMethods();
    http.get('http://localhost:3000/product').then(data => console.log(data));
}

class customHTTPMethods {
    async get(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

        async post(url, jsonData) {
            const respons = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type' : 'application/json'
                },
                body : 
            })
        }
}