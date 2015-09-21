
; (function () {

  document.getElementById('body').addEventListener('click', function () {
    var merc = $("#Mercury");
    var win = $(window);
    var scrollToElement = merc.offset().top;
    var amountPageScrolled = win.scrollTop() + win.height();
    var inRange = amountPageScrolled > scrollToElement - 200;
  
    alert(scrollToElement);
    alert(amountPageScrolled > scrollToElement - 200);
   
    if (inRange) {
     merc.setAttribute('src', 'assets/img/Mercury.jpg');
    }
  });



})();


