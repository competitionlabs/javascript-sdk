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
    factory(root.expect, root.@CompetitionlabsInsightsServicesSdk);
  }
}(this, function(expect, @CompetitionlabsInsightsServicesSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new @CompetitionlabsInsightsServicesSdk.CompetitionReducedAllOf();
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

  describe('CompetitionReducedAllOf', function() {
    it('should create an instance of CompetitionReducedAllOf', function() {
      // uncomment below and update the code to test CompetitionReducedAllOf
      //var instane = new @CompetitionlabsInsightsServicesSdk.CompetitionReducedAllOf();
      //expect(instance).to.be.a(@CompetitionlabsInsightsServicesSdk.CompetitionReducedAllOf);
    });

    it('should have the property competitionType (base name: "competitionType")', function() {
      // uncomment below and update the code to test the property competitionType
      //var instane = new @CompetitionlabsInsightsServicesSdk.CompetitionReducedAllOf();
      //expect(instance).to.be();
    });

    it('should have the property numberOfRounds (base name: "numberOfRounds")', function() {
      // uncomment below and update the code to test the property numberOfRounds
      //var instane = new @CompetitionlabsInsightsServicesSdk.CompetitionReducedAllOf();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new @CompetitionlabsInsightsServicesSdk.CompetitionReducedAllOf();
      //expect(instance).to.be();
    });

    it('should have the property includeEntrantsWhere (base name: "includeEntrantsWhere")', function() {
      // uncomment below and update the code to test the property includeEntrantsWhere
      //var instane = new @CompetitionlabsInsightsServicesSdk.CompetitionReducedAllOf();
      //expect(instance).to.be();
    });

    it('should have the property optinRequiredForEntrants (base name: "optinRequiredForEntrants")', function() {
      // uncomment below and update the code to test the property optinRequiredForEntrants
      //var instane = new @CompetitionlabsInsightsServicesSdk.CompetitionReducedAllOf();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new @CompetitionlabsInsightsServicesSdk.CompetitionReducedAllOf();
      //expect(instance).to.be();
    });

    it('should have the property statusCode (base name: "statusCode")', function() {
      // uncomment below and update the code to test the property statusCode
      //var instane = new @CompetitionlabsInsightsServicesSdk.CompetitionReducedAllOf();
      //expect(instance).to.be();
    });

    it('should have the property products (base name: "products")', function() {
      // uncomment below and update the code to test the property products
      //var instane = new @CompetitionlabsInsightsServicesSdk.CompetitionReducedAllOf();
      //expect(instance).to.be();
    });

    it('should have the property scheduledStartDate (base name: "scheduledStartDate")', function() {
      // uncomment below and update the code to test the property scheduledStartDate
      //var instane = new @CompetitionlabsInsightsServicesSdk.CompetitionReducedAllOf();
      //expect(instance).to.be();
    });

    it('should have the property scheduledEndDate (base name: "scheduledEndDate")', function() {
      // uncomment below and update the code to test the property scheduledEndDate
      //var instane = new @CompetitionlabsInsightsServicesSdk.CompetitionReducedAllOf();
      //expect(instance).to.be();
    });

    it('should have the property actualStartDate (base name: "actualStartDate")', function() {
      // uncomment below and update the code to test the property actualStartDate
      //var instane = new @CompetitionlabsInsightsServicesSdk.CompetitionReducedAllOf();
      //expect(instance).to.be();
    });

    it('should have the property actualEndDate (base name: "actualEndDate")', function() {
      // uncomment below and update the code to test the property actualEndDate
      //var instane = new @CompetitionlabsInsightsServicesSdk.CompetitionReducedAllOf();
      //expect(instance).to.be();
    });

  });

}));
