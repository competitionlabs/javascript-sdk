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
    factory(root.expect, root.CompetitionLabsApplicationServices);
  }
}(this, function(expect, CompetitionLabsApplicationServices) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CompetitionLabsApplicationServices.AchievementAllOf();
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

  describe('AchievementAllOf', function() {
    it('should create an instance of AchievementAllOf', function() {
      // uncomment below and update the code to test AchievementAllOf
      //var instane = new CompetitionLabsApplicationServices.AchievementAllOf();
      //expect(instance).to.be.a(CompetitionLabsApplicationServices.AchievementAllOf);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new CompetitionLabsApplicationServices.AchievementAllOf();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new CompetitionLabsApplicationServices.AchievementAllOf();
      //expect(instance).to.be();
    });

    it('should have the property icon (base name: "icon")', function() {
      // uncomment below and update the code to test the property icon
      //var instane = new CompetitionLabsApplicationServices.AchievementAllOf();
      //expect(instance).to.be();
    });

    it('should have the property ruleSets (base name: "ruleSets")', function() {
      // uncomment below and update the code to test the property ruleSets
      //var instane = new CompetitionLabsApplicationServices.AchievementAllOf();
      //expect(instance).to.be();
    });

    it('should have the property dependantOn (base name: "dependantOn")', function() {
      // uncomment below and update the code to test the property dependantOn
      //var instane = new CompetitionLabsApplicationServices.AchievementAllOf();
      //expect(instance).to.be();
    });

    it('should have the property scheduling (base name: "scheduling")', function() {
      // uncomment below and update the code to test the property scheduling
      //var instane = new CompetitionLabsApplicationServices.AchievementAllOf();
      //expect(instance).to.be();
    });

    it('should have the property achievementLiveStatus (base name: "achievementLiveStatus")', function() {
      // uncomment below and update the code to test the property achievementLiveStatus
      //var instane = new CompetitionLabsApplicationServices.AchievementAllOf();
      //expect(instance).to.be();
    });

    it('should have the property category (base name: "category")', function() {
      // uncomment below and update the code to test the property category
      //var instane = new CompetitionLabsApplicationServices.AchievementAllOf();
      //expect(instance).to.be();
    });

    it('should have the property memberGroups (base name: "memberGroups")', function() {
      // uncomment below and update the code to test the property memberGroups
      //var instane = new CompetitionLabsApplicationServices.AchievementAllOf();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instane = new CompetitionLabsApplicationServices.AchievementAllOf();
      //expect(instance).to.be();
    });

    it('should have the property translations (base name: "translations")', function() {
      // uncomment below and update the code to test the property translations
      //var instane = new CompetitionLabsApplicationServices.AchievementAllOf();
      //expect(instance).to.be();
    });

    it('should have the property translatableFields (base name: "translatableFields")', function() {
      // uncomment below and update the code to test the property translatableFields
      //var instane = new CompetitionLabsApplicationServices.AchievementAllOf();
      //expect(instance).to.be();
    });

    it('should have the property rewards (base name: "rewards")', function() {
      // uncomment below and update the code to test the property rewards
      //var instane = new CompetitionLabsApplicationServices.AchievementAllOf();
      //expect(instance).to.be();
    });

    it('should have the property constraints (base name: "constraints")', function() {
      // uncomment below and update the code to test the property constraints
      //var instane = new CompetitionLabsApplicationServices.AchievementAllOf();
      //expect(instance).to.be();
    });

  });

}));
