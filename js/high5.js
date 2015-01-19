// high5.js

$( function() {
   $('.menu-button').click( function(event) {
       if ($('.nav').css("display") === "none") {
           $('.nav').css("display", "block");
       } else {
            $('.nav').css("display", "none");   
       }
   });
});
