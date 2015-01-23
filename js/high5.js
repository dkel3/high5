// high5.js

$( function() {
   $('.menu-button').click( function(event) {
       $('.nav').toggleClass("hidden");
       /*
       if ($('.nav').css("display") === "none") {
           $('.nav').css("display", "block");
       } else {
           $('.nav').css("display", "none");
       }
       */
   });
});
