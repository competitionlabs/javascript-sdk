/**
 * CompetitionLabs Application Services
 * CompetitionLabs Application Services are used to manage and configure spaces.
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
    instance = new CompetitionLabsApplicationServices.RuleSet();
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

  describe('RuleSet', function() {
    it('should create an instance of RuleSet', function() {
      // uncomment below and update the code to test RuleSet
      //var instane = new CompetitionLabsApplicationServices.RuleSet();
      //expect(instance).to.be.a(CompetitionLabsApplicationServices.RuleSet);
    });

    it('should have the property customFields (base name: "customFields")', function() {
      // uncomment below and update the code to test the property customFields
      //var instance = new CompetitionLabsApplicationServices.RuleSet();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instance = new CompetitionLabsApplicationServices.RuleSet();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instance = new CompetitionLabsApplicationServices.RuleSet();
      //expect(instance).to.be();
    });

    it('should have the property priority (base name: "priority")', function() {
      // uncomment below and update the code to test the property priority
      //var instance = new CompetitionLabsApplicationServices.RuleSet();
      //expect(instance).to.be();
    });

    it('should have the property scope (base name: "scope")', function() {
      // uncomment below and update the code to test the property scope
      //var instance = new CompetitionLabsApplicationServices.RuleSet();
      //expect(instance).to.be();
    });

    it('should have the property action (base name: "action")', function() {
      // uncomment below and update the code to test the property action
      //var instance = new CompetitionLabsApplicationServices.RuleSet();
      //expect(instance).to.be();
    });

    it('should have the property conditions (base name: "conditions")', function() {
      // uncomment below and update the code to test the property conditions
      //var instance = new CompetitionLabsApplicationServices.RuleSet();
      //expect(instance).to.be();
    });

    it('should have the property onMatchThen (base name: "onMatchThen")', function() {
      // uncomment below and update the code to test the property onMatchThen
      //var instance = new CompetitionLabsApplicationServices.RuleSet();
      //expect(instance).to.be();
    });

    it('should have the property onMatchConstant (base name: "onMatchConstant")', function() {
      // uncomment below and update the code to test the property onMatchConstant
      //var instance = new CompetitionLabsApplicationServices.RuleSet();
      //expect(instance).to.be();
    });

  });

}));
