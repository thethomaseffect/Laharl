///<reference path="../typings/backbone/backbone.d.ts"/>

define([
    'underscore',
    'backbone',
    'models/games'
], function (_, Backbone, GamesModel) {
    'use strict';

    var GamesCollection = Backbone.Collection.extend({
        model: GamesModel
    });

    return GamesCollection;
});
