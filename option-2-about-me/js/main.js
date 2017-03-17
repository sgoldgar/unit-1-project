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

/*Scroll to Sections*/
  /*Scroll to top of page when click logo*/
  $('.my-logo').on('click', function(){
    $('html,body').scrollTop(0);
    console.log('top');
  });
  /*Scroll to about when click on nav link*/
$('nav ul li:first-child').first().on('click', function(){
  $('html, body').animate({
    scrollTop: $(".about").offset().top -150
}, 1000);
  console.log('about');
});
  /*Scroll to about when click on carousel link*/
$('.carousel-inner .item h3 a').on('click', function(){
  $('html, body').animate({
    scrollTop: $(".about").offset().top -150
}, 1000);
  console.log('about');
});
  /*Scroll to projects when click on carousel link*/
$('.carousel-inner .item h3 a').eq(2).on('click', function(){
  $('html, body').animate({
    scrollTop: $(".projects").offset().top -150
}, 1000);
  console.log('projects');
});
    /*Scroll to projects when click on nav link*/
$('nav ul li').eq(2).first().on('click', function(){
  $('html, body').animate({
    scrollTop: $(".projects").offset().top -150
}, 1000);
  console.log('projects');
});
    /*Scroll to contact when click on nav link*/
$('nav ul li').eq(3).first().on('click', function(){
  $('html, body').animate({
    scrollTop: $(".contact").offset().top -150
}, 1000);
  console.log('contact');
});

})
