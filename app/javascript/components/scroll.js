$(document).ready(function(){
  // Add smooth scrolling to all links where href attribute starts with #
  $("a[href^='#']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    // this is the link .hash is the id value
    // window.location.pathname '/' is checking the url for home (homepage)
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 3000, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
