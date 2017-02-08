define([
  "jquery",
  "underscore",
  "backbone",
  "handlebars",
  "d3",
  "courseView",
  "courseCollection",
  "courseModel"
], function ($, _, Backbone, Handlebars, d3, courseView, courseCollection, courseModel) {
  var courseBaseView = Backbone.View.extend({
    "tagName": "div",
    "className": "widget course-block col-lg-6",
    initialize: function () {
      var self = this;
      var course = new courseView({
        el: this.el,
        model: new courseModel
      });
      self.render()
    },
    render: function () {
      var self = this;
      var source   = $("#courseTemplate").html();
      var template = Handlebars.compile(source);
      $('.widget-block').append(this.$el.append(template()));
      self.ready()
    },
    ready: function () {
      var self = this;
      self.$('.widget-content').addClass('loader');
      $('.selectpicker').selectpicker({
        style: 'btn-info',
        size: 5
      });
    }
  });

  return courseBaseView;
});