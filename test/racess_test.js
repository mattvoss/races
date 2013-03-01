/*jslint node: true, sub: true */
/*global require, before, describe, it */

(function () {

	'use strict';

	var assert = require( 'assert' ),
			path = require( 'path' ),
			app, data = {};

	
		data['name'] = '123';	
	
		data['id'] = '123';	
	
		data['statefp10'] = '123';	
	
		data['geoid'] = '123';	
	

	before(function (done) {
		require ( 'backbone-on-express' )({
			rootPath: path.resolve(__dirname, '../') + '/'
		}, function (server) {
			app = server;
			done();
		});
	});

	describe('Create races', function () {
		it('Should create a new races', function (done) {
			app.controllers['races'].create({
				body: data
			}, {
				redirect: function (url) {
					data._id = url.split('/')[2];
					assert.equal(typeof url, 'string');
					done();
				}
			});
		});
	});

	describe('Get races', function () {
		it('Should retrieve a new races', function (done) {

			app.controllers['races'].render = function (template, values) {
				
					assert.equal(data['name'], values['name']);	
				
					assert.equal(data['id'], values['id']);	
				
					assert.equal(data['statefp10'], values['statefp10']);	
				
					assert.equal(data['geoid'], values['geoid']);	
				
				done();
			};
			
			app.controllers['races'].show({
				params: {
					id: data._id
				}
			});

		});
	});

	describe('Show all', function () {
		it('Should show every races', function (done) {

			app.controllers['races'].render = function (template, values) {
				assert.equal(typeof values['racess'], 'object');
				done();
			};
			
			app.controllers['races'].index();

		});
	});

	describe('Update races', function () {
		it('Should update the races', function (done) {

			
				data['name'] = '456';	
			
				data['id'] = '456';	
			
				data['statefp10'] = '456';	
			
				data['geoid'] = '456';	
			

			app.controllers['races'].render = function (template, values) {
				
					assert.equal(data['name'], values['name']);
				
					assert.equal(data['id'], values['id']);
				
					assert.equal(data['statefp10'], values['statefp10']);
				
					assert.equal(data['geoid'], values['geoid']);
				
				done();
			};

			app.controllers['races'].update({
				body: data
			}, {
				redirect: function () {
					app.controllers['races'].show({
						params: {
							id: data._id
						}
					});
				}
			});

		});
	});

	describe('Delete the races', function () {
		it('Should remove the races', function (done) {

			app.controllers['races'].render = function (template, values) {
				assert.equal(template, 404);
				done();
			};
			
			app.controllers['races'].destroy({
				params: {
					id: data._id
				}
			}, {
				redirect: function () {
					app.controllers['races'].show({
						params: {
							id: data._id
						}
					});	
				}
			});

		});
	});

}());