/**
 * CompetitionLabs Application Services
 * CompetitionLabs Application Services are used to manage and configure spaces.
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
    instance = new CompetitionLabsApplicationServices.AttachmentAllOf();
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

  describe('AttachmentAllOf', function() {
    it('should create an instance of AttachmentAllOf', function() {
      // uncomment below and update the code to test AttachmentAllOf
      //var instane = new CompetitionLabsApplicationServices.AttachmentAllOf();
      //expect(instance).to.be.a(CompetitionLabsApplicationServices.AttachmentAllOf);
    });

    it('should have the property attachmentType (base name: "attachmentType")', function() {
      // uncomment below and update the code to test the property attachmentType
      //var instance = new CompetitionLabsApplicationServices.AttachmentAllOf();
      //expect(instance).to.be();
    });

    it('should have the property md5Hash (base name: "md5Hash")', function() {
      // uncomment below and update the code to test the property md5Hash
      //var instance = new CompetitionLabsApplicationServices.AttachmentAllOf();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new CompetitionLabsApplicationServices.AttachmentAllOf();
      //expect(instance).to.be();
    });

    it('should have the property mimeType (base name: "mimeType")', function() {
      // uncomment below and update the code to test the property mimeType
      //var instance = new CompetitionLabsApplicationServices.AttachmentAllOf();
      //expect(instance).to.be();
    });

    it('should have the property extension (base name: "extension")', function() {
      // uncomment below and update the code to test the property extension
      //var instance = new CompetitionLabsApplicationServices.AttachmentAllOf();
      //expect(instance).to.be();
    });

    it('should have the property locationKey (base name: "locationKey")', function() {
      // uncomment below and update the code to test the property locationKey
      //var instance = new CompetitionLabsApplicationServices.AttachmentAllOf();
      //expect(instance).to.be();
    });

    it('should have the property locationFolder (base name: "locationFolder")', function() {
      // uncomment below and update the code to test the property locationFolder
      //var instance = new CompetitionLabsApplicationServices.AttachmentAllOf();
      //expect(instance).to.be();
    });

    it('should have the property permission (base name: "permission")', function() {
      // uncomment below and update the code to test the property permission
      //var instance = new CompetitionLabsApplicationServices.AttachmentAllOf();
      //expect(instance).to.be();
    });

  });

}));
