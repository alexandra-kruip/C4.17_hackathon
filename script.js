$(document).ready(function() {
   createBoard();

});

function createBoard () {
    for( var y = 0; y <= 5 ; y++){
        for(var x = 0; x<=6; x++){
            var div = $('<div>').text(x + " , " + y).attr("x", x).attr("y", y);
            $('body').append(div);
        }
    }
}

function colClicked () {

    // if div with attr x is clicked, loop through all other divs with a class of x
    // check if each div has class of empty(null) or taken
    // if taken, go back one div and add taken class
    // if not taken continue until y = 5
    // take last available spot (y = 5)
}