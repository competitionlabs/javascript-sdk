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
    instance = new CompetitionLabsAdminServices.RulesApi();
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

  describe('RulesApi', function() {
    describe('getRulesByRuleScope', function() {
      it('should call getRulesByRuleScope successfully', function(done) {
        //uncomment below and update the code to test getRulesByRuleScope
        //instance.getRulesByRuleScope(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('validateRulesByRuleScope', function() {
      it('should call validateRulesByRuleScope successfully', function(done) {
        //uncomment below and update the code to test validateRulesByRuleScope
        //instance.validateRulesByRuleScope(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
