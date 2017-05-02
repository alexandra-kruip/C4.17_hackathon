$(document).ready(function() {
   for(var x = 0; x<=5; x++){
       for( var y = 0; y <= 6 ; y++) {
           var div = $('<div>').text(x + " , " + y);
           $('body').append(div);

       }
   }

});