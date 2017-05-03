var clickedArr = [
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
    $('.col').mouseover(colHover);
    $('.col').click(colClicked);
    $("#reset").click(resetClicked)
    $(".p1 img").addClass("active1");
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

function colHover(){
    $(".col").mouseover(function(){
        $(this).css("background-color", "yellow");

    });
    $(".col").mouseout(function(){
        $(this).css("background-color", "");
    })
}

function colClicked () {
    var clicked = $(this).attr("keyValue");
    var cell = $(this).children("div.innerDiv");

    for (var cp = currentPlayer; cp < 3;) {
        for (var i = 0; i < clickedArr[clicked].length; i++) {  // loops through array to see where to place coin
            if (clickedArr[clicked][i] === '') {
                if (cp === 0) {
                    clickedArr[clicked][i] = "1";
                    $(cell[i]).addClass("player1");
                    currentPlayer++;
                    $(".p2 img").addClass("active2");
                    $(".p1 img").removeClass("active1");

                    return;
                } else if (cp === 1) {
                    clickedArr[clicked][i] = "2";
                    $(cell[i]).addClass("player2");
                    currentPlayer++;
                    $(".p3 img").addClass("active3");
                    $(".p2 img").removeClass("active2");
                    return;
                } else if (cp === 2) {
                    clickedArr[clicked][i] = "3";
                    $(cell[i]).addClass("player3");
                    currentPlayer = 0;
                    $(".p1 img").addClass("active1");
                    $(".p3 img").removeClass("active3");
                    return;
                }
                console.log(clickedArr[clicked]);
            }
        }
        // each time colClicked runs, increment player variable to switch players
    }
}
function resetClicked(){
    currentPlayer = 0;
    $(".col").children().removeClass("player1");
    $(".col").children().removeClass("player2");
    $(".col").children().removeClass("player3");
    clickedArr = [
        ['','','','','','',''],     //nested arrays with cells for our columns
        ['','','','','','',''],
        ['','','','','','',''],
        ['','','','','','',''],
        ['','','','','','',''],
        ['','','','','','',''],
        ['','','','','','','']


    ];
    console.log("reset running");
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

