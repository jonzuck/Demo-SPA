; (function () {
  
$.fn.lazy = function(){
  window.addEventListener('scroll', function () {
    var merc = $("#Mercury");
    var win = $(window);
    var scrollToElement = merc.offset().top;
    var amountPageScrolled = win.scrollTop() + win.height();
    var inRange = amountPageScrolled > scrollToElement - 200;
   console.log(amountPageScrolled);
   
    if (inRange) {
     var imgSrc = merc.attr('data-src');
     merc.attr('src', imgSrc);

    }
  });
};

})();


