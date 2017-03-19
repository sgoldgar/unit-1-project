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
function scroll(target){
  $('html, body').animate({
    scrollTop: $(target).offset().top -150
}, 1000);
}
  /*Scroll to top of page when click logo*/
  $('.my-logo').on('click', function(){
    $('html,body').scrollTop(0);
    console.log('top');
  });
  /*Scroll to about when click on nav link*/
$('nav ul li:first-child').first().on('click', function(){
  var target = '.about';
  scroll(target);
  console.log('about');
});
  /*Scroll to about when click on carousel link*/
$('.carousel-inner .item h3 a').on('click', function(){
  var target = '.about';
  scroll(target);
  console.log('about');
});
  /*Scroll to projects when click on carousel link*/
$('.carousel-inner .item h3 a').eq(2).on('click', function(){
  var target = '.projects';
  scroll(target);
  console.log('projects');
});


    /*Scroll to projects when click on nav link*/
$('nav ul li').eq(2).first().on('click', function(){
  var target = '.projects';
  scroll(target);
  console.log('projects');
});

    /*Scroll to contact when click on nav link*/
$('nav ul li').eq(3).first().on('click', function(){
  var target = '.contact';
  scroll(target);
  console.log('contact');
});


if ($('#menu-icon').css('display') == 'inline-block' ) {
  $('nav ul').hide();
  $('#menu-icon').on('click', function(){
    $('nav ul').toggle();
  })
};

/*Lightbox Functionality*/
$(".about .circle").each(function(index, element) {

  $(this).on('click', function(){
    $(this).next().fadeIn(300) && $('.lightbox-background').children().fadeIn(300);
  });
  $(".close").on('click', function(){
    $(".lightbox, .lightbox-background").fadeOut(300);
  });
});



})
