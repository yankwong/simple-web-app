
function storeFormData(formDataObj) {
    $.ajax({
        url: "/products/add",
        method: 'POST',
        data: formDataObj
    })
    .done(function (response) {
        // Codes here will fire when the API call is finished
    });
}

function getFormData() {
    // Codes to get all data from form
}

$(function() {
    // Codes here will fire when DOM is ready
});

$(window).load(function() {
    // Codes here will fire when the entire page (including images) are done loading
})