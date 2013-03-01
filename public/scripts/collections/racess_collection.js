/*global define */

define([

	'models/races_model'

], function (Model) {

	'use strict';

	return Backbone.Collection.extend({

		name: 'racess',

		model: Model,

		initialize: function () {
			
		}

	});

});