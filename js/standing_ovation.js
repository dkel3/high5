// standing_ovation.js

function clickcall(){
    var user = $('#usr').val();
    var comment = $('#comment').val();
    var level = $('#level').val();
    var reason = $('#reason option:selected').val();

    if (typeof(Storage) != "undefined") {
        localStorage.setItem('name', user);
        localStorage.setItem('comment', comment);
        localStorage.setItem('level', level);
        localStorage.setItem('reason', reason);

        // Retrieve
        var strname = localStorage.getItem('name');
        var strlevel = localStorage.getItem('level');
        var strreason = localStorage.getItem('reason');
        var strcomment = localStorage.getItem('comment');
        alert("Resource " + strname+ " has been nominated for the standing ovation "+ strlevel+ " with comments as follows: "+ strcomment);
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}
