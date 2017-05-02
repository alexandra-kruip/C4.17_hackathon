$(document).ready(function() {
   for( var y = 0; y <= 5 ; y++){
        for(var x = 0; x<=6; x++){
           var div = $('<div>').text(x + " , " + y);
           $('body').append(div);

       }
   }

});