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
    $('.col').click(colClicked);
    $("#reset").click(resetClicked);
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
        for (var i = 0; i < clickedArr[clicked].length; i++) {  // loops through array to see where to place coin
            if (clickedArr[clicked][i] === '') {
                if (cp === 0) {
                    clickedArr[clicked][i] = "1";
                    $(cell[i]).addClass("player1");
                    console.log(cell);
                    currentPlayer++;
                    $('.p1').removeClass("active");
                    return;
                } else if (cp === 1) {
                    clickedArr[clicked][i] = "2";
                    $(cell[i]).addClass("player2");
                    $('.p2').addClass("active");
                    currentPlayer++;
                    $('.p2').removeClass("active");
                    return;
                } else if (cp === 2) {
                    clickedArr[clicked][i] = "3";
                    $(cell[i]).addClass("player3");
                    $('.p3').addClass("active");
                    currentPlayer = 0;
                    $('.p3').removeClass("active");
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



// if(this.player1 === false){
//     spongebob_win();
//     $('.youare_p').hide();
//     $('.youare_s').show();
//     $('.slot').hide();
//     $('.slot_container').append("<div class='you_won'><img class='spongebob_won' src='img/spongebob_wins.gif'></div>");
//     this.player1_score++;
//     this.display_stats();
//     this.winner_found = true;
// }else{
//     patrick_win();
//     $('.youare_p').show();
//     $('.youare_s').hide();
//     $('.slot').hide();
//     $('.slot_container').append("<div class='you_won'><img class='patrick_won' src='img/patrick_wins.gif'></div>");
//     this.player2_score++;
//     this.display_stats();
//     this.winner_found = true;
// }
// };