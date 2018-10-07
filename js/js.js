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
$(document).ready(function(){
      $('.spisok').on("click",function(){
        $('.hide-language').show();
      });
      $('.hide-language').on("click",function(){
        $('.hide-language').hide();
      });
      jQuery(function($){
        $(document).mouseup(function (e){ // событие клика по веб-документу
          var div = $(".hide-language"); // тут указываем ID элемента
          if (!div.is(e.target) // если клик был не по нашему блоку
              && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.hide(); // скрываем его
          }
        });
      });
    });