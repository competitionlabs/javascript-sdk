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
    instance = new @CompetitionlabsInsightsServicesSdk.MembersApi();
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

  describe('MembersApi', function() {
    describe('createMembers', function() {
      it('should call createMembers successfully', function(done) {
        //uncomment below and update the code to test createMembers
        //instance.createMembers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteMembers', function() {
      it('should call deleteMembers successfully', function(done) {
        //uncomment below and update the code to test deleteMembers
        //instance.deleteMembers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteMembersByQuery', function() {
      it('should call deleteMembersByQuery successfully', function(done) {
        //uncomment below and update the code to test deleteMembersByQuery
        //instance.deleteMembersByQuery(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAchievementsForMembers', function() {
      it('should call getAchievementsForMembers successfully', function(done) {
        //uncomment below and update the code to test getAchievementsForMembers
        //instance.getAchievementsForMembers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAwardsForMembers', function() {
      it('should call getAwardsForMembers successfully', function(done) {
        //uncomment below and update the code to test getAwardsForMembers
        //instance.getAwardsForMembers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCompetitionsForMembers', function() {
      it('should call getCompetitionsForMembers successfully', function(done) {
        //uncomment below and update the code to test getCompetitionsForMembers
        //instance.getCompetitionsForMembers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getContestsForMembers', function() {
      it('should call getContestsForMembers successfully', function(done) {
        //uncomment below and update the code to test getContestsForMembers
        //instance.getContestsForMembers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMembers', function() {
      it('should call getMembers successfully', function(done) {
        //uncomment below and update the code to test getMembers
        //instance.getMembers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMembersByQuery', function() {
      it('should call getMembersByQuery successfully', function(done) {
        //uncomment below and update the code to test getMembersByQuery
        //instance.getMembersByQuery(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMessagesForMembers', function() {
      it('should call getMessagesForMembers successfully', function(done) {
        //uncomment below and update the code to test getMessagesForMembers
        //instance.getMessagesForMembers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateMembers', function() {
      it('should call updateMembers successfully', function(done) {
        //uncomment below and update the code to test updateMembers
        //instance.updateMembers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
