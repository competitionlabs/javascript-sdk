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
    instance = new @CompetitionlabsJavascriptSdk.RuleDescriptorSubFact();
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

  describe('RuleDescriptorSubFact', function() {
    it('should create an instance of RuleDescriptorSubFact', function() {
      // uncomment below and update the code to test RuleDescriptorSubFact
      //var instane = new @CompetitionlabsJavascriptSdk.RuleDescriptorSubFact();
      //expect(instance).to.be.a(@CompetitionlabsJavascriptSdk.RuleDescriptorSubFact);
    });

    it('should have the property operators (base name: "operators")', function() {
      // uncomment below and update the code to test the property operators
      //var instane = new @CompetitionlabsJavascriptSdk.RuleDescriptorSubFact();
      //expect(instance).to.be();
    });

    it('should have the property constantType (base name: "constantType")', function() {
      // uncomment below and update the code to test the property constantType
      //var instane = new @CompetitionlabsJavascriptSdk.RuleDescriptorSubFact();
      //expect(instance).to.be();
    });

    it('should have the property constantExample (base name: "constantExample")', function() {
      // uncomment below and update the code to test the property constantExample
      //var instane = new @CompetitionlabsJavascriptSdk.RuleDescriptorSubFact();
      //expect(instance).to.be();
    });

    it('should have the property defaultVale (base name: "defaultVale")', function() {
      // uncomment below and update the code to test the property defaultVale
      //var instane = new @CompetitionlabsJavascriptSdk.RuleDescriptorSubFact();
      //expect(instance).to.be();
    });

    it('should have the property macros (base name: "macros")', function() {
      // uncomment below and update the code to test the property macros
      //var instane = new @CompetitionlabsJavascriptSdk.RuleDescriptorSubFact();
      //expect(instance).to.be();
    });

    it('should have the property subFact (base name: "subFact")', function() {
      // uncomment below and update the code to test the property subFact
      //var instane = new @CompetitionlabsJavascriptSdk.RuleDescriptorSubFact();
      //expect(instance).to.be();
    });

  });

}));
