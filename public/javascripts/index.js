
function getAllProductFromServer() {
    $.ajax({
        url: "/products/",
    })
    .done(function (productData) {
        // Codes here will fire when the API call is finished
        handleProductsData(productData);
    });
}

function handleProductsData(productData) {
    console.log('now we have data!!!', productData);
    // Your codes go here
}


$(function() {
    // Codes here will fire when DOM is ready
});

$(window).load(function() {
    // Codes here will fire when the entire page (including images) are done loading
})