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
    instance = new @CompetitionlabsJavascriptSdk.Rule();
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

  describe('Rule', function() {
    it('should create an instance of Rule', function() {
      // uncomment below and update the code to test Rule
      //var instane = new @CompetitionlabsJavascriptSdk.Rule();
      //expect(instance).to.be.a(@CompetitionlabsJavascriptSdk.Rule);
    });

    it('should have the property fact (base name: "fact")', function() {
      // uncomment below and update the code to test the property fact
      //var instane = new @CompetitionlabsJavascriptSdk.Rule();
      //expect(instance).to.be();
    });

    it('should have the property operator (base name: "operator")', function() {
      // uncomment below and update the code to test the property operator
      //var instane = new @CompetitionlabsJavascriptSdk.Rule();
      //expect(instance).to.be();
    });

    it('should have the property constant (base name: "constant")', function() {
      // uncomment below and update the code to test the property constant
      //var instane = new @CompetitionlabsJavascriptSdk.Rule();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new @CompetitionlabsJavascriptSdk.Rule();
      //expect(instance).to.be();
    });

    it('should have the property subConditions (base name: "subConditions")', function() {
      // uncomment below and update the code to test the property subConditions
      //var instane = new @CompetitionlabsJavascriptSdk.Rule();
      //expect(instance).to.be();
    });

  });

}));
