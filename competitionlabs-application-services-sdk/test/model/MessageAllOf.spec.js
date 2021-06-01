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
    instance = new CompetitionLabsAdminServices.MessageAllOf();
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

  describe('MessageAllOf', function() {
    it('should create an instance of MessageAllOf', function() {
      // uncomment below and update the code to test MessageAllOf
      //var instane = new CompetitionLabsAdminServices.MessageAllOf();
      //expect(instance).to.be.a(CompetitionLabsAdminServices.MessageAllOf);
    });

    it('should have the property dependantOn (base name: "dependantOn")', function() {
      // uncomment below and update the code to test the property dependantOn
      //var instance = new CompetitionLabsAdminServices.MessageAllOf();
      //expect(instance).to.be();
    });

    it('should have the property messageType (base name: "messageType")', function() {
      // uncomment below and update the code to test the property messageType
      //var instance = new CompetitionLabsAdminServices.MessageAllOf();
      //expect(instance).to.be();
    });

    it('should have the property subject (base name: "subject")', function() {
      // uncomment below and update the code to test the property subject
      //var instance = new CompetitionLabsAdminServices.MessageAllOf();
      //expect(instance).to.be();
    });

    it('should have the property body (base name: "body")', function() {
      // uncomment below and update the code to test the property body
      //var instance = new CompetitionLabsAdminServices.MessageAllOf();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new CompetitionLabsAdminServices.MessageAllOf();
      //expect(instance).to.be();
    });

    it('should have the property scheduling (base name: "scheduling")', function() {
      // uncomment below and update the code to test the property scheduling
      //var instance = new CompetitionLabsAdminServices.MessageAllOf();
      //expect(instance).to.be();
    });

    it('should have the property translations (base name: "translations")', function() {
      // uncomment below and update the code to test the property translations
      //var instance = new CompetitionLabsAdminServices.MessageAllOf();
      //expect(instance).to.be();
    });

    it('should have the property translatableFields (base name: "translatableFields")', function() {
      // uncomment below and update the code to test the property translatableFields
      //var instance = new CompetitionLabsAdminServices.MessageAllOf();
      //expect(instance).to.be();
    });

    it('should have the property prize (base name: "prize")', function() {
      // uncomment below and update the code to test the property prize
      //var instance = new CompetitionLabsAdminServices.MessageAllOf();
      //expect(instance).to.be();
    });

    it('should have the property constraints (base name: "constraints")', function() {
      // uncomment below and update the code to test the property constraints
      //var instance = new CompetitionLabsAdminServices.MessageAllOf();
      //expect(instance).to.be();
    });

    it('should have the property eventReferenceId (base name: "eventReferenceId")', function() {
      // uncomment below and update the code to test the property eventReferenceId
      //var instance = new CompetitionLabsAdminServices.MessageAllOf();
      //expect(instance).to.be();
    });

    it('should have the property eventRefType (base name: "eventRefType")', function() {
      // uncomment below and update the code to test the property eventRefType
      //var instance = new CompetitionLabsAdminServices.MessageAllOf();
      //expect(instance).to.be();
    });

  });

}));
