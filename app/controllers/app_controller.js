/*jslint node: true */
/*global define */

define([
	'underscore',
	'backbone'
], function (_, Backbone) {

	'use strict';

	return Backbone.Controller.extend({
		name: 'App',
		title: 'races',
		company: 'races'
	});

});