/*global define, Backbone */

define(function () {

	'use strict';

	return Backbone.Model.extend({

		urlRoot: '/json/races',

		name: 'races',

		defaults: {
			
				'name': '',
			
				'id': '',
			
				'statefp10': '',
			
				'geoid': '',
			
		},

		schema: {
			
				'name': {
					type: String
				},
			
				'id': {
					type: String
				},
			
				'statefp10': {
					type: String
				},
			
				'geoid': {
					type: String
				},
			
		}

	});

});