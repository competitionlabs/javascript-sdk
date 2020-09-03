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
    instance = new @CompetitionlabsInsightsServicesSdk.MemberAwardAllOf();
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

  describe('MemberAwardAllOf', function() {
    it('should create an instance of MemberAwardAllOf', function() {
      // uncomment below and update the code to test MemberAwardAllOf
      //var instane = new @CompetitionlabsInsightsServicesSdk.MemberAwardAllOf();
      //expect(instance).to.be.a(@CompetitionlabsInsightsServicesSdk.MemberAwardAllOf);
    });

    it('should have the property rewardId (base name: "rewardId")', function() {
      // uncomment below and update the code to test the property rewardId
      //var instane = new @CompetitionlabsInsightsServicesSdk.MemberAwardAllOf();
      //expect(instance).to.be();
    });

    it('should have the property rewardTypeKey (base name: "rewardTypeKey")', function() {
      // uncomment below and update the code to test the property rewardTypeKey
      //var instane = new @CompetitionlabsInsightsServicesSdk.MemberAwardAllOf();
      //expect(instance).to.be();
    });

    it('should have the property rewardTypeId (base name: "rewardTypeId")', function() {
      // uncomment below and update the code to test the property rewardTypeId
      //var instane = new @CompetitionlabsInsightsServicesSdk.MemberAwardAllOf();
      //expect(instance).to.be();
    });

    it('should have the property rewardValue (base name: "rewardValue")', function() {
      // uncomment below and update the code to test the property rewardValue
      //var instane = new @CompetitionlabsInsightsServicesSdk.MemberAwardAllOf();
      //expect(instance).to.be();
    });

    it('should have the property memberAcknowledgmentRequired (base name: "memberAcknowledgmentRequired")', function() {
      // uncomment below and update the code to test the property memberAcknowledgmentRequired
      //var instane = new @CompetitionlabsInsightsServicesSdk.MemberAwardAllOf();
      //expect(instance).to.be();
    });

    it('should have the property claimed (base name: "claimed")', function() {
      // uncomment below and update the code to test the property claimed
      //var instane = new @CompetitionlabsInsightsServicesSdk.MemberAwardAllOf();
      //expect(instance).to.be();
    });

    it('should have the property delay (base name: "delay")', function() {
      // uncomment below and update the code to test the property delay
      //var instane = new @CompetitionlabsInsightsServicesSdk.MemberAwardAllOf();
      //expect(instance).to.be();
    });

    it('should have the property entityType (base name: "entityType")', function() {
      // uncomment below and update the code to test the property entityType
      //var instane = new @CompetitionlabsInsightsServicesSdk.MemberAwardAllOf();
      //expect(instance).to.be();
    });

    it('should have the property entityId (base name: "entityId")', function() {
      // uncomment below and update the code to test the property entityId
      //var instane = new @CompetitionlabsInsightsServicesSdk.MemberAwardAllOf();
      //expect(instance).to.be();
    });

    it('should have the property pointInTime (base name: "pointInTime")', function() {
      // uncomment below and update the code to test the property pointInTime
      //var instane = new @CompetitionlabsInsightsServicesSdk.MemberAwardAllOf();
      //expect(instance).to.be();
    });

    it('should have the property period (base name: "period")', function() {
      // uncomment below and update the code to test the property period
      //var instane = new @CompetitionlabsInsightsServicesSdk.MemberAwardAllOf();
      //expect(instance).to.be();
    });

  });

}));
