// O(n^2) Time - O(n) Space
function arrayOfProducts(array) {
    let products = [];

    for(let i = 0; i < array.length; i++) {
        let product = 1;
        for (j = 0; j < array.length; j++) {
            if(i !== j) {
                product *= array[j];
            }
        }
        products.push(product);
    }

    return products;
}

// O(n) Time - O(n) Space
function arrayOfProducts2(array) {
    let products = [];

    let totalProduct = 1;
    array.forEach(num => {
        totalProduct *= num;
    })

    array.forEach(num => {
        products.push(totalProduct / num);
    })

    return products;
}

let array = [5, 1, 4, 2];
console.log(arrayOfProducts(array));
console.log(arrayOfProducts2(array));
