'use strict';

$(function() {

  // configuration
  var width = 720;
  var animationSpeed = 750;
  var currentSlide = 1;

  // cache the DOM
  var $imageSlider = $('#image-slider');
  var $imageSlideContainer = $imageSlider.find('.image-slides');
  var $imageSlides = $imageSlideContainer.find('.image-slide');
  var $textSlider  = $('#text-slider');
  var $textSlideContainer = $textSlider.find('.text-slides');
  var $textSlides = $textSlideContainer.find('.text-slide');
  var $leftButton = $('.fa-angle-left');
  var $rightButton = $('.fa-angle-right');

  $rightButton.click(function() {
    $imageSlideContainer.animate({'margin-left': '-='+width}, animationSpeed)
    $textSlideContainer.animate({'top': '-='+width}, animationSpeed, function() {
      currentSlide++;
      checkButtons();
    })
  });

  $leftButton.click(function() {
    $imageSlideContainer.animate({'margin-left': '+='+width}, animationSpeed)
    $textSlideContainer.animate({'top': '+='+width}, animationSpeed, function() {
      currentSlide--;
      checkButtons();
    })
  });

  function checkButtons() {
    if (currentSlide === 1) {
      $leftButton.css('visibility', 'hidden')
      $rightButton.css('visibility', 'visible')
    } else if (currentSlide === $imageSlides.length) {
      $leftButton.css('visibility', 'visible')
      $rightButton.css('visibility', 'hidden')
    } else {
      $leftButton.css('visibility', 'visible')
      $rightButton.css('visibility', 'visible')
    }
  }

});