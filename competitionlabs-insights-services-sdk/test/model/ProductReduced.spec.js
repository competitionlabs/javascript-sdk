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
    instance = new @CompetitionlabsInsightsServicesSdk.ProductReduced();
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

  describe('ProductReduced', function() {
    it('should create an instance of ProductReduced', function() {
      // uncomment below and update the code to test ProductReduced
      //var instane = new @CompetitionlabsInsightsServicesSdk.ProductReduced();
      //expect(instance).to.be.a(@CompetitionlabsInsightsServicesSdk.ProductReduced);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new @CompetitionlabsInsightsServicesSdk.ProductReduced();
      //expect(instance).to.be();
    });

    it('should have the property spaceName (base name: "spaceName")', function() {
      // uncomment below and update the code to test the property spaceName
      //var instane = new @CompetitionlabsInsightsServicesSdk.ProductReduced();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instane = new @CompetitionlabsInsightsServicesSdk.ProductReduced();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new @CompetitionlabsInsightsServicesSdk.ProductReduced();
      //expect(instance).to.be();
    });

    it('should have the property productRefId (base name: "productRefId")', function() {
      // uncomment below and update the code to test the property productRefId
      //var instane = new @CompetitionlabsInsightsServicesSdk.ProductReduced();
      //expect(instance).to.be();
    });

  });

}));
