/*jslint node: true */
/*global define, app */

define([
	'underscore',
	'backbone',
	'models/races_model',
	'collections/racess_collection'
], function (_, Backbone, Model, Collection) {

	'use strict';

	return Backbone.Controller.extend({

		name: 'races',

		'new': function (req, res) {

			var model = new Model();

			this.render('races/new', _.extend({
				title: 'New races'
			}, model.defaults));

		},

		'edit': function (req, res) {

			var self = this,
					model = new Model({
						_id: req.params.id
					});

			model.fetch(function (model, data, err) {
				self.render('races/edit', _.extend(data, {
					title: 'Edit races'
				}));
			});

		},

		'index': function (req, res) {

			var self = this,
					collection = new Collection();

			collection.fetch({

				success: function (collection, data, options) {
					self.render('races/index', {
						'racess': data,
						title: 'racess'
					});
				},

				error: function (collection, error, options) {
					self.render(500);
				}

			});

		},

		'show': function (req, res) {

			var self = this,
					model = new Model({
						_id: req.params.id
					});

			model.fetch(function (model, data, err) {
				if (data) {
					self.render('races/show', _.extend(data, {
						title: 'View races'
					}));
				} else {
					self.render(404);
				}
			});

		},

		'update': function (req, res) {

			var model, self = this;

			model = new Model(req.body);

			model.save({
				success: function (model, data) {
					res.redirect('/races/' + data._id);
				},
				error: function (model, data) {
					if (data) {
						req.session.flash = {
							type: 'error',
							message: 'Update error.',
							errors: data,
							body: req.body
						};
						res.redirect('/races/edit/' + req.session['races']._id);
					} else {
						self.render(500);
					}
				}
			});
			
		},

		'create': function (req, res) {

			var model, self = this;

			model = new Model(req.body);

			model.save({
				success: function (model, data) {
					res.redirect('/races/' + data._id);
				},
				error: function (model, data) {
					if (data) {
						req.session.flash = {
							type: 'error',
							message: 'Create error.',
							errors: data,
							body: req.body
						};
						res.redirect('/races/new');
					} else {
						self.render(500);
					}
				}
			});

		},

		'destroy': function (req, res) {

			var self = this,
					model = new Model({
						_id: req.params.id
					});

			model.destroy(function (model, data, err) {
				res.redirect('/races');
			});

		}

	});

});