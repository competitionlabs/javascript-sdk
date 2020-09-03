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
    instance = new @CompetitionlabsInsightsServicesSdk.UpdateApiKeyRequest();
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

  describe('UpdateApiKeyRequest', function() {
    it('should create an instance of UpdateApiKeyRequest', function() {
      // uncomment below and update the code to test UpdateApiKeyRequest
      //var instane = new @CompetitionlabsInsightsServicesSdk.UpdateApiKeyRequest();
      //expect(instance).to.be.a(@CompetitionlabsInsightsServicesSdk.UpdateApiKeyRequest);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new @CompetitionlabsInsightsServicesSdk.UpdateApiKeyRequest();
      //expect(instance).to.be();
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instane = new @CompetitionlabsInsightsServicesSdk.UpdateApiKeyRequest();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new @CompetitionlabsInsightsServicesSdk.UpdateApiKeyRequest();
      //expect(instance).to.be();
    });

    it('should have the property whiteListIPs (base name: "whiteListIPs")', function() {
      // uncomment below and update the code to test the property whiteListIPs
      //var instane = new @CompetitionlabsInsightsServicesSdk.UpdateApiKeyRequest();
      //expect(instance).to.be();
    });

    it('should have the property key (base name: "key")', function() {
      // uncomment below and update the code to test the property key
      //var instane = new @CompetitionlabsInsightsServicesSdk.UpdateApiKeyRequest();
      //expect(instance).to.be();
    });

    it('should have the property role (base name: "role")', function() {
      // uncomment below and update the code to test the property role
      //var instane = new @CompetitionlabsInsightsServicesSdk.UpdateApiKeyRequest();
      //expect(instance).to.be();
    });

    it('should have the property _default (base name: "default")', function() {
      // uncomment below and update the code to test the property _default
      //var instane = new @CompetitionlabsInsightsServicesSdk.UpdateApiKeyRequest();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instane = new @CompetitionlabsInsightsServicesSdk.UpdateApiKeyRequest();
      //expect(instance).to.be();
    });

  });

}));
