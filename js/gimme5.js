// gimme5.js

$( function() {
    $('#step1_next').click( function(event) {
       var name = $("#name").val();
       localStorage.setItem("gimme5_name", name);
    });
    
    $('#step2_next').click( function(event) {
       var reason = $("#reason").val();
       localStorage.setItem("gimme5_reason", reason);
    });
    
    var nameField = $('#gimme5_name');
    var reasonField = $('#gimme5_reason');
    if (nameField && reasonField) {
        var name = localStorage.getItem("gimme5_name");
        var reason = localStorage.getItem("gimme5_reason");
        nameField.text(name);
        reasonField.text(reason);
    }
});
