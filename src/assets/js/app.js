/* requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: '../../Demo-SPA/src/components',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
		app: "../app",
		jquery:'jquery/dist/jquery.min',
		bxslider: 'jquery.bxslider/jquery.bxslider.min'
    }
});

// Start the main app logic.
requirejs(['jquery', 'bxslider'],
function   ($, bxslider) {
    //jQuery, and bxslider module are all
    //loaded and can be used here now.
});
*/

requirejs.config({
    "baseUrl": "assets/js/lib",
    "paths": {
     "app": "../app",
     jquery: "jquery.min" 
    },
    "shim": {
        "jquery.bxslider": ["jquery"],
        "jquery.lazy":["jquery"],
        "jquery.nasa":["jquery"]
    }
});

// Load the main app module to start the app
requirejs(["../app/main"]);
