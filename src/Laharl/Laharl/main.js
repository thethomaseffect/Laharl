///<reference path="typings/requirejs/requirejs.d.ts"/>
requirejs.config({
    paths: {
        app: '../app'
    }
});

// Start the main app logic.
requirejs(['jquery', 'canvas', 'app/sub'], function ($, canvas, sub) {
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.
});
//# sourceMappingURL=main.js.map
