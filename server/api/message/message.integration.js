'use strict';

var app = require('../..');
import request from 'supertest';

var newMessage;

describe('Message API:', function() {

  describe('GET /api/messages', function() {
    var messages;

    beforeEach(function(done) {
      request(app)
        .get('/api/messages')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          messages = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      messages.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/messages', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/messages')
        .send({
          email: 'New Message email!',
          info: 'New Message info!!',
          content: 'New Message content!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newMessage = res.body;
          done();
        });
    });

    it('should respond with the newly created message', function() {
      newMessage.email.should.equal('New Message email!');
      newMessage.info.should.equal('New Message info!!');
      newMessage.content.should.equal('New Message content!!!');
    });

  });

  describe('GET /api/messages/:id', function() {
    var message;

    beforeEach(function(done) {
      request(app)
        .get('/api/messages/' + newMessage._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          message = res.body;
          done();
        });
    });

    afterEach(function() {
      message = {};
    });

    it('should respond with the requested message', function() {
      message.email.should.equal('New Message email!');
      message.info.should.equal('New Message info!!');
      message.content.should.equal('New Message content!!!');
    });

  });

  describe('PUT /api/messages/:id', function() {
    var updatedMessage;

    beforeEach(function(done) {
      request(app)
        .put('/api/messages/' + newMessage._id)
        .send({
          email: 'Updated Message email!',
          info: 'Updated Message info!!',
          content: 'Updated Message content!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedMessage = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedMessage = {};
    });

    it('should respond with the updated message', function() {
      updatedMessage.email.should.equal('Updated Message email!');
      updatedMessage.info.should.equal('Updated Message info!!');
      updatedMessage.content.should.equal('Updated Message content!!!');
    });

  });

  describe('DELETE /api/messages/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/messages/' + newMessage._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when message does not exist', function(done) {
      request(app)
        .delete('/api/messages/' + newMessage._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
