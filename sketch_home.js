document.addEventListener('DOMContentLoaded', function() {
  // When the event DOMContentLoaded occurs, it is safe to access the DOM

  // When the user scrolls the page, execute myFunction
  window.addEventListener('scroll', myFunctionForSticky);

  // Get the navbar
  var navbar = document.getElementById("header_id");

  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;

  // Add the sticky class to the navbar when you reach its scroll position.
  // Remove "sticky" when you leave the scroll position

  function myFunctionForSticky() {
    if (window.pageYOffset >= sticky) {
      console.log("window.pageYOffset >= sticky");
    } else {
      console.log("Not window.pageYOffset >= sticky");
    }
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }
})

// $(document).ready(function () {
//    //Convert address tags to google map links
//    console.log("we");
//    $('address').each(function () {
//       var link = "<a href='http://maps.google.com/maps?q=" + encodeURIComponent( $(this).text() ) + "' target='_blank'>" + $(this).text() + "</a>";
//       $(this).html(link);
//    });
// });




















// new ElderCarousel('.carousel', {
//   items: 6
// });

// When the user scrolls the page, execute myFunction
// document.addEventListener('DOMContentLoaded', function() {
//   // When the event DOMContentLoaded occurs, it is safe to access the DOM
//
//   // When the user scrolls the page, execute myFunction
//   window.addEventListener('scroll', stickyFunction);
//
// // Get the header
// var header = document.getElementById("header_id");
//
// // Get the offset position of the navbar
// var sticky = header.offsetTop;
//
// // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function stickyFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }

// teaser = document.getElementById("teaser");
// teaser.loop();
