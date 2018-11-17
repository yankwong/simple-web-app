function productsArrayToJson(products) {
    let productJson = {};

    products.forEach((product, index) => {
        productJson[index] = {
            id: product.id,
            name: product.name,
            createdDate: product.createdDate
        }
    });
    return productJson;
}

module.exports = {
    productsArrayToJson
}