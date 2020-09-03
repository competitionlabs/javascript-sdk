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
    factory(root.expect, root.@CompetitionlabsInsightsServicesSdk);
  }
}(this, function(expect, @CompetitionlabsInsightsServicesSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new @CompetitionlabsInsightsServicesSdk.TransformersApi();
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

  describe('TransformersApi', function() {
    describe('createTransformers', function() {
      it('should call createTransformers successfully', function(done) {
        //uncomment below and update the code to test createTransformers
        //instance.createTransformers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteTransformers', function() {
      it('should call deleteTransformers successfully', function(done) {
        //uncomment below and update the code to test deleteTransformers
        //instance.deleteTransformers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteTransformersByQuery', function() {
      it('should call deleteTransformersByQuery successfully', function(done) {
        //uncomment below and update the code to test deleteTransformersByQuery
        //instance.deleteTransformersByQuery(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTransformers', function() {
      it('should call getTransformers successfully', function(done) {
        //uncomment below and update the code to test getTransformers
        //instance.getTransformers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTransformersByQuery', function() {
      it('should call getTransformersByQuery successfully', function(done) {
        //uncomment below and update the code to test getTransformersByQuery
        //instance.getTransformersByQuery(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateTransformers', function() {
      it('should call updateTransformers successfully', function(done) {
        //uncomment below and update the code to test updateTransformers
        //instance.updateTransformers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
