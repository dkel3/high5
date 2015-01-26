// applause.js

function save() {
    var nameValue = document.getElementById('txtName').value;
    var AllstateIDValue = document.getElementById('txtAllstateID').value;
    var reasonValue = document.getElementById('txtReason').value;
    var pointsValue = document.getElementById('txtPoint').value;
    localStorage.setItem('Name', nameValue);
    localStorage.setItem('AllstateID', AllstateIDValue);
    localStorage.setItem('Point', pointsValue);
    localStorage.setItem('Reason', reasonValue);
    retrieve();
}

var strName;
var strAllstateID;
var strPoints;
var strReason;

function retrieve() {
     strName = localStorage.getItem('Name');
     strAllstateID = localStorage.getItem('AllstateID');
     strPoints = localStorage.getItem('Point');
     strReason = localStorage.getItem('Reason');
     window.alert("\t Standing Applause Award Summary \n\n"
     + "\t Employee Name: "
     + '\t ' + strName + ' \n'
     + "\t Employee ID: "
     + '\t ' + strAllstateID + '\n'
     + "\t Points Awarded: "
     + '\t ' + strPoints + '\n'
     + "\t Reason: "
     + '\t ' + strReason + '\n');
}

$( function () {
   $("form").submit( function(event) {
      save(); 
   });
});
