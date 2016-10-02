define([
    "jquery",
    "underscore",
    "backbone"
], function ($, _, Backbone) {
    var date = new Date();
    var startDate = date.getFullYear() + "-" + (date.getMonth() - 1) + "-" + date.getDate();
    var endDate = date.getFullYear() + "-" + date.getMonth() + "-" +date.getDate();
    var courseModel = Backbone.Model.extend({
            defaults: {
                curId: "145",
                startDate: startDate,
                endDate: endDate
            }
    });

    return courseModel;
});