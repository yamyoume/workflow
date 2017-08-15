var $, fill;

$ = reqire('jquery');

(fill = function(item) {
  return $('.tagline').append("" + item);
})('The most creative minds in art');

fill;
