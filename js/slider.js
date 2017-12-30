'use strict';

$(function() {

  // configuration
  var width = 720;
  var animationSpeed = 1000;
  var pause = 5000;
  var currentSlide = 1;
  var currentTextSlide = 1;

  // cache the DOM
  var $imageSlider = $('#image-slider');
  var $imageSlideContainer = $imageSlider.find('.image-slides');
  var $imageSlides = $imageSlideContainer.find('.image-slide');
  var $textSlider  = $('#text-slider');
  var $textSlideContainer = $textSlider.find('.text-slides');
  var $textSlides = $textSlideContainer.find('.text-slide');


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

      $textSlideContainer.animate({'top': '-='+width}, animationSpeed, function() {
      currentTextSlide++;
      if (currentTextSlide === $imageSlides.length) {
          currentTextSlide = 1;
          $textSlideContainer.css({'top': 0});
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
