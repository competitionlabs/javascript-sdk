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
    instance = new @CompetitionlabsInsightsServicesSdk.UpdateContestRequestAllOf();
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

  describe('UpdateContestRequestAllOf', function() {
    it('should create an instance of UpdateContestRequestAllOf', function() {
      // uncomment below and update the code to test UpdateContestRequestAllOf
      //var instane = new @CompetitionlabsInsightsServicesSdk.UpdateContestRequestAllOf();
      //expect(instance).to.be.a(@CompetitionlabsInsightsServicesSdk.UpdateContestRequestAllOf);
    });

    it('should have the property competitionId (base name: "competitionId")', function() {
      // uncomment below and update the code to test the property competitionId
      //var instane = new @CompetitionlabsInsightsServicesSdk.UpdateContestRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property _number (base name: "number")', function() {
      // uncomment below and update the code to test the property _number
      //var instane = new @CompetitionlabsInsightsServicesSdk.UpdateContestRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new @CompetitionlabsInsightsServicesSdk.UpdateContestRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new @CompetitionlabsInsightsServicesSdk.UpdateContestRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property termsConditions (base name: "termsConditions")', function() {
      // uncomment below and update the code to test the property termsConditions
      //var instane = new @CompetitionlabsInsightsServicesSdk.UpdateContestRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property round (base name: "round")', function() {
      // uncomment below and update the code to test the property round
      //var instane = new @CompetitionlabsInsightsServicesSdk.UpdateContestRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property roundType (base name: "roundType")', function() {
      // uncomment below and update the code to test the property roundType
      //var instane = new @CompetitionlabsInsightsServicesSdk.UpdateContestRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property groupStage (base name: "groupStage")', function() {
      // uncomment below and update the code to test the property groupStage
      //var instane = new @CompetitionlabsInsightsServicesSdk.UpdateContestRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property groupStageLabel (base name: "groupStageLabel")', function() {
      // uncomment below and update the code to test the property groupStageLabel
      //var instane = new @CompetitionlabsInsightsServicesSdk.UpdateContestRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property entrantsFromContest (base name: "entrantsFromContest")', function() {
      // uncomment below and update the code to test the property entrantsFromContest
      //var instane = new @CompetitionlabsInsightsServicesSdk.UpdateContestRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property maxNumberOfEntrants (base name: "maxNumberOfEntrants")', function() {
      // uncomment below and update the code to test the property maxNumberOfEntrants
      //var instane = new @CompetitionlabsInsightsServicesSdk.UpdateContestRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property minNumberOfEntrants (base name: "minNumberOfEntrants")', function() {
      // uncomment below and update the code to test the property minNumberOfEntrants
      //var instane = new @CompetitionlabsInsightsServicesSdk.UpdateContestRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property ruleSets (base name: "ruleSets")', function() {
      // uncomment below and update the code to test the property ruleSets
      //var instane = new @CompetitionlabsInsightsServicesSdk.UpdateContestRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property isPublic (base name: "isPublic")', function() {
      // uncomment below and update the code to test the property isPublic
      //var instane = new @CompetitionlabsInsightsServicesSdk.UpdateContestRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property autoStart (base name: "autoStart")', function() {
      // uncomment below and update the code to test the property autoStart
      //var instane = new @CompetitionlabsInsightsServicesSdk.UpdateContestRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property scheduledStartDate (base name: "scheduledStartDate")', function() {
      // uncomment below and update the code to test the property scheduledStartDate
      //var instane = new @CompetitionlabsInsightsServicesSdk.UpdateContestRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property scheduledEndDate (base name: "scheduledEndDate")', function() {
      // uncomment below and update the code to test the property scheduledEndDate
      //var instane = new @CompetitionlabsInsightsServicesSdk.UpdateContestRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property strategies (base name: "strategies")', function() {
      // uncomment below and update the code to test the property strategies
      //var instane = new @CompetitionlabsInsightsServicesSdk.UpdateContestRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property constraints (base name: "constraints")', function() {
      // uncomment below and update the code to test the property constraints
      //var instane = new @CompetitionlabsInsightsServicesSdk.UpdateContestRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instane = new @CompetitionlabsInsightsServicesSdk.UpdateContestRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property translations (base name: "translations")', function() {
      // uncomment below and update the code to test the property translations
      //var instane = new @CompetitionlabsInsightsServicesSdk.UpdateContestRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property rewards (base name: "rewards")', function() {
      // uncomment below and update the code to test the property rewards
      //var instane = new @CompetitionlabsInsightsServicesSdk.UpdateContestRequestAllOf();
      //expect(instance).to.be();
    });

  });

}));
