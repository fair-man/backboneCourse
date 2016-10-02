define([
  "jquery",
  "underscore",
  "backbone",
  "View",
  "bootstrap",
  "bootstrapSelect",
  "bootstrapDatePicker"
], function ($, _, Backbone, baseView) {
  var app = {};
  app.view = new baseView();
  console.log("Module 'app.js' ~~~ LOADED ~~~");
  //app.view2 = new baseView();
  return app;
});