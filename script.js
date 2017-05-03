
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
var winCount = 0;
var xValue = null;
var yValue = null;
$(document).ready(function() {
    createBoard();
    $('.col').mouseover(colHover);
    $('.col').click(colClicked);
    $("#reset").click(resetClicked);
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
             xValue = parseInt(clicked);
             yValue = i;
            if (clickedArr[clicked][i] === '') {
                if (cp === 0) {
                    clickedArr[clicked][i] = "1";
                    $(cell[i]).addClass("player1");
                    currentPlayer++;

                    winCondition();

                    $(".p2 img").addClass("active2");
                    $(".p1 img").removeClass("active1");

                    return;
                } else if (cp === 1) {
                    clickedArr[clicked][i] = "2";
                    $(cell[i]).addClass("player2");
                    currentPlayer++;

                    winCondition();

                    $(".p3 img").addClass("active3");
                    $(".p2 img").removeClass("active2");

                    return;
                } else if (cp === 2) {
                    clickedArr[clicked][i] = "3";
                    $(cell[i]).addClass("player3");
                    currentPlayer = 0;

                    winCondition();

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



//jinwoo Part
function MatchedFour(){
    $('#myModal').modal('show');
}

//Jinwoo's longlong win condition
function winCondition(){
    winCount = 0;
    for (var x = 0; x < clickedArr.length; x++){
        for(var y = 0; y <= clickedArr[x].length; y++){
            //for down on dom //side on array
            winCount = 1;
            if(clickedArr[xValue][yValue] == currentPlayer) {
                if (clickedArr[xValue][yValue-1] == clickedArr[xValue][yValue]) {
                    winCount++;
                    if (clickedArr[xValue][yValue -2] == clickedArr[xValue][yValue]) {
                        winCount++;
                        if (clickedArr[xValue][yValue -3] == clickedArr[xValue][yValue]) {
                            winCount++;

                        }
                    }
                }
            }
            if (winCount === 4){
                MatchedFour();
                $('#myModal').modal('show');
                console.log('On 1 you won! :' + 'x:' + x + " y:" + y );
            }
            //for side on dom// down on array
            winCount = 1;
            if(clickedArr[xValue][yValue] == currentPlayer) {
                if (clickedArr[xValue + 1] && clickedArr[xValue + 1][yValue] == clickedArr[xValue][yValue]) {
                    winCount++;
                    if (clickedArr[xValue +2] && clickedArr[xValue + 2][yValue] == clickedArr[xValue][yValue]) {
                        winCount++;
                        if (clickedArr[xValue + 3] && clickedArr[xValue + 3][yValue] == clickedArr[xValue][yValue]) {
                            winCount++;

                        }
                    }
                }
            }
            if(clickedArr[xValue][yValue] == currentPlayer) {
                if (clickedArr[xValue - 1] && clickedArr[xValue - 1][yValue] == clickedArr[xValue][yValue]) {
                    winCount++;
                    if (clickedArr[xValue - 2] && clickedArr[xValue - 2][yValue] == clickedArr[xValue][yValue]) {
                        winCount++;
                        if (clickedArr[xValue - 3] && clickedArr[xValue - 3][yValue] == clickedArr[xValue][yValue]) {
                            winCount++;

                        }
                    }
                }
            }
            if (winCount === 4){
                MatchedFour();
                $('#myModal').modal('show');
                console.log('on 2 you won! :'+ 'x:' + x + " y:" + y );
            }
            // for rightUp(leftDown) on dom // downRight(upLeft) on array
            winCount = 1;
            if(clickedArr[xValue][yValue] == currentPlayer) {
                if (clickedArr[xValue + 1] && clickedArr[xValue + 1][yValue + 1] == clickedArr[xValue][yValue]) {
                    winCount++;
                    if (clickedArr[xValue + 2] && clickedArr[xValue + 2][yValue + 2] == clickedArr[xValue][yValue]) {
                        winCount++;
                        if (clickedArr[xValue + 3] && clickedArr[xValue + 3][yValue + 3] == clickedArr[xValue][yValue]) {
                            winCount++;
                        }
                    }
                }
            }
            if(clickedArr[xValue][yValue] == currentPlayer) {
                if (clickedArr[xValue - 1] && clickedArr[xValue - 1][yValue - 1] == clickedArr[xValue][yValue]) {
                    winCount++;
                    if (clickedArr[xValue - 2] && clickedArr[xValue - 2][y - 2] == clickedArr[xValue][yValue]) {
                        winCount++;
                        if (clickedArr[xValue - 3] && clickedArr[xValue - 3][yValue - 3] == clickedArr[xValue][yValue]) {
                            winCount++;

                        }
                    }
                }
            }
            if (winCount === 4){
                MatchedFour();
                $('#myModal').modal('show');
                console.log('on 3 you won! :' + 'x:' + x + " y:" + y);
            }
            //for rightDown(leftUP) on dom // downLeft(upRight) on array
            winCount = 1;
            if(clickedArr[xValue][yValue] == currentPlayer) {
                if (clickedArr[xValue + 1] && clickedArr[xValue + 1][yValue - 1] == clickedArr[xValue][yValue]) {
                    winCount++;
                    if (clickedArr[xValue + 2] && clickedArr[xValue + 2][yValue - 2] == clickedArr[xValue][yValue]) {
                        winCount++;
                        if (clickedArr[xValue + 3] && clickedArr[xValue + 3][yValue - 3] == clickedArr[xValue][yValue]) {
                            winCount++;
                        }
                    }
                }
            }
            if(clickedArr[xValue][yValue] == currentPlayer) {
                if (clickedArr[xValue - 1] && clickedArr[xValue - 1][yValue + 1] == clickedArr[xValue][yValue]) {
                    winCount++;
                    if (clickedArr[xValue - 2] && clickedArr[xValue - 2][yValue + 2] == clickedArr[xValue][yValue]) {
                        winCount++;
                        if (clickedArr[xValue - 3] && clickedArr[xValue - 3][yValue + 3] == clickedArr[xValue][yValue]) {
                            winCount++;
                        }
                    }
                }
            }
            if (winCount === 4){
                MatchedFour();
                $('#myModal').modal('show');
                console.log('on 4 you won! :' + 'x:' + x + " y:" + y);
            }
        }
    }
}
