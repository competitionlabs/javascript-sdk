/**
 * CompetitionLabs Application Services
 * CompetitionLabs Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@competitionlabs.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CompetitionLabsApplicationServices);
  }
}(this, function(expect, CompetitionLabsApplicationServices) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CompetitionLabsApplicationServices.CreateKafkaConnectionRequestAllOf();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CreateKafkaConnectionRequestAllOf', function() {
    it('should create an instance of CreateKafkaConnectionRequestAllOf', function() {
      // uncomment below and update the code to test CreateKafkaConnectionRequestAllOf
      //var instane = new CompetitionLabsApplicationServices.CreateKafkaConnectionRequestAllOf();
      //expect(instance).to.be.a(CompetitionLabsApplicationServices.CreateKafkaConnectionRequestAllOf);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new CompetitionLabsApplicationServices.CreateKafkaConnectionRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property brokers (base name: "brokers")', function() {
      // uncomment below and update the code to test the property brokers
      //var instance = new CompetitionLabsApplicationServices.CreateKafkaConnectionRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property transformerId (base name: "transformerId")', function() {
      // uncomment below and update the code to test the property transformerId
      //var instance = new CompetitionLabsApplicationServices.CreateKafkaConnectionRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property groupId (base name: "groupId")', function() {
      // uncomment below and update the code to test the property groupId
      //var instance = new CompetitionLabsApplicationServices.CreateKafkaConnectionRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property topic (base name: "topic")', function() {
      // uncomment below and update the code to test the property topic
      //var instance = new CompetitionLabsApplicationServices.CreateKafkaConnectionRequestAllOf();
      //expect(instance).to.be();
    });

  });

}));
