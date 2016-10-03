define([
    "jquery",
    "underscore",
    "backbone"
], function ($, _, Backbone) {
    var d = new Date();
    var date = (d.getDate() < 10) ? "0" + d.getDate() : d.getDate();
    var month = (d.getMonth() < 10) ? "0" + d.getMonth() : d.getMonth();
    var year = d.getFullYear();
    var startDate = year + "-" + month + "-" + date;
    var endDate = year + "-" + (month * 1 + 1) + "-" + date;
    var courseModel = Backbone.Model.extend({
            defaults: {
                curId: "145",
                startDate: startDate,
                endDate: endDate
            }
    });

    return courseModel;
});