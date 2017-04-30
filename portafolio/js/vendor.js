$(document).ready(function() {
  var about=$('#about').offset().top,
  portafolio=$('#portafolio').offset().top,
  cantact=$('#cantact').offset().top;

  $('#btn-about').on('click',function(e) {
    e.preventDefault();
    $('html , body').animate({scrollTop:about},500);
  });
  $('#btn-portafolio').on('click',function(e) {
    e.preventDefault();
    $('html , body').animate({scrollTop:portafolio},500);
  });
  $('#btn-cantact').on('click',function(e) {
    e.preventDefault();
    $('html , body').animate({scrollTop:cantact},500);
  });
});
