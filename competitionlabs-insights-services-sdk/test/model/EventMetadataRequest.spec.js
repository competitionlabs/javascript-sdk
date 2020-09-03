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
    instance = new @CompetitionlabsInsightsServicesSdk.EventMetadataRequest();
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

  describe('EventMetadataRequest', function() {
    it('should create an instance of EventMetadataRequest', function() {
      // uncomment below and update the code to test EventMetadataRequest
      //var instane = new @CompetitionlabsInsightsServicesSdk.EventMetadataRequest();
      //expect(instance).to.be.a(@CompetitionlabsInsightsServicesSdk.EventMetadataRequest);
    });

    it('should have the property key (base name: "key")', function() {
      // uncomment below and update the code to test the property key
      //var instane = new @CompetitionlabsInsightsServicesSdk.EventMetadataRequest();
      //expect(instance).to.be();
    });

    it('should have the property textValue (base name: "textValue")', function() {
      // uncomment below and update the code to test the property textValue
      //var instane = new @CompetitionlabsInsightsServicesSdk.EventMetadataRequest();
      //expect(instance).to.be();
    });

    it('should have the property numberValue (base name: "numberValue")', function() {
      // uncomment below and update the code to test the property numberValue
      //var instane = new @CompetitionlabsInsightsServicesSdk.EventMetadataRequest();
      //expect(instance).to.be();
    });

    it('should have the property textArrayValues (base name: "textArrayValues")', function() {
      // uncomment below and update the code to test the property textArrayValues
      //var instane = new @CompetitionlabsInsightsServicesSdk.EventMetadataRequest();
      //expect(instance).to.be();
    });

    it('should have the property numberArrayValues (base name: "numberArrayValues")', function() {
      // uncomment below and update the code to test the property numberArrayValues
      //var instane = new @CompetitionlabsInsightsServicesSdk.EventMetadataRequest();
      //expect(instance).to.be();
    });

  });

}));
