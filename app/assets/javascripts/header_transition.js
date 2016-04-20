$(document).ready(function(){

  $(window).scroll(function(){
    if($(window).scrollTop() > 265){
      $('#header').addClass("header-trans")
    }
    if($(window).scrollTop() < 265){
      $('#header').removeClass("header-trans")
    }
  });

});