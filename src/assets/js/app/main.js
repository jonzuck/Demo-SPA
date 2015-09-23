define(["jquery", "jquery.bxslider", "jquery.lazy", "jquery.nasa"], function ($) {
    //the jquery.bxslider.js plugins have been loaded.
    $(document).ready(function () {
    $('.bxslider').bxSlider();
    $('bxslider').lazy();
    $('bxslider').nasa();
    });
});