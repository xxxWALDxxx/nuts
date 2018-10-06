$(document).ready(function(){
  $('.slider').slick({
  dots: true,
  infinite: true,
  speed: 500,
  prevArrow: '<button type="button" class="slick-prev">Previous</button>',
  fade: true,
  useCSS: true,
  cssEase: 'linear'
  });
});