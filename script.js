var xArray = []; // x = big array
var yArray = []; // y = small array


$(document).ready(function() {
    createBoard();
    $('div').click(colClicked);
});



for(var x = 0; x <= 6; x++){
    xArray[x] = yArray;
}
for(var y = 0; y <= 5; y++) {
    yArray.push(0);
}
console.log(xArray);

function createBoard () {
    for(var x = 0; x <= 5 ; x++){
        for(var y = 0; y<=6; y++){
            var div = $('<div>').text(x + " , " + y).addClass('col' + y);
            $('body').append(div);
            selectingCol();
        }
    }
}
function selectingCol(){


}

function colClicked () {
    console.log("colClicked is running");
    var xClicked = $(this).attr("class");

    var checkCol = $("[class = xClicked]").;

    //var start = $(this).attr("x", parseInt(xClicked)).attr("y", 0);
    console.log(checkCol);

}

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
    // $(openSpot).addClass('takenPlayer3');
// }


