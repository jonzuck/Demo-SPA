; (function () {
  
$.fn.lazy = function(){
  window.addEventListener('scroll', function () {
    var lazyItem = $('[data-src]');
    var lazyArray = $.makeArray( lazyItem );
    var win = $(window);
    var scrollToElement = lazyItem.offset().top;
    var amountPageScrolled = win.scrollTop() + win.height();
    var inRange = amountPageScrolled > scrollToElement +100;
   console.log(amountPageScrolled);
    console.log(lazyArray[7].getAttribute('data-src'));
    if (inRange) {
    
       
     for (var i = 0; i< lazyArray.length; i++) {
     var imgSrc = lazyArray[i].getAttribute('data-src');
     lazyArray[i].setAttribute('src', imgSrc);
      }
    }
  });
};

})();
