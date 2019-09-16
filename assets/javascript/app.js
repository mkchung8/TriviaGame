$(document).ready(function(){

    startScreen();

function startScreen() {
    
    var startButton = $('<button type="button" class="btn btn-secondary">Start</button>');
    $("#main-content").html("<h2>Are you a Music Theory Master? <br> Press start to find out!</h2>")
    $("#main-content").append('<img src="assets/images/startimage.gif" alt="image">')
    $("#main-content").append(startButton)
};



});