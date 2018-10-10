$(document).ready(function(){
  var link=$('.menu-link');
  var link_active=$('.menu-link-active');
  var menu=$('.menu');
  var nav_link=$('.menu a');
  link.click(function(){
    link.toggleClass('menu-link-active');
    menu.toggleClass('menu-active');
  });
  nav_link.click(function(){
    link.toggleClass('menu-link-active');
    menu.toggleClass('menu-active');
  });
});
$(document).ready(function(){
   $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    prevArrow: '<button class="l-arrow" type="button"><img src="img/left.png"></button>',
    nextArrow: '<button class="r-arrow" type="button"><img src="img/right.png"></button>',
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 5,
    infinite: true,
    arrows:false,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    focusOnSelect: true
  });
});