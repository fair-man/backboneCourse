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
  new baseView();
  console.log("Module 'app.js' ~~~ LOADED ~~~");
  $('.btn-add').on("click", function () {
    new baseView();
  });
  //app.view2 = new baseView();
  return app;
});