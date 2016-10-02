requirejs.config({
    // baseUrl: "../bower_components/",
    paths: {
		jquery: "../bower_components/jquery/dist/jquery.min",
		backbone: "../bower_components/backbone/backbone-min",
		underscore: "../bower_components/underscore/underscore-min",
		handlebars: "../bower_components/handlebars/handlebars.min",
		bootstrap: "../bower_components/bootstrap/dist/js/bootstrap.min",
        bootstrapSelect: "../bower_components/bootstrap-select/dist/js/bootstrap-select",
        bootstrapDatePicker: "../bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker",
		d3: "../bower_components/d3/d3.min",
		View: "View/courseBaseView",
        courseView: "View/courseView",
        courseCollection: "Collection/courseCollection",
        courseModel: "Model/courseModel"
    },
	shim: {
        "underscore": {
            exports: "_"
        },
		"backbone": {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },
        "bootstrap": {
            deps: ["jquery"]
        }
	}
});

console.log("Module 'config.js' ~~~ LOADED ~~~");