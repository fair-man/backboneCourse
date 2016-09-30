requirejs.config({
    baseUrl: "app/bower_components/",
    paths: {
		jquery: 'jquery/dist/jquery.min',
		backbone: 'backbone/backbone.min',
		underscore: 'underscore/underscore-min',
		handlebars: 'handlebars/handlebars.min',
		bootstrap: 'bootstrap/dist/js/bootstrap.min',
		d3: 'd3/d3.min'
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

console.log('config.js')