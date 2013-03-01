/*jslint node: true, sloppy: true */
/*global Backbone, app, define */

define([
	'underscore',
	'backbone'
], function (_, Backbone) {

	var crud = []; crud.push('races'); 
	
	app.router = Backbone.Router.extend({

		crud: crud,

		routes: {
			'': 'pages#home'
		}

	});

});