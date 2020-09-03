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
    factory(root.expect, root.@CompetitionlabsApplicationServicesSdk);
  }
}(this, function(expect, @CompetitionlabsApplicationServicesSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new @CompetitionlabsApplicationServicesSdk.LeaderboardEntry();
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

  describe('LeaderboardEntry', function() {
    it('should create an instance of LeaderboardEntry', function() {
      // uncomment below and update the code to test LeaderboardEntry
      //var instane = new @CompetitionlabsApplicationServicesSdk.LeaderboardEntry();
      //expect(instance).to.be.a(@CompetitionlabsApplicationServicesSdk.LeaderboardEntry);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new @CompetitionlabsApplicationServicesSdk.LeaderboardEntry();
      //expect(instance).to.be();
    });

    it('should have the property rank (base name: "rank")', function() {
      // uncomment below and update the code to test the property rank
      //var instane = new @CompetitionlabsApplicationServicesSdk.LeaderboardEntry();
      //expect(instance).to.be();
    });

    it('should have the property points (base name: "points")', function() {
      // uncomment below and update the code to test the property points
      //var instane = new @CompetitionlabsApplicationServicesSdk.LeaderboardEntry();
      //expect(instance).to.be();
    });

    it('should have the property memberId (base name: "memberId")', function() {
      // uncomment below and update the code to test the property memberId
      //var instane = new @CompetitionlabsApplicationServicesSdk.LeaderboardEntry();
      //expect(instance).to.be();
    });

    it('should have the property memberRefId (base name: "memberRefId")', function() {
      // uncomment below and update the code to test the property memberRefId
      //var instane = new @CompetitionlabsApplicationServicesSdk.LeaderboardEntry();
      //expect(instance).to.be();
    });

  });

}));
