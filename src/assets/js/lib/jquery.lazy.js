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
        var inRange = amountPageScrolled > scrollToElement - 200;
        if (inRange && !lazyArray[i].getAttribute('src')) {
          var imgSrc = lazyArray[i].getAttribute('data-src');
          lazyArray[i].setAttribute('src', imgSrc);
        }
      }
    
      //for lazy-loading JSON info into an HTML element
      var scrollToHTML = $('.lazyHTML').offset().top; 
      var inRangeHTML = amountPageScrolled > scrollToHTML - 200;
      if (inRangeHTML && !document.getElementById('galileoFacts') && document.getElementById('galileo').innerHTML == '') {
        
        $.getJSON("galileo.json", function (data) {
          var facts = [];
          $.each(data, function (key, val) {
            facts.push("<dt>" + key + "</dt>" + "<dd>" + val + "</dd>");
          });
          $("<dl/>", {
            "id": "galileoFacts",
            html: facts.join('')
          }).appendTo('#galileo');
        });
      }
    });
  };
})();
