requirejs.config({
    // baseUrl: "../bower_components/",
    paths: {
		jquery: "../bower_components/jquery/dist/jquery.min",
		backbone: "../bower_components/backbone/backbone-min",
		underscore: "../bower_components/underscore/underscore-min",
		handlebars: "../bower_components/handlebars/handlebars.min",
		bootstrap: "../bower_components/bootstrap/dist/js/bootstrap.min",
		d3: "../bower_components/d3/d3.min",
		View: "View/baseView"
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
            deps: ["jquery"],
            exports: "bootstrap"
        }
	}
});

console.log("Module 'config.js' ~~~ LOADED ~~~")