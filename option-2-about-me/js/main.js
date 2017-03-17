$(document).ready(function(){

/*Carousel*/
// Activate Carousel
$("#myCarousel").carousel();

// Enable Carousel Indicators
$(".item").click(function(){
    $("#myCarousel").carousel(1);
});

// Enable Carousel Controls
$(".left").click(function(){
    $("#myCarousel").carousel("prev");
});
$(".right").click(function(){
    $("#myCarousel").carousel("next");
});

/*Add Name on Logo Hover*/
$('.my-logo').hover(
  function() {
    $( this ).append( $('<div class="name"> Hello!</div>') );
  }, function() {
    $( this ).find(".name").remove();
  }
);

})
