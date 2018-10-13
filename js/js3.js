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
$('.slider').slick({
  arrows:true,
  prevArrow: '<button class="l-arrow" type="button"><img src="img/left.png"></button>',
  nextArrow: '<button class="r-arrow" type="button"><img src="img/right.png"></button>'
});