var array = [
    ['','','','','','',''],     //nested arrays with cells for our columns
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','','']

]; // array = outer array of columns


$(document).ready(function() {
    createBoard();
    $('.col').click(colClicked);
});


function createBoard () {    //dynamically creates our game board
    for(var x = 0; x <= 6 ; x++){
        var outerDiv = $('<div>').addClass('col' + x).addClass('col').attr('keyValue', x);
        for(var y = 0; y<=5; y++){
            var innerDiv = $('<div>').addClass("innerDiv");
            outerDiv.append(innerDiv);
        }
        $('#gameArea').append(outerDiv);
    }
}
// function selectingCol(){
// }
function colClicked () {
    var clickedCol = $(this).attr("keyValue");


    for (var i = 0; i < array[clickedCol].length; i++){  // loops through array to see where to place coin
        if(array[clickedCol][i] === ''){
            array[clickedCol][i] = "1";
            return;
        }
        console.log(array[clickedCol]);

    }

    // $('this:nth-child(0)').addClass('player1');





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
// }
