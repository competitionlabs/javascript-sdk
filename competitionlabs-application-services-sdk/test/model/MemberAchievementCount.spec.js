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
    instance = new CompetitionLabsApplicationServices.MemberAchievementCount();
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

  describe('MemberAchievementCount', function() {
    it('should create an instance of MemberAchievementCount', function() {
      // uncomment below and update the code to test MemberAchievementCount
      //var instane = new CompetitionLabsApplicationServices.MemberAchievementCount();
      //expect(instance).to.be.a(CompetitionLabsApplicationServices.MemberAchievementCount);
    });

    it('should have the property entityId (base name: "entityId")', function() {
      // uncomment below and update the code to test the property entityId
      //var instance = new CompetitionLabsApplicationServices.MemberAchievementCount();
      //expect(instance).to.be();
    });

    it('should have the property countValue (base name: "countValue")', function() {
      // uncomment below and update the code to test the property countValue
      //var instance = new CompetitionLabsApplicationServices.MemberAchievementCount();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new CompetitionLabsApplicationServices.MemberAchievementCount();
      //expect(instance).to.be();
    });

    it('should have the property memberId (base name: "memberId")', function() {
      // uncomment below and update the code to test the property memberId
      //var instance = new CompetitionLabsApplicationServices.MemberAchievementCount();
      //expect(instance).to.be();
    });

    it('should have the property memberRefId (base name: "memberRefId")', function() {
      // uncomment below and update the code to test the property memberRefId
      //var instance = new CompetitionLabsApplicationServices.MemberAchievementCount();
      //expect(instance).to.be();
    });

    it('should have the property latestIssuedTimestamp (base name: "latestIssuedTimestamp")', function() {
      // uncomment below and update the code to test the property latestIssuedTimestamp
      //var instance = new CompetitionLabsApplicationServices.MemberAchievementCount();
      //expect(instance).to.be();
    });

  });

}));
