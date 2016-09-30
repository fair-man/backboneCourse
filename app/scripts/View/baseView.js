define([
  "jquery",
  "underscore",
  "backbone",
  "handlebars",
  "d3"
], function ($, _, Backbone, Handlebars, d3) {
  var baseView = Backbone.View.extend({
    "tagName": "div",
    "className": "widget",
    initialize: function () {
        console.log('test')
    }
  });

  return baseView;
})