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
    instance = new CompetitionLabsAdminServices.CreateCustomFieldRequest();
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

  describe('CreateCustomFieldRequest', function() {
    it('should create an instance of CreateCustomFieldRequest', function() {
      // uncomment below and update the code to test CreateCustomFieldRequest
      //var instane = new CompetitionLabsAdminServices.CreateCustomFieldRequest();
      //expect(instance).to.be.a(CompetitionLabsAdminServices.CreateCustomFieldRequest);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new CompetitionLabsAdminServices.CreateCustomFieldRequest();
      //expect(instance).to.be();
    });

    it('should have the property key (base name: "key")', function() {
      // uncomment below and update the code to test the property key
      //var instance = new CompetitionLabsAdminServices.CreateCustomFieldRequest();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new CompetitionLabsAdminServices.CreateCustomFieldRequest();
      //expect(instance).to.be();
    });

    it('should have the property fieldType (base name: "fieldType")', function() {
      // uncomment below and update the code to test the property fieldType
      //var instance = new CompetitionLabsAdminServices.CreateCustomFieldRequest();
      //expect(instance).to.be();
    });

    it('should have the property appliesTo (base name: "appliesTo")', function() {
      // uncomment below and update the code to test the property appliesTo
      //var instance = new CompetitionLabsAdminServices.CreateCustomFieldRequest();
      //expect(instance).to.be();
    });

  });

}));
