/**
 * CompetitionLabs Application Services
 * The services listed below are referred as CompetitionLabs Application Services.
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
    instance = new CompetitionLabsApplicationServices.MemberMessageAllOf();
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

  describe('MemberMessageAllOf', function() {
    it('should create an instance of MemberMessageAllOf', function() {
      // uncomment below and update the code to test MemberMessageAllOf
      //var instane = new CompetitionLabsApplicationServices.MemberMessageAllOf();
      //expect(instance).to.be.a(CompetitionLabsApplicationServices.MemberMessageAllOf);
    });

    it('should have the property eventRefType (base name: "eventRefType")', function() {
      // uncomment below and update the code to test the property eventRefType
      //var instane = new CompetitionLabsApplicationServices.MemberMessageAllOf();
      //expect(instance).to.be();
    });

    it('should have the property eventReferenceId (base name: "eventReferenceId")', function() {
      // uncomment below and update the code to test the property eventReferenceId
      //var instane = new CompetitionLabsApplicationServices.MemberMessageAllOf();
      //expect(instance).to.be();
    });

    it('should have the property messageType (base name: "messageType")', function() {
      // uncomment below and update the code to test the property messageType
      //var instane = new CompetitionLabsApplicationServices.MemberMessageAllOf();
      //expect(instance).to.be();
    });

    it('should have the property subject (base name: "subject")', function() {
      // uncomment below and update the code to test the property subject
      //var instane = new CompetitionLabsApplicationServices.MemberMessageAllOf();
      //expect(instance).to.be();
    });

    it('should have the property body (base name: "body")', function() {
      // uncomment below and update the code to test the property body
      //var instane = new CompetitionLabsApplicationServices.MemberMessageAllOf();
      //expect(instance).to.be();
    });

    it('should have the property prize (base name: "prize")', function() {
      // uncomment below and update the code to test the property prize
      //var instane = new CompetitionLabsApplicationServices.MemberMessageAllOf();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new CompetitionLabsApplicationServices.MemberMessageAllOf();
      //expect(instance).to.be();
    });

    it('should have the property expiry (base name: "expiry")', function() {
      // uncomment below and update the code to test the property expiry
      //var instane = new CompetitionLabsApplicationServices.MemberMessageAllOf();
      //expect(instance).to.be();
    });

  });

}));