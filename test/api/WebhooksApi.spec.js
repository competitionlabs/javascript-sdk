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
    instance = new @CompetitionlabsJavascriptSdk.WebhooksApi();
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

  describe('WebhooksApi', function() {
    describe('createWebhooks', function() {
      it('should call createWebhooks successfully', function(done) {
        //uncomment below and update the code to test createWebhooks
        //instance.createWebhooks(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteWebhooks', function() {
      it('should call deleteWebhooks successfully', function(done) {
        //uncomment below and update the code to test deleteWebhooks
        //instance.deleteWebhooks(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteWebhooksByQuery', function() {
      it('should call deleteWebhooksByQuery successfully', function(done) {
        //uncomment below and update the code to test deleteWebhooksByQuery
        //instance.deleteWebhooksByQuery(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWebhooks', function() {
      it('should call getWebhooks successfully', function(done) {
        //uncomment below and update the code to test getWebhooks
        //instance.getWebhooks(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWebhooksByQuery', function() {
      it('should call getWebhooksByQuery successfully', function(done) {
        //uncomment below and update the code to test getWebhooksByQuery
        //instance.getWebhooksByQuery(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateWebhooks', function() {
      it('should call updateWebhooks successfully', function(done) {
        //uncomment below and update the code to test updateWebhooks
        //instance.updateWebhooks(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateWebhooksState', function() {
      it('should call updateWebhooksState successfully', function(done) {
        //uncomment below and update the code to test updateWebhooksState
        //instance.updateWebhooksState(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
