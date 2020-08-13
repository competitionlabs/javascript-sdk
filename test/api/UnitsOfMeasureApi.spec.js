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
    instance = new @CompetitionlabsJavascriptSdk.UnitsOfMeasureApi();
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

  describe('UnitsOfMeasureApi', function() {
    describe('createUnitsOfMeasure', function() {
      it('should call createUnitsOfMeasure successfully', function(done) {
        //uncomment below and update the code to test createUnitsOfMeasure
        //instance.createUnitsOfMeasure(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteUnitsOfMeasure', function() {
      it('should call deleteUnitsOfMeasure successfully', function(done) {
        //uncomment below and update the code to test deleteUnitsOfMeasure
        //instance.deleteUnitsOfMeasure(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteUnitsOfMeasureByQuery', function() {
      it('should call deleteUnitsOfMeasureByQuery successfully', function(done) {
        //uncomment below and update the code to test deleteUnitsOfMeasureByQuery
        //instance.deleteUnitsOfMeasureByQuery(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUnitsOfMeasure', function() {
      it('should call getUnitsOfMeasure successfully', function(done) {
        //uncomment below and update the code to test getUnitsOfMeasure
        //instance.getUnitsOfMeasure(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUnitsOfMeasureByQuery', function() {
      it('should call getUnitsOfMeasureByQuery successfully', function(done) {
        //uncomment below and update the code to test getUnitsOfMeasureByQuery
        //instance.getUnitsOfMeasureByQuery(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateUnitsOfMeasure', function() {
      it('should call updateUnitsOfMeasure successfully', function(done) {
        //uncomment below and update the code to test updateUnitsOfMeasure
        //instance.updateUnitsOfMeasure(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
