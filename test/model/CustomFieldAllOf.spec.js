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
    instance = new CompetitionLabsApplicationServices.CustomFieldAllOf();
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

  describe('CustomFieldAllOf', function() {
    it('should create an instance of CustomFieldAllOf', function() {
      // uncomment below and update the code to test CustomFieldAllOf
      //var instane = new CompetitionLabsApplicationServices.CustomFieldAllOf();
      //expect(instance).to.be.a(CompetitionLabsApplicationServices.CustomFieldAllOf);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new CompetitionLabsApplicationServices.CustomFieldAllOf();
      //expect(instance).to.be();
    });

    it('should have the property term (base name: "term")', function() {
      // uncomment below and update the code to test the property term
      //var instane = new CompetitionLabsApplicationServices.CustomFieldAllOf();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new CompetitionLabsApplicationServices.CustomFieldAllOf();
      //expect(instance).to.be();
    });

    it('should have the property fieldType (base name: "fieldType")', function() {
      // uncomment below and update the code to test the property fieldType
      //var instane = new CompetitionLabsApplicationServices.CustomFieldAllOf();
      //expect(instance).to.be();
    });

    it('should have the property appliesTo (base name: "appliesTo")', function() {
      // uncomment below and update the code to test the property appliesTo
      //var instane = new CompetitionLabsApplicationServices.CustomFieldAllOf();
      //expect(instance).to.be();
    });

  });

}));
