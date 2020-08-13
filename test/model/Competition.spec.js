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
    factory(root.expect, root.@CompetitionlabsJavascriptSdk);
  }
}(this, function(expect, @CompetitionlabsJavascriptSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new @CompetitionlabsJavascriptSdk.Competition();
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

  describe('Competition', function() {
    it('should create an instance of Competition', function() {
      // uncomment below and update the code to test Competition
      //var instane = new @CompetitionlabsJavascriptSdk.Competition();
      //expect(instance).to.be.a(@CompetitionlabsJavascriptSdk.Competition);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new @CompetitionlabsJavascriptSdk.Competition();
      //expect(instance).to.be();
    });

    it('should have the property spaceName (base name: "spaceName")', function() {
      // uncomment below and update the code to test the property spaceName
      //var instane = new @CompetitionlabsJavascriptSdk.Competition();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instane = new @CompetitionlabsJavascriptSdk.Competition();
      //expect(instance).to.be();
    });

    it('should have the property competitionType (base name: "competitionType")', function() {
      // uncomment below and update the code to test the property competitionType
      //var instane = new @CompetitionlabsJavascriptSdk.Competition();
      //expect(instance).to.be();
    });

    it('should have the property numberOfRounds (base name: "numberOfRounds")', function() {
      // uncomment below and update the code to test the property numberOfRounds
      //var instane = new @CompetitionlabsJavascriptSdk.Competition();
      //expect(instance).to.be();
    });

    it('should have the property numberOfGroupStages (base name: "numberOfGroupStages")', function() {
      // uncomment below and update the code to test the property numberOfGroupStages
      //var instane = new @CompetitionlabsJavascriptSdk.Competition();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new @CompetitionlabsJavascriptSdk.Competition();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new @CompetitionlabsJavascriptSdk.Competition();
      //expect(instance).to.be();
    });

    it('should have the property termsConditions (base name: "termsConditions")', function() {
      // uncomment below and update the code to test the property termsConditions
      //var instane = new @CompetitionlabsJavascriptSdk.Competition();
      //expect(instance).to.be();
    });

    it('should have the property maxNumberOfEntrants (base name: "maxNumberOfEntrants")', function() {
      // uncomment below and update the code to test the property maxNumberOfEntrants
      //var instane = new @CompetitionlabsJavascriptSdk.Competition();
      //expect(instance).to.be();
    });

    it('should have the property minNumberOfEntrants (base name: "minNumberOfEntrants")', function() {
      // uncomment below and update the code to test the property minNumberOfEntrants
      //var instane = new @CompetitionlabsJavascriptSdk.Competition();
      //expect(instance).to.be();
    });

    it('should have the property products (base name: "products")', function() {
      // uncomment below and update the code to test the property products
      //var instane = new @CompetitionlabsJavascriptSdk.Competition();
      //expect(instance).to.be();
    });

    it('should have the property ruleSets (base name: "ruleSets")', function() {
      // uncomment below and update the code to test the property ruleSets
      //var instane = new @CompetitionlabsJavascriptSdk.Competition();
      //expect(instance).to.be();
    });

    it('should have the property isPublic (base name: "isPublic")', function() {
      // uncomment below and update the code to test the property isPublic
      //var instane = new @CompetitionlabsJavascriptSdk.Competition();
      //expect(instance).to.be();
    });

    it('should have the property autoStart (base name: "autoStart")', function() {
      // uncomment below and update the code to test the property autoStart
      //var instane = new @CompetitionlabsJavascriptSdk.Competition();
      //expect(instance).to.be();
    });

    it('should have the property scheduledStartDate (base name: "scheduledStartDate")', function() {
      // uncomment below and update the code to test the property scheduledStartDate
      //var instane = new @CompetitionlabsJavascriptSdk.Competition();
      //expect(instance).to.be();
    });

    it('should have the property scheduledEndDate (base name: "scheduledEndDate")', function() {
      // uncomment below and update the code to test the property scheduledEndDate
      //var instane = new @CompetitionlabsJavascriptSdk.Competition();
      //expect(instance).to.be();
    });

    it('should have the property actualStartDate (base name: "actualStartDate")', function() {
      // uncomment below and update the code to test the property actualStartDate
      //var instane = new @CompetitionlabsJavascriptSdk.Competition();
      //expect(instance).to.be();
    });

    it('should have the property actualEndDate (base name: "actualEndDate")', function() {
      // uncomment below and update the code to test the property actualEndDate
      //var instane = new @CompetitionlabsJavascriptSdk.Competition();
      //expect(instance).to.be();
    });

    it('should have the property includeEntrantsWhere (base name: "includeEntrantsWhere")', function() {
      // uncomment below and update the code to test the property includeEntrantsWhere
      //var instane = new @CompetitionlabsJavascriptSdk.Competition();
      //expect(instance).to.be();
    });

    it('should have the property optinRequiredForEntrants (base name: "optinRequiredForEntrants")', function() {
      // uncomment below and update the code to test the property optinRequiredForEntrants
      //var instane = new @CompetitionlabsJavascriptSdk.Competition();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instane = new @CompetitionlabsJavascriptSdk.Competition();
      //expect(instance).to.be();
    });

    it('should have the property translations (base name: "translations")', function() {
      // uncomment below and update the code to test the property translations
      //var instane = new @CompetitionlabsJavascriptSdk.Competition();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new @CompetitionlabsJavascriptSdk.Competition();
      //expect(instance).to.be();
    });

    it('should have the property statusCode (base name: "statusCode")', function() {
      // uncomment below and update the code to test the property statusCode
      //var instane = new @CompetitionlabsJavascriptSdk.Competition();
      //expect(instance).to.be();
    });

    it('should have the property contests (base name: "contests")', function() {
      // uncomment below and update the code to test the property contests
      //var instane = new @CompetitionlabsJavascriptSdk.Competition();
      //expect(instance).to.be();
    });

    it('should have the property rewards (base name: "rewards")', function() {
      // uncomment below and update the code to test the property rewards
      //var instane = new @CompetitionlabsJavascriptSdk.Competition();
      //expect(instance).to.be();
    });

    it('should have the property constraints (base name: "constraints")', function() {
      // uncomment below and update the code to test the property constraints
      //var instane = new @CompetitionlabsJavascriptSdk.Competition();
      //expect(instance).to.be();
    });

  });

}));
