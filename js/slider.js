'use strict';

$(function() {

  // configuration
  var width = 720;
  var animationSpeed = 1000;
  var pause = 3000;
  var currentSlide = 1;

  // cache the DOM
  var $imageSlider = $('#image-slider');
  var $imageSlideContainer = $imageSlider.find('.image-slides');
  var $imageSlides = $imageSlideContainer.find('.image-slide');

  var interval;

  function startSlider() {
    interval = setInterval(function() {
      $imageSlideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
        currentSlide++;
        if (currentSlide === $imageSlides.length) {
          currentSlide = 1;
          $imageSlideContainer.css('margin-left', 0);
        }
      });
    }, pause);
  }

  function stopSlider() {
    clearInterval(interval);
  }

  $imageSlider.on('mouseenter', stopSlider).on('mouseleave', startSlider);

  startSlider();

});
