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
    instance = new CompetitionLabsAdminServices.UpdateRewardRequestAllOf();
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
      //var instane = new CompetitionLabsAdminServices.UpdateRewardRequestAllOf();
      //expect(instance).to.be.a(CompetitionLabsAdminServices.UpdateRewardRequestAllOf);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new CompetitionLabsAdminServices.UpdateRewardRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new CompetitionLabsAdminServices.UpdateRewardRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property rewardRank (base name: "rewardRank")', function() {
      // uncomment below and update the code to test the property rewardRank
      //var instance = new CompetitionLabsAdminServices.UpdateRewardRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property rewardValue (base name: "rewardValue")', function() {
      // uncomment below and update the code to test the property rewardValue
      //var instance = new CompetitionLabsAdminServices.UpdateRewardRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property rewardTypeId (base name: "rewardTypeId")', function() {
      // uncomment below and update the code to test the property rewardTypeId
      //var instance = new CompetitionLabsAdminServices.UpdateRewardRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property icon (base name: "icon")', function() {
      // uncomment below and update the code to test the property icon
      //var instance = new CompetitionLabsAdminServices.UpdateRewardRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property issueLimit (base name: "issueLimit")', function() {
      // uncomment below and update the code to test the property issueLimit
      //var instance = new CompetitionLabsAdminServices.UpdateRewardRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property delay (base name: "delay")', function() {
      // uncomment below and update the code to test the property delay
      //var instance = new CompetitionLabsAdminServices.UpdateRewardRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property pointInTime (base name: "pointInTime")', function() {
      // uncomment below and update the code to test the property pointInTime
      //var instance = new CompetitionLabsAdminServices.UpdateRewardRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property period (base name: "period")', function() {
      // uncomment below and update the code to test the property period
      //var instance = new CompetitionLabsAdminServices.UpdateRewardRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property translations (base name: "translations")', function() {
      // uncomment below and update the code to test the property translations
      //var instance = new CompetitionLabsAdminServices.UpdateRewardRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property constraints (base name: "constraints")', function() {
      // uncomment below and update the code to test the property constraints
      //var instance = new CompetitionLabsAdminServices.UpdateRewardRequestAllOf();
      //expect(instance).to.be();
    });

  });

}));
