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
    instance = new CompetitionLabsApplicationServices.Product();
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

  describe('Product', function() {
    it('should create an instance of Product', function() {
      // uncomment below and update the code to test Product
      //var instane = new CompetitionLabsApplicationServices.Product();
      //expect(instance).to.be.a(CompetitionLabsApplicationServices.Product);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new CompetitionLabsApplicationServices.Product();
      //expect(instance).to.be();
    });

    it('should have the property spaceName (base name: "spaceName")', function() {
      // uncomment below and update the code to test the property spaceName
      //var instane = new CompetitionLabsApplicationServices.Product();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instane = new CompetitionLabsApplicationServices.Product();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new CompetitionLabsApplicationServices.Product();
      //expect(instance).to.be();
    });

    it('should have the property productType (base name: "productType")', function() {
      // uncomment below and update the code to test the property productType
      //var instane = new CompetitionLabsApplicationServices.Product();
      //expect(instance).to.be();
    });

    it('should have the property productTypeName (base name: "productTypeName")', function() {
      // uncomment below and update the code to test the property productTypeName
      //var instane = new CompetitionLabsApplicationServices.Product();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new CompetitionLabsApplicationServices.Product();
      //expect(instance).to.be();
    });

    it('should have the property adjustmentFactor (base name: "adjustmentFactor")', function() {
      // uncomment below and update the code to test the property adjustmentFactor
      //var instane = new CompetitionLabsApplicationServices.Product();
      //expect(instance).to.be();
    });

    it('should have the property productRefId (base name: "productRefId")', function() {
      // uncomment below and update the code to test the property productRefId
      //var instane = new CompetitionLabsApplicationServices.Product();
      //expect(instance).to.be();
    });

    it('should have the property actionTypeAdjustmentFactors (base name: "actionTypeAdjustmentFactors")', function() {
      // uncomment below and update the code to test the property actionTypeAdjustmentFactors
      //var instane = new CompetitionLabsApplicationServices.Product();
      //expect(instance).to.be();
    });

    it('should have the property productGroups (base name: "productGroups")', function() {
      // uncomment below and update the code to test the property productGroups
      //var instane = new CompetitionLabsApplicationServices.Product();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instane = new CompetitionLabsApplicationServices.Product();
      //expect(instance).to.be();
    });

    it('should have the property translations (base name: "translations")', function() {
      // uncomment below and update the code to test the property translations
      //var instane = new CompetitionLabsApplicationServices.Product();
      //expect(instance).to.be();
    });

    it('should have the property translatableFields (base name: "translatableFields")', function() {
      // uncomment below and update the code to test the property translatableFields
      //var instane = new CompetitionLabsApplicationServices.Product();
      //expect(instance).to.be();
    });

  });

}));
