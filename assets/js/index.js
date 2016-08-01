$(document).ready(function(){
  $('#signup1').click(function(){
    $('html, body').animate({
        scrollTop: $("#signup-form").offset().top
    }, 1000);
  });

  /*$('#splash-btn').click(function(){
    $('html, body').animate({
        scrollTop: $("#signup-form").offset().top
    }, 1000);
  });*/
});
