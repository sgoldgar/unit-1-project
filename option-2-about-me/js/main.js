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

/*Add Hello on Logo Hover*/
$('.my-logo').hover(
  function() {
    $( this ).append( $('<div class="hello"> Hello!</div>') );
  }, function() {
    $( this ).find(".hello").remove();
  }
);

/*Scroll to Sections*/

function scroll(target){
  $('html, body').animate({
    scrollTop: $(target).offset().top - 150}, 'slow');
}


  /*Scroll to top of page when click logo*/
  $('.my-logo').on('click', function(){
    $('html,body').scrollTop(0);
    console.log('top');
  });

  /*Scroll to about when click on nav link*/
$('nav ul li:first-child').first().on('click', function(){
  $(this).addClass('selected');
  $(this).siblings().removeClass('selected');
  var target = '.about';
  scroll(target);
  console.log('about');
});
  /*Scroll to about when click on carousel link*/
$('.carousel-inner .item h3 a').on('click', function(){
  $('nav ul li:first-child').first().addClass('selected');
  $('nav ul li:first-child').first().siblings().removeClass('selected');
  var target = '.about';
  scroll(target);
  console.log('about');
});
  /*Scroll to projects when click on carousel link*/
$('.carousel-inner .item h3 a').eq(2).on('click', function(){
  $('nav ul li').eq(2).first().addClass('selected');
  $('nav ul li').eq(2).first().siblings().removeClass('selected');
  var target = '.projects';
  scroll(target);
  console.log('projects');
});


    /*Scroll to projects when click on nav link*/
$('nav ul li').eq(2).first().on('click', function(){
  $(this).addClass('selected');
  $(this).siblings().removeClass('selected');
  var target = '.projects';
  scroll(target);
  console.log('projects');
});

    /*Scroll to contact when click on nav link*/
$('nav ul li').eq(3).first().on('click', function(){
  $(this).addClass('selected');
  $(this).siblings().removeClass('selected');
  var target = '.contact';
  scroll(target);
  console.log('contact');
});



/*Lightbox Functionality*/
$(".about .circle").each(function(index, element) {
  $(this).on('click', function(){
    $(this).next().fadeIn(300) && $('.lightbox-background').children().fadeIn(300);
  });
  $(".close, .lightbox-background").on('click', function(){
    $(".lightbox, .lightbox-background").fadeOut(300);
  });
});


/*Hamburger Toggle for Mobile*/
var menuStatus = ($('#menu-icon').css('display'));
if(menuStatus == "block" || menuStatus == "inline-block") {
  $('nav').hide();
  $('#menu-icon').on('click', function(){
    $('nav').toggle();
    console.log('click');
  });
}


/*Cycle Quotes*/
var quoteCounter = 0;
var quoteLength = $('.quotes p').length;

setInterval(function () {
  $('.quotes p').eq(quoteCounter).fadeOut(400, function () {
    if (quoteCounter === quoteLength - 1) {
      quoteCounter = 0;
    } else {
      quoteCounter += 1;
    }
    $('.quotes p').eq(quoteCounter).fadeIn();
  });
}, 3000);

})
