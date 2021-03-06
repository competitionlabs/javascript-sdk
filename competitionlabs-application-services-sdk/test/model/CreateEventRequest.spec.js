/**
 * CompetitionLabs Admin Services
 * CompetitionLabs Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.1
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
    factory(root.expect, root.CompetitionLabsAdminServices);
  }
}(this, function(expect, CompetitionLabsAdminServices) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CompetitionLabsAdminServices.CreateEventRequest();
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

  describe('CreateEventRequest', function() {
    it('should create an instance of CreateEventRequest', function() {
      // uncomment below and update the code to test CreateEventRequest
      //var instane = new CompetitionLabsAdminServices.CreateEventRequest();
      //expect(instance).to.be.a(CompetitionLabsAdminServices.CreateEventRequest);
    });

    it('should have the property memberRefId (base name: "memberRefId")', function() {
      // uncomment below and update the code to test the property memberRefId
      //var instance = new CompetitionLabsAdminServices.CreateEventRequest();
      //expect(instance).to.be();
    });

    it('should have the property action (base name: "action")', function() {
      // uncomment below and update the code to test the property action
      //var instance = new CompetitionLabsAdminServices.CreateEventRequest();
      //expect(instance).to.be();
    });

    it('should have the property batchId (base name: "batchId")', function() {
      // uncomment below and update the code to test the property batchId
      //var instance = new CompetitionLabsAdminServices.CreateEventRequest();
      //expect(instance).to.be();
    });

    it('should have the property entityRefId (base name: "entityRefId")', function() {
      // uncomment below and update the code to test the property entityRefId
      //var instance = new CompetitionLabsAdminServices.CreateEventRequest();
      //expect(instance).to.be();
    });

    it('should have the property sourceValue (base name: "sourceValue")', function() {
      // uncomment below and update the code to test the property sourceValue
      //var instance = new CompetitionLabsAdminServices.CreateEventRequest();
      //expect(instance).to.be();
    });

    it('should have the property transactionTimestamp (base name: "transactionTimestamp")', function() {
      // uncomment below and update the code to test the property transactionTimestamp
      //var instance = new CompetitionLabsAdminServices.CreateEventRequest();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instance = new CompetitionLabsAdminServices.CreateEventRequest();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instance = new CompetitionLabsAdminServices.CreateEventRequest();
      //expect(instance).to.be();
    });

    it('should have the property eventRefId (base name: "eventRefId")', function() {
      // uncomment below and update the code to test the property eventRefId
      //var instance = new CompetitionLabsAdminServices.CreateEventRequest();
      //expect(instance).to.be();
    });

  });

}));
