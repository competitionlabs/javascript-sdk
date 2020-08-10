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
    instance = new CompetitionLabsApplicationServices.CreateSqsConnectionRequestAllOf();
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

  describe('CreateSqsConnectionRequestAllOf', function() {
    it('should create an instance of CreateSqsConnectionRequestAllOf', function() {
      // uncomment below and update the code to test CreateSqsConnectionRequestAllOf
      //var instane = new CompetitionLabsApplicationServices.CreateSqsConnectionRequestAllOf();
      //expect(instance).to.be.a(CompetitionLabsApplicationServices.CreateSqsConnectionRequestAllOf);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new CompetitionLabsApplicationServices.CreateSqsConnectionRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property uri (base name: "uri")', function() {
      // uncomment below and update the code to test the property uri
      //var instane = new CompetitionLabsApplicationServices.CreateSqsConnectionRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property acessKey (base name: "acessKey")', function() {
      // uncomment below and update the code to test the property acessKey
      //var instane = new CompetitionLabsApplicationServices.CreateSqsConnectionRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property secretKey (base name: "secretKey")', function() {
      // uncomment below and update the code to test the property secretKey
      //var instane = new CompetitionLabsApplicationServices.CreateSqsConnectionRequestAllOf();
      //expect(instance).to.be();
    });

    it('should have the property transformerId (base name: "transformerId")', function() {
      // uncomment below and update the code to test the property transformerId
      //var instane = new CompetitionLabsApplicationServices.CreateSqsConnectionRequestAllOf();
      //expect(instance).to.be();
    });

  });

}));
