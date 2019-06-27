import {product} from "./Product.js"
import {productData} from "./ProductData.js"

const productList = () =>
{
    productData.forEach(item =>
    {
        document.querySelector("#container").innerHTML += product(item)
    })
}

export {productList}