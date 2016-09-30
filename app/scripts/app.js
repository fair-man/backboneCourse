define([
  "jquery",
  "underscore",
  "backbone",
  "View"
], function ($, _, Backbone, baseView) {
  var app = {};
  app.view = new baseView();
  console.log("Module 'app.js' ~~~ LOADED ~~~")
  return app;
})