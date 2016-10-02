define([
  "jquery",
  "underscore",
  "backbone",
  "d3",
  "handlebars",
  "courseCollection"
], function ($, _, Backbone, d3, Handlebars, courseCollection) {

  var courseView = Backbone.View.extend({
    events: {
      "click .dropdown-menu li": "selectMoney",
      "change .start-date, blur .start-date": "selectStartDate",
      "change .end-date, blur .end-date": "selectEndDate"
    },
    initialize: function () {
      var self = this;
      self.collection = new courseCollection;
      self.listenTo(self.model, "change", self.rerender);
      self.load();
    },
    load: function (opts) {
        var self = this;
        var curId = self.model.get("curId");
        var startDate = self.model.get("startDate");
        var endDate = self.model.get("endDate");
        $.ajax({
          url: "http://www.nbrb.by/API/ExRates/Rates/Dynamics/" + curId + "?startDate=" + startDate + "&endDate=" + endDate
        }).done(function (result) {
          self.collection.reset(result);
          self.render();
        }).fail(function (error) {
            console.log(error)
        })
    },
    render: function () {
      var self = this;
      var k = 4;
      var data = _.map(self.collection.toJSON(), function (item, i) {
          var d = new Date(item.Date);
          var date = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();
          var month = d.getMonth() < 10 ? "0" + d.getMonth() : d.getMonth();
          var year = d.getFullYear();
          item.Date = date + "-" + month + "-" + year;
          item.x = i + k;
          k += 18;
          item.y = item.Cur_OfficialRate;
          self.width = item.x;
          self.length = i;
          return item
       });

      var date = self.model.toJSON();
      var startDate = new Date(date.startDate);
      var endDate = new Date(date.endDate);
      $(".start-date").attr("placeholder", (startDate.getMonth() + 1) + "/" + startDate.getDate() + "/" + startDate.getFullYear());
      $(".end-date").attr("placeholder", (endDate.getMonth() + 1) + "/" + endDate.getDate() + "/" + endDate.getFullYear());

      var width = self.width,
          height = 250,
          padding = 30;

      var xScale = d3.scaleLinear()
        .domain([d3.min(data, function (d) {return d.x - 18}), d3.max(data, function(d) { return d.x + 18; })])
        .range([padding, width-padding*2]);

      var yScale = d3.scaleLinear()
        .domain([d3.min(data, function (d) {return d.y - 0.01}), d3.max(data, function(d) { return d.y + 0.01; })])
        .range([height - padding, padding]);

      var line = d3.line()
        .x(function(d){return xScale(d.x);})
        .y(function(d){return yScale(d.y);});

      self.svg = d3.select(self.el)
        .select(".widget-content")
        .append("svg")
          .style("transform", "translateX("+ padding / 3 +"px)");

      self.svg.attr("width", width)
        .attr("height", height);

      self.svg.append("g")
        .attr("class", "circle")
        .selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx",function (d) {return xScale(d.x)})
        .attr("cy", function (d) {return yScale(d.y)})
        .attr("r", 3)
        .attr("fill", "gray")
        .style("position", "relative")
        .style("z-index", 10);

      self.svg.append("path").attr("d", line(data))
           .style("stroke", "steelblue")
           .style("fill", "none")
           .style("strike-width", 2);

      var xAxis = d3.axisBottom()
        .scale(xScale)
        .ticks(0);

      var yAxis = d3.axisLeft()
        .scale(yScale)
        .ticks(8);

      self.svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(0," + (height - padding) + ")")
        .call(xAxis);

      self.svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(" + padding + ",0)")
        .call(yAxis);

      self.svg.append("g")
          .attr("class", "date")
          .attr("transform", "translate(" + (padding) + "," + (height) + ")")
          .selectAll("text")
          .data(data)
          .enter()
          .append("text")
          .text(function (d) {console.log(d);return d.Date})
          .attr('transform', function (d) {
              return 'rotate(-90) translate(0, ' + d.x + ')';
          })
    },
    rerender: function () {
      var self = this;
      self.$el.find(".widget-content").find("svg").remove();
      self.load();
    },
    selectMoney: function (e) {
      var self = this;
      var index = $(e.target).closest("li").attr("data-original-index");
      var curId = $(e.target).closest(".widget-header")
          .find(".selectpicker").find("option[data-original-index=" + index +"]").attr("data-cur-id");
      self.model.set({curId: curId});
    },
    selectStartDate: function (e) {
      var self = this;
      var d = $(e.target).val().split("/");
      self.model.set({
        startDate: d[2] + "-" + d[0] + "-" + d[1]
      });
    },
    selectEndDate: function (e) {
      var self = this;
      var d = $(e.target).val().split("/");
      self.model.set({
        endDate: d[2] + "-" + d[0] + "-" + d[1]
      });
    }
  });
  return courseView;
});