var should = require('should');
var request = require('supertest');
var server = require('../../../app');

describe('controllers', function () {
	describe('movie', function () {
		describe('GET /movie', function () {
			it('should return an empty movies array', function (done) {
				request(server)
					.get('/movie')
					.set('Accept', 'application/json')
					.expect('Content-Type', /json/)
					.expect(200)
					.end(function (err, res) {
						should.not.exist(err);
						res.body.should.eql({ movies: [] });
						done();
					});
			});
		});
	});
});
