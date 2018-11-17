// Form logic goes here

// to submit forms, need to do ajax call to the server
$.ajax({
    url: "/products/add",
    context: document.body
  }).done(function() {
    $( this ).addClass( "done" );
  });