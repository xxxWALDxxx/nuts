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