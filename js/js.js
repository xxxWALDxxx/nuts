$(document).ready(function(){
  $('.slider').slick({
  arrows: true,
  dots: true,
  infinite: true,
  speed: 500,
  prevArrow: '<button type="button" class="slick-prev">Previous</button>',
  fade: true,
  useCSS: true,
  cssEase: 'linear'
  });
});