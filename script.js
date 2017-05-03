var array = [
    ['','','','','','',''],     //nested arrays with cells for our columns
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','','']

]; // array = outer array of columns
var currentPlayer = 0;

$(document).ready(function() {
    createBoard();
    $('.col').click(colClicked);
});


function createBoard () {    //dynamically creates our game board
    for(var x = 0; x <= 6 ; x++){
        var outerDiv = $('<div>').addClass('col' + x).addClass('col').attr('keyValue', x);
        for(var y = 0; y<=5; y++){
            var innerDiv = $('<div>').addClass("innerDiv").attr('cell', y);
            outerDiv.append(innerDiv);
        }
        $('#gameArea').append(outerDiv);
    }
}

function colClicked () {
    var clicked = $(this).attr("keyValue");
    var cell = $(this).children("div.innerDiv");

    for (var cp = currentPlayer; cp < 3;) {
        for (var i = 0; i < array[clicked].length; i++) {  // loops through array to see where to place coin
            if (array[clicked][i] === '') {
                if (cp === 0) {
                    array[clicked][i] = "1";
                    $(cell[i]).addClass("player1");
                    currentPlayer++;
                    return;
                } else if (cp === 1) {
                    array[clicked][i] = "2";
                    $(cell[i]).addClass("player2");
                    currentPlayer++;
                    return;
                } else if (cp === 2) {
                    array[clicked][i] = "3";
                    $(cell[i]).addClass("player3");
                    currentPlayer = 0;
                    return;
                }
                console.log(array[clicked]);
            }
        }
        // each time colClicked runs, increment player variable to switch players
    }
}


function randomize () {  // randomize columns when the three player colors line up
    var parent = $("#gameArea");
    var cells = parent.children();
    while (cells.length) {
        parent.append(cells.splice(Math.floor(Math.random() * cells.length), 1)[0]);
    }
}




// var checkCol = $("[class = xClicked]");
// var start = $(this).attr('x', parseInt(xClicked)).attr('y', 0);
// console.log(xClicked);
// var xClicked = null;
// console.log(xClicked);
// var openSpot =
// div with attr x is clicked, loop through all other divs with a class of x
// check if each div has class of empty(null) or taken
// if taken, go back one div and add taken class
// if not taken continue until y = 5
// take last available spot (y = 5)    // if div with attr x is clicked, loop through all other divs with a class of x
// check if each div has class of empty(null) or taken
// if taken, go back one div and add taken class
// if not taken continue until y = 5
// take last available spot (y = 5)
//
// $(openSpot).addClass(‘takenPlayer3’);

