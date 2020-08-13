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
    instance = new @CompetitionlabsJavascriptSdk.UpdateApiKeyRequestAllOf();
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

  describe('UpdateApiKeyRequestAllOf', function() {
    it('should create an instance of UpdateApiKeyRequestAllOf', function() {
      // uncomment below and update the code to test UpdateApiKeyRequestAllOf
      //var instane = new @CompetitionlabsJavascriptSdk.UpdateApiKeyRequestAllOf();
      //expect(instance).to.be.a(@CompetitionlabsJavascriptSdk.UpdateApiKeyRequestAllOf);
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instane = new @CompetitionlabsJavascriptSdk.UpdateApiKeyRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new @CompetitionlabsJavascriptSdk.UpdateApiKeyRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property whiteListIPs (base name: "whiteListIPs")', function() {
      // uncomment below and update the code to test the property whiteListIPs
      //var instane = new @CompetitionlabsJavascriptSdk.UpdateApiKeyRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property role (base name: "role")', function() {
      // uncomment below and update the code to test the property role
      //var instane = new @CompetitionlabsJavascriptSdk.UpdateApiKeyRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property _default (base name: "default")', function() {
      // uncomment below and update the code to test the property _default
      //var instane = new @CompetitionlabsJavascriptSdk.UpdateApiKeyRequestAllOf();
      //expect(instance).to.be();
    });

  });

}));
