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
    instance = new @CompetitionlabsInsightsServicesSdk.RankingStrategy();
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

  describe('RankingStrategy', function() {
    it('should create an instance of RankingStrategy', function() {
      // uncomment below and update the code to test RankingStrategy
      //var instane = new @CompetitionlabsInsightsServicesSdk.RankingStrategy();
      //expect(instance).to.be.a(@CompetitionlabsInsightsServicesSdk.RankingStrategy);
    });

    it('should have the property scoreDesc (base name: "scoreDesc")', function() {
      // uncomment below and update the code to test the property scoreDesc
      //var instane = new @CompetitionlabsInsightsServicesSdk.RankingStrategy();
      //expect(instance).to.be();
    });

    it('should have the property timeDesc (base name: "timeDesc")', function() {
      // uncomment below and update the code to test the property timeDesc
      //var instane = new @CompetitionlabsInsightsServicesSdk.RankingStrategy();
      //expect(instance).to.be();
    });

    it('should have the property scoreFirst (base name: "scoreFirst")', function() {
      // uncomment below and update the code to test the property scoreFirst
      //var instane = new @CompetitionlabsInsightsServicesSdk.RankingStrategy();
      //expect(instance).to.be();
    });

    it('should have the property ignoreTime (base name: "ignoreTime")', function() {
      // uncomment below and update the code to test the property ignoreTime
      //var instane = new @CompetitionlabsInsightsServicesSdk.RankingStrategy();
      //expect(instance).to.be();
    });

    it('should have the property ignoreScore (base name: "ignoreScore")', function() {
      // uncomment below and update the code to test the property ignoreScore
      //var instane = new @CompetitionlabsInsightsServicesSdk.RankingStrategy();
      //expect(instance).to.be();
    });

  });

}));
