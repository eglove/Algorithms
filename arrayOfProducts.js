// O(n^2) Time - O(n) Space
function arrayOfProducts(array) {
    let products = [];

    for (let i = 0; i < array.length; i++) {
        let product = 1;
        for (j = 0; j < array.length; j++) {
            if (i !== j) {
                product *= array[j];
            }
        }
        products.push(product);
    }

    return products;
}

// O(n) Time - O(n) Space
function arrayOfProducts2(array) {
    const products = new Array(array.length).fill(1);

    let leftProduct = 1;
    for (let i = 0; i < array.length; i++) {
        products[i] = leftProduct;
        leftProduct *= array[i];
    }

    let rightProduct = 1;
    for (let i = array.length - 1; i >= 0; i--) {
        products[i] *= rightProduct;
        rightProduct *= array[i];
    }

    return products;
}

let array = [5, 1, 4, 2];
console.log(arrayOfProducts(array));
console.log(arrayOfProducts2(array));

array = [0, 0, 0, 0];
console.log(arrayOfProducts2(array));

array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arrayOfProducts2(array));

array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
console.log(arrayOfProducts2(array));