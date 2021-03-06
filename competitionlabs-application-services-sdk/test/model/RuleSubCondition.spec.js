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
    instance = new CompetitionLabsAdminServices.RuleSubCondition();
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

  describe('RuleSubCondition', function() {
    it('should create an instance of RuleSubCondition', function() {
      // uncomment below and update the code to test RuleSubCondition
      //var instane = new CompetitionLabsAdminServices.RuleSubCondition();
      //expect(instance).to.be.a(CompetitionLabsAdminServices.RuleSubCondition);
    });

    it('should have the property matchCondition (base name: "matchCondition")', function() {
      // uncomment below and update the code to test the property matchCondition
      //var instance = new CompetitionLabsAdminServices.RuleSubCondition();
      //expect(instance).to.be();
    });

    it('should have the property subRules (base name: "subRules")', function() {
      // uncomment below and update the code to test the property subRules
      //var instance = new CompetitionLabsAdminServices.RuleSubCondition();
      //expect(instance).to.be();
    });

    it('should have the property constraints (base name: "constraints")', function() {
      // uncomment below and update the code to test the property constraints
      //var instance = new CompetitionLabsAdminServices.RuleSubCondition();
      //expect(instance).to.be();
    });

  });

}));
