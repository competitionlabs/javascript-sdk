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
    instance = new CompetitionLabsApplicationServices.Contact();
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

  describe('Contact', function() {
    it('should create an instance of Contact', function() {
      // uncomment below and update the code to test Contact
      //var instane = new CompetitionLabsApplicationServices.Contact();
      //expect(instance).to.be.a(CompetitionLabsApplicationServices.Contact);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new CompetitionLabsApplicationServices.Contact();
      //expect(instance).to.be();
    });

    it('should have the property spaceName (base name: "spaceName")', function() {
      // uncomment below and update the code to test the property spaceName
      //var instane = new CompetitionLabsApplicationServices.Contact();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instane = new CompetitionLabsApplicationServices.Contact();
      //expect(instance).to.be();
    });

    it('should have the property addressLine1 (base name: "addressLine1")', function() {
      // uncomment below and update the code to test the property addressLine1
      //var instane = new CompetitionLabsApplicationServices.Contact();
      //expect(instance).to.be();
    });

    it('should have the property addressLine2 (base name: "addressLine2")', function() {
      // uncomment below and update the code to test the property addressLine2
      //var instane = new CompetitionLabsApplicationServices.Contact();
      //expect(instance).to.be();
    });

    it('should have the property city (base name: "city")', function() {
      // uncomment below and update the code to test the property city
      //var instane = new CompetitionLabsApplicationServices.Contact();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instane = new CompetitionLabsApplicationServices.Contact();
      //expect(instance).to.be();
    });

    it('should have the property zipPostalCode (base name: "zipPostalCode")', function() {
      // uncomment below and update the code to test the property zipPostalCode
      //var instane = new CompetitionLabsApplicationServices.Contact();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "country")', function() {
      // uncomment below and update the code to test the property country
      //var instane = new CompetitionLabsApplicationServices.Contact();
      //expect(instance).to.be();
    });

    it('should have the property mobileNumber (base name: "mobileNumber")', function() {
      // uncomment below and update the code to test the property mobileNumber
      //var instane = new CompetitionLabsApplicationServices.Contact();
      //expect(instance).to.be();
    });

    it('should have the property phoneNumber (base name: "phoneNumber")', function() {
      // uncomment below and update the code to test the property phoneNumber
      //var instane = new CompetitionLabsApplicationServices.Contact();
      //expect(instance).to.be();
    });

    it('should have the property geoLocation (base name: "geoLocation")', function() {
      // uncomment below and update the code to test the property geoLocation
      //var instane = new CompetitionLabsApplicationServices.Contact();
      //expect(instance).to.be();
    });

  });

}));