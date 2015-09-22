; (function () {

  $.fn.lazy = function () {
    window.addEventListener('scroll', function () {
      var lazyItem = $('.lazyload');
      var lazyArray = $.makeArray(lazyItem);
      var win = $(window);
      var amountPageScrolled = win.scrollTop() + win.height();

      for (var i = 0; i < lazyArray.length; i++) {
        var scrollToElement = $(lazyArray[i]).offset().top;
        var inRange = amountPageScrolled > scrollToElement - 200;
        if (inRange) {
          var imgSrc = lazyArray[i].getAttribute('data-src');
          lazyArray[i].setAttribute('src', imgSrc);
        }
      }
    });
  };
})();
