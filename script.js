$(document).ready(function() {

  $('#read-more').click(() => $('html, body').animate({
    scrollTop: $("#about").offset().top
  }, 1000, 'swing'));

  $('#to-top').click(() => $('html, body').animate({
    scrollTop: $("#top").offset().top
  }, 1000, 'swing'));

  $('#to-about').click(() => $('html, body').animate({
    scrollTop: $("#about").offset().top
  }, 1000, 'swing'));

  $('#to-skills').click(() => $('html, body').animate({
    scrollTop: $("#skills").offset().top
  }, 1000, 'swing'));

  $('#to-projects').click(() => $('html, body').animate({
    scrollTop: $("#projects").offset().top
  }, 1000, 'swing'));

  $('#to-contact').click(() => $('html, body').animate({
    scrollTop: $("#contact").offset().top
  }, 1000, 'swing'));

});
