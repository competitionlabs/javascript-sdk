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
    instance = new CompetitionLabsAdminServices.UpdateMemberRequest();
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

  describe('UpdateMemberRequest', function() {
    it('should create an instance of UpdateMemberRequest', function() {
      // uncomment below and update the code to test UpdateMemberRequest
      //var instane = new CompetitionLabsAdminServices.UpdateMemberRequest();
      //expect(instance).to.be.a(CompetitionLabsAdminServices.UpdateMemberRequest);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new CompetitionLabsAdminServices.UpdateMemberRequest();
      //expect(instance).to.be();
    });

    it('should have the property customFields (base name: "customFields")', function() {
      // uncomment below and update the code to test the property customFields
      //var instance = new CompetitionLabsAdminServices.UpdateMemberRequest();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instance = new CompetitionLabsAdminServices.UpdateMemberRequest();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instance = new CompetitionLabsAdminServices.UpdateMemberRequest();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new CompetitionLabsAdminServices.UpdateMemberRequest();
      //expect(instance).to.be();
    });

    it('should have the property memberType (base name: "memberType")', function() {
      // uncomment below and update the code to test the property memberType
      //var instance = new CompetitionLabsAdminServices.UpdateMemberRequest();
      //expect(instance).to.be();
    });

    it('should have the property teamMembers (base name: "teamMembers")', function() {
      // uncomment below and update the code to test the property teamMembers
      //var instance = new CompetitionLabsAdminServices.UpdateMemberRequest();
      //expect(instance).to.be();
    });

    it('should have the property constraints (base name: "constraints")', function() {
      // uncomment below and update the code to test the property constraints
      //var instance = new CompetitionLabsAdminServices.UpdateMemberRequest();
      //expect(instance).to.be();
    });

    it('should have the property timeZoneOffset (base name: "timeZoneOffset")', function() {
      // uncomment below and update the code to test the property timeZoneOffset
      //var instance = new CompetitionLabsAdminServices.UpdateMemberRequest();
      //expect(instance).to.be();
    });

  });

}));
