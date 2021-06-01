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
    instance = new CompetitionLabsAdminServices.Award();
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

  describe('Award', function() {
    it('should create an instance of Award', function() {
      // uncomment below and update the code to test Award
      //var instane = new CompetitionLabsAdminServices.Award();
      //expect(instance).to.be.a(CompetitionLabsAdminServices.Award);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new CompetitionLabsAdminServices.Award();
      //expect(instance).to.be();
    });

    it('should have the property spaceName (base name: "spaceName")', function() {
      // uncomment below and update the code to test the property spaceName
      //var instance = new CompetitionLabsAdminServices.Award();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instance = new CompetitionLabsAdminServices.Award();
      //expect(instance).to.be();
    });

    it('should have the property memberId (base name: "memberId")', function() {
      // uncomment below and update the code to test the property memberId
      //var instance = new CompetitionLabsAdminServices.Award();
      //expect(instance).to.be();
    });

    it('should have the property rewardId (base name: "rewardId")', function() {
      // uncomment below and update the code to test the property rewardId
      //var instance = new CompetitionLabsAdminServices.Award();
      //expect(instance).to.be();
    });

    it('should have the property rewardType (base name: "rewardType")', function() {
      // uncomment below and update the code to test the property rewardType
      //var instance = new CompetitionLabsAdminServices.Award();
      //expect(instance).to.be();
    });

    it('should have the property rewardRank (base name: "rewardRank")', function() {
      // uncomment below and update the code to test the property rewardRank
      //var instance = new CompetitionLabsAdminServices.Award();
      //expect(instance).to.be();
    });

    it('should have the property rewardValue (base name: "rewardValue")', function() {
      // uncomment below and update the code to test the property rewardValue
      //var instance = new CompetitionLabsAdminServices.Award();
      //expect(instance).to.be();
    });

    it('should have the property delay (base name: "delay")', function() {
      // uncomment below and update the code to test the property delay
      //var instance = new CompetitionLabsAdminServices.Award();
      //expect(instance).to.be();
    });

    it('should have the property entityType (base name: "entityType")', function() {
      // uncomment below and update the code to test the property entityType
      //var instance = new CompetitionLabsAdminServices.Award();
      //expect(instance).to.be();
    });

    it('should have the property entityId (base name: "entityId")', function() {
      // uncomment below and update the code to test the property entityId
      //var instance = new CompetitionLabsAdminServices.Award();
      //expect(instance).to.be();
    });

    it('should have the property pointInTime (base name: "pointInTime")', function() {
      // uncomment below and update the code to test the property pointInTime
      //var instance = new CompetitionLabsAdminServices.Award();
      //expect(instance).to.be();
    });

    it('should have the property period (base name: "period")', function() {
      // uncomment below and update the code to test the property period
      //var instance = new CompetitionLabsAdminServices.Award();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instance = new CompetitionLabsAdminServices.Award();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instance = new CompetitionLabsAdminServices.Award();
      //expect(instance).to.be();
    });

    it('should have the property constraints (base name: "constraints")', function() {
      // uncomment below and update the code to test the property constraints
      //var instance = new CompetitionLabsAdminServices.Award();
      //expect(instance).to.be();
    });

    it('should have the property claimedTimestamp (base name: "claimedTimestamp")', function() {
      // uncomment below and update the code to test the property claimedTimestamp
      //var instance = new CompetitionLabsAdminServices.Award();
      //expect(instance).to.be();
    });

  });

}));
