$(document).ready(function(){
  $('.slider').slick({  
  arrows: true,
  dots: true,
  infinite: true,
  speed: 500,
  prevArrow: '<button class="l-arrow" type="button"><img src="img/left.png"></button>',
  nextArrow: '<button class="r-arrow" type="button"><img src="img/right.png"></button>',
  fade: true,
  useCSS: true,
  cssEase: 'linear'
  });
});
$(document).ready(function(){
 $("#social").select2({
  templateResult: formatOptions
 });
});
function formatOptions (state) {
  if (!state.id) { return state.text; }
   var $state = $(
   '<span ><img sytle="display: inline-block;" src="../img/' + state.element.value.toLowerCase() + '.png" /> ' + state.text + '</span>'
  );
  return $state;
}
// $(document).ready(function(){
//       $('.spisok').on("click",function(){
//         $('.hide-language').show();
//       });
//       $('.hide-language').on("click",function(){
//         $('.hide-language').hide();
//       });
//       jQuery(function($){
//         $(document).mouseup(function (e){ // событие клика по веб-документу
//           var div = $(".hide-language"); // тут указываем ID элемента
//           if (!div.is(e.target) // если клик был не по нашему блоку
//               && div.has(e.target).length === 0) { // и не по его дочерним элементам
//             div.hide(); // скрываем его
//           }
//         });
//       });
//     });