///<reference path="../typings/backbone/backbone.d.ts"/>

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var GameModel = Backbone.Model.extend({
        defaults: {
        }
    });

    return GameModel;
});
