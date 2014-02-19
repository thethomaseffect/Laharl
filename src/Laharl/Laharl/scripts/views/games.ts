/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var GamesView = Backbone.View.extend({
        template: JST['app/scripts/templates/games.ejs']
    });

    return GamesView;
});
