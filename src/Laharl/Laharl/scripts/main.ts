///<reference path="typings/requirejs/require.d.ts"/>

requirejs.config({
    paths: {
        'jquery': 'vendor/jquery-2.1.0'
    }
});

// Start the main app logic.
require(['jquery'], ()=> {
    $("#content-placeholder").html("<p>Hello World!</p>");
});