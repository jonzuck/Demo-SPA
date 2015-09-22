; (function () {

  $.fn.lazy = function () {
    window.addEventListener('scroll', function () {
      //for images and iframes, things with "src"
      var lazyItem = $('.lazyload');
      var lazyArray = $.makeArray(lazyItem);
      var win = $(window);
      var amountPageScrolled = win.scrollTop() + win.height();

      for (var i = 0; i < lazyArray.length; i++) {
        var scrollToElement = $(lazyArray[i]).offset().top;
        var inRange = amountPageScrolled > scrollToElement + 400;
        if (inRange) {
          var imgSrc = lazyArray[i].getAttribute('data-src');
          lazyArray[i].setAttribute('src', imgSrc);
        }
      }
    
      //for lazy-loading JSON info into an HTML element
      var lazyHTML = $('.lazyHTML');
      var scrollToHTML = lazyHTML.offset().top; //jQuery enabled
      var inRangeHTML = amountPageScrolled > scrollToHTML + 100;
      if (inRangeHTML) {
        var obj = JSON.parse(window.galileo);
        document.getElementById('galileo').innerHTML = obj.name + obj.significance + obj.inPopularCulture;
      }
    });
  };
})();
