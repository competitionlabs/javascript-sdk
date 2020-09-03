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
    instance = new @CompetitionlabsInsightsServicesSdk.ProductsApi();
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

  describe('ProductsApi', function() {
    describe('createProducts', function() {
      it('should call createProducts successfully', function(done) {
        //uncomment below and update the code to test createProducts
        //instance.createProducts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteProducts', function() {
      it('should call deleteProducts successfully', function(done) {
        //uncomment below and update the code to test deleteProducts
        //instance.deleteProducts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteProductsByQuery', function() {
      it('should call deleteProductsByQuery successfully', function(done) {
        //uncomment below and update the code to test deleteProductsByQuery
        //instance.deleteProductsByQuery(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAchievementsForProducts', function() {
      it('should call getAchievementsForProducts successfully', function(done) {
        //uncomment below and update the code to test getAchievementsForProducts
        //instance.getAchievementsForProducts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCompetitionsForProducts', function() {
      it('should call getCompetitionsForProducts successfully', function(done) {
        //uncomment below and update the code to test getCompetitionsForProducts
        //instance.getCompetitionsForProducts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getContestsForProducts', function() {
      it('should call getContestsForProducts successfully', function(done) {
        //uncomment below and update the code to test getContestsForProducts
        //instance.getContestsForProducts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProducts', function() {
      it('should call getProducts successfully', function(done) {
        //uncomment below and update the code to test getProducts
        //instance.getProducts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductsByQuery', function() {
      it('should call getProductsByQuery successfully', function(done) {
        //uncomment below and update the code to test getProductsByQuery
        //instance.getProductsByQuery(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateProducts', function() {
      it('should call updateProducts successfully', function(done) {
        //uncomment below and update the code to test updateProducts
        //instance.updateProducts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
