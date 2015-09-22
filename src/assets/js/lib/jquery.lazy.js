; (function () {
  
$.fn.lazy = function(){
  window.addEventListener('scroll', function () {
    var lazyItem = $('.lazyload');
    var lazyArray = $.makeArray( lazyItem );
    var win = $(window);
    var scrollToElement = lazyItem.offset().top;
    var amountPageScrolled = win.scrollTop() + win.height();
    var inRange = amountPageScrolled > scrollToElement -200;

    if (inRange) {       
     for (var i = 0; i < lazyArray.length; i++) {
     var imgSrc = lazyArray[i].getAttribute('data-src');
     lazyArray[i].setAttribute('src', imgSrc);
      }
    }
  });
};

})();
