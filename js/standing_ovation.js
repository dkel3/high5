// standing_ovation.js

function save() {
    var nameValue = document.getElementById('usr').value;
    var levelValue = document.getElementById('level').value;
    localStorage.setItem('name', nameValue);
    localStorage.setItem('level', levelValue);
    retrieve();
}

var str_name;
var str_level;

function retrieve() {
     str_name = localStorage.getItem('name');
     str_level = localStorage.getItem('level');
     window.alert("\t Standing Applause Award Summary \n\n"
     + "\t Employee Name: "
     + '\t ' + str_name + ' \n'
     + "\t Award Level: "
     + '\t ' + str_level + '\n');
}

$( function () {
   $("form").submit( function(event) {
      save(); 
   });
});
