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
    instance = new @CompetitionlabsInsightsServicesSdk.UpdateRewardRequestAllOf();
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

  describe('UpdateRewardRequestAllOf', function() {
    it('should create an instance of UpdateRewardRequestAllOf', function() {
      // uncomment below and update the code to test UpdateRewardRequestAllOf
      //var instane = new @CompetitionlabsInsightsServicesSdk.UpdateRewardRequestAllOf();
      //expect(instance).to.be.a(@CompetitionlabsInsightsServicesSdk.UpdateRewardRequestAllOf);
    });

    it('should have the property rewardRank (base name: "rewardRank")', function() {
      // uncomment below and update the code to test the property rewardRank
      //var instane = new @CompetitionlabsInsightsServicesSdk.UpdateRewardRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property rewardName (base name: "rewardName")', function() {
      // uncomment below and update the code to test the property rewardName
      //var instane = new @CompetitionlabsInsightsServicesSdk.UpdateRewardRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instane = new @CompetitionlabsInsightsServicesSdk.UpdateRewardRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property rewardType (base name: "rewardType")', function() {
      // uncomment below and update the code to test the property rewardType
      //var instane = new @CompetitionlabsInsightsServicesSdk.UpdateRewardRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property rewardTypeId (base name: "rewardTypeId")', function() {
      // uncomment below and update the code to test the property rewardTypeId
      //var instane = new @CompetitionlabsInsightsServicesSdk.UpdateRewardRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new @CompetitionlabsInsightsServicesSdk.UpdateRewardRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property delay (base name: "delay")', function() {
      // uncomment below and update the code to test the property delay
      //var instane = new @CompetitionlabsInsightsServicesSdk.UpdateRewardRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property icon (base name: "icon")', function() {
      // uncomment below and update the code to test the property icon
      //var instane = new @CompetitionlabsInsightsServicesSdk.UpdateRewardRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instane = new @CompetitionlabsInsightsServicesSdk.UpdateRewardRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property pointInTime (base name: "pointInTime")', function() {
      // uncomment below and update the code to test the property pointInTime
      //var instane = new @CompetitionlabsInsightsServicesSdk.UpdateRewardRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property period (base name: "period")', function() {
      // uncomment below and update the code to test the property period
      //var instane = new @CompetitionlabsInsightsServicesSdk.UpdateRewardRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property translations (base name: "translations")', function() {
      // uncomment below and update the code to test the property translations
      //var instane = new @CompetitionlabsInsightsServicesSdk.UpdateRewardRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property constraints (base name: "constraints")', function() {
      // uncomment below and update the code to test the property constraints
      //var instane = new @CompetitionlabsInsightsServicesSdk.UpdateRewardRequestAllOf();
      //expect(instance).to.be();
    });

  });

}));
