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
    instance = new CompetitionLabsApplicationServices.ComplexFilter();
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

  describe('ComplexFilter', function() {
    it('should create an instance of ComplexFilter', function() {
      // uncomment below and update the code to test ComplexFilter
      //var instane = new CompetitionLabsApplicationServices.ComplexFilter();
      //expect(instance).to.be.a(CompetitionLabsApplicationServices.ComplexFilter);
    });

    it('should have the property must (base name: "must")', function() {
      // uncomment below and update the code to test the property must
      //var instane = new CompetitionLabsApplicationServices.ComplexFilter();
      //expect(instance).to.be();
    });

    it('should have the property mustNot (base name: "mustNot")', function() {
      // uncomment below and update the code to test the property mustNot
      //var instane = new CompetitionLabsApplicationServices.ComplexFilter();
      //expect(instance).to.be();
    });

    it('should have the property should (base name: "should")', function() {
      // uncomment below and update the code to test the property should
      //var instane = new CompetitionLabsApplicationServices.ComplexFilter();
      //expect(instance).to.be();
    });

    it('should have the property shouldMatchAtLeast (base name: "shouldMatchAtLeast")', function() {
      // uncomment below and update the code to test the property shouldMatchAtLeast
      //var instane = new CompetitionLabsApplicationServices.ComplexFilter();
      //expect(instance).to.be();
    });

  });

}));
