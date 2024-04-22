var request = require('supertest');
var app = require('../index.js');
describe('GET /will', function() {
    it('respond with Hello Welcome to Devops 3912', function(done) {
        request(app).get('/will').expect('{ "response":"Hello Welcome to Devops 3912" }', done);
    });
});