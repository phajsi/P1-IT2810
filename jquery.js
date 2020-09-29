// taken from the 6th answer on this
//stack overflow question
//https://stackoverflow.com/questions/15603390/toggle-between-2-functions

var toggle = function (a, b) {
    var togg = false;
    return function () {
        // passes return value back to caller
        return (togg = !togg) ? a() : b();
    };
};

//animates the canvas drawing
$('#animate').click(toggle (function (){
  myAnimation();
  $('#animate').html("reset") ;
}, function (){
  location.reload()
}));

//animates the svg drawing
$("#fall").click(toggle (function (){
  animateStones();
  $('#fall').html("reset");
  $("#lightning").fadeTo("fast", 1);
}, function (){
  location.reload()
}));


//animates the documentation text
$("#dokumentasjon").click(toggle (function (){
  $("#dokumentasjon-innhold").css("display","none");
  $("#dokumentasjon").text("show documentation");
}, function (){
  $("#dokumentasjon-innhold").css("display","block");
  $("#dokumentasjon").text("hide documentation");
}))
