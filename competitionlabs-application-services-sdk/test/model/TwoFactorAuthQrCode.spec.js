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
    instance = new CompetitionLabsAdminServices.TwoFactorAuthQrCode();
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

  describe('TwoFactorAuthQrCode', function() {
    it('should create an instance of TwoFactorAuthQrCode', function() {
      // uncomment below and update the code to test TwoFactorAuthQrCode
      //var instane = new CompetitionLabsAdminServices.TwoFactorAuthQrCode();
      //expect(instance).to.be.a(CompetitionLabsAdminServices.TwoFactorAuthQrCode);
    });

    it('should have the property barcodeUrl (base name: "barcodeUrl")', function() {
      // uncomment below and update the code to test the property barcodeUrl
      //var instance = new CompetitionLabsAdminServices.TwoFactorAuthQrCode();
      //expect(instance).to.be();
    });

    it('should have the property secretKey (base name: "secretKey")', function() {
      // uncomment below and update the code to test the property secretKey
      //var instance = new CompetitionLabsAdminServices.TwoFactorAuthQrCode();
      //expect(instance).to.be();
    });

  });

}));
