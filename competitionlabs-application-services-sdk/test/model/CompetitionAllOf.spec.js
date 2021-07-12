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
    instance = new CompetitionLabsAdminServices.CompetitionAllOf();
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

  describe('CompetitionAllOf', function() {
    it('should create an instance of CompetitionAllOf', function() {
      // uncomment below and update the code to test CompetitionAllOf
      //var instane = new CompetitionLabsAdminServices.CompetitionAllOf();
      //expect(instance).to.be.a(CompetitionLabsAdminServices.CompetitionAllOf);
    });

    it('should have the property competitionType (base name: "competitionType")', function() {
      // uncomment below and update the code to test the property competitionType
      //var instance = new CompetitionLabsAdminServices.CompetitionAllOf();
      //expect(instance).to.be();
    });

    it('should have the property numberOfRounds (base name: "numberOfRounds")', function() {
      // uncomment below and update the code to test the property numberOfRounds
      //var instance = new CompetitionLabsAdminServices.CompetitionAllOf();
      //expect(instance).to.be();
    });

    it('should have the property numberOfGroupStages (base name: "numberOfGroupStages")', function() {
      // uncomment below and update the code to test the property numberOfGroupStages
      //var instance = new CompetitionLabsAdminServices.CompetitionAllOf();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new CompetitionLabsAdminServices.CompetitionAllOf();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new CompetitionLabsAdminServices.CompetitionAllOf();
      //expect(instance).to.be();
    });

    it('should have the property termsAndConditions (base name: "termsAndConditions")', function() {
      // uncomment below and update the code to test the property termsAndConditions
      //var instance = new CompetitionLabsAdminServices.CompetitionAllOf();
      //expect(instance).to.be();
    });

    it('should have the property maxNumberOfEntrants (base name: "maxNumberOfEntrants")', function() {
      // uncomment below and update the code to test the property maxNumberOfEntrants
      //var instance = new CompetitionLabsAdminServices.CompetitionAllOf();
      //expect(instance).to.be();
    });

    it('should have the property minNumberOfEntrants (base name: "minNumberOfEntrants")', function() {
      // uncomment below and update the code to test the property minNumberOfEntrants
      //var instance = new CompetitionLabsAdminServices.CompetitionAllOf();
      //expect(instance).to.be();
    });

    it('should have the property entrantMemberType (base name: "entrantMemberType")', function() {
      // uncomment below and update the code to test the property entrantMemberType
      //var instance = new CompetitionLabsAdminServices.CompetitionAllOf();
      //expect(instance).to.be();
    });

    it('should have the property dependantOn (base name: "dependantOn")', function() {
      // uncomment below and update the code to test the property dependantOn
      //var instance = new CompetitionLabsAdminServices.CompetitionAllOf();
      //expect(instance).to.be();
    });

    it('should have the property ruleSets (base name: "ruleSets")', function() {
      // uncomment below and update the code to test the property ruleSets
      //var instance = new CompetitionLabsAdminServices.CompetitionAllOf();
      //expect(instance).to.be();
    });

    it('should have the property scheduledStartDate (base name: "scheduledStartDate")', function() {
      // uncomment below and update the code to test the property scheduledStartDate
      //var instance = new CompetitionLabsAdminServices.CompetitionAllOf();
      //expect(instance).to.be();
    });

    it('should have the property scheduledEndDate (base name: "scheduledEndDate")', function() {
      // uncomment below and update the code to test the property scheduledEndDate
      //var instance = new CompetitionLabsAdminServices.CompetitionAllOf();
      //expect(instance).to.be();
    });

    it('should have the property actualStartDate (base name: "actualStartDate")', function() {
      // uncomment below and update the code to test the property actualStartDate
      //var instance = new CompetitionLabsAdminServices.CompetitionAllOf();
      //expect(instance).to.be();
    });

    it('should have the property actualEndDate (base name: "actualEndDate")', function() {
      // uncomment below and update the code to test the property actualEndDate
      //var instance = new CompetitionLabsAdminServices.CompetitionAllOf();
      //expect(instance).to.be();
    });

    it('should have the property translations (base name: "translations")', function() {
      // uncomment below and update the code to test the property translations
      //var instance = new CompetitionLabsAdminServices.CompetitionAllOf();
      //expect(instance).to.be();
    });

    it('should have the property translatableFields (base name: "translatableFields")', function() {
      // uncomment below and update the code to test the property translatableFields
      //var instance = new CompetitionLabsAdminServices.CompetitionAllOf();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new CompetitionLabsAdminServices.CompetitionAllOf();
      //expect(instance).to.be();
    });

    it('should have the property statusCode (base name: "statusCode")', function() {
      // uncomment below and update the code to test the property statusCode
      //var instance = new CompetitionLabsAdminServices.CompetitionAllOf();
      //expect(instance).to.be();
    });

    it('should have the property contests (base name: "contests")', function() {
      // uncomment below and update the code to test the property contests
      //var instance = new CompetitionLabsAdminServices.CompetitionAllOf();
      //expect(instance).to.be();
    });

    it('should have the property rewards (base name: "rewards")', function() {
      // uncomment below and update the code to test the property rewards
      //var instance = new CompetitionLabsAdminServices.CompetitionAllOf();
      //expect(instance).to.be();
    });

    it('should have the property constraints (base name: "constraints")', function() {
      // uncomment below and update the code to test the property constraints
      //var instance = new CompetitionLabsAdminServices.CompetitionAllOf();
      //expect(instance).to.be();
    });

    it('should have the property products (base name: "products")', function() {
      // uncomment below and update the code to test the property products
      //var instance = new CompetitionLabsAdminServices.CompetitionAllOf();
      //expect(instance).to.be();
    });

  });

}));
