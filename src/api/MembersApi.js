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


import ApiClient from "../ApiClient";
import AchievementReducedResponse from '../model/AchievementReducedResponse';
import ApiResponse from '../model/ApiResponse';
import CompetitionReducedResponse from '../model/CompetitionReducedResponse';
import ContestReducedResponse from '../model/ContestReducedResponse';
import CreateMemberRequest from '../model/CreateMemberRequest';
import MemberAwardResponse from '../model/MemberAwardResponse';
import MemberMessageResponse from '../model/MemberMessageResponse';
import MemberResponse from '../model/MemberResponse';
import QueryRequest from '../model/QueryRequest';
import UpdateMemberRequest from '../model/UpdateMemberRequest';

/**
* Members service.
* @module api/MembersApi
* @version 1.0.0
*/
export default class MembersApi {

    /**
    * Constructs a new MembersApi. 
    * @alias module:api/MembersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createMembers operation.
     * @callback module:api/MembersApi~createMembersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create new Members in the CompetitionLabs database
     * @param {String} spaceName This is the space name which is linked to the account
     * @param {Array.<module:model/CreateMemberRequest>} body Create Members in the CompetitionLabs database. An array can contain a maximum of 10,000 members in one request
     * @param {Object} opts Optional parameters
     * @param {String} opts.X_API_KEY The admin API Key generated from CompetitionLabs back office
     * @param {module:api/MembersApi~createMembersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    createMembers(spaceName, body, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'spaceName' is set
      if (spaceName === undefined || spaceName === null) {
        throw new Error("Missing the required parameter 'spaceName' when calling createMembers");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createMembers");
      }

      let pathParams = {
        'spaceName': spaceName
      };
      let queryParams = {
      };
      let headerParams = {
        'X-API-KEY': opts['X_API_KEY']
      };
      let formParams = {
      };

      let authNames = ['adminApiKey'];
      let contentTypes = ['application/json', 'file/csv'];
      let accepts = ['application/json'];
      let returnType = ApiResponse;
      return this.apiClient.callApi(
        '/members/{spaceName}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteMembers operation.
     * @callback module:api/MembersApi~deleteMembersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Members for a given identifier specified
     * @param {String} spaceName This is the space name which is linked to the account
     * @param {Object} opts Optional parameters
     * @param {String} opts.X_API_KEY The admin API Key generated from CompetitionLabs back office
     * @param {Array.<String>} opts.id The unique identifiers of the resources
     * @param {module:api/MembersApi~deleteMembersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    deleteMembers(spaceName, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'spaceName' is set
      if (spaceName === undefined || spaceName === null) {
        throw new Error("Missing the required parameter 'spaceName' when calling deleteMembers");
      }

      let pathParams = {
        'spaceName': spaceName
      };
      let queryParams = {
        'id': this.apiClient.buildCollectionParam(opts['id'], 'multi')
      };
      let headerParams = {
        'X-API-KEY': opts['X_API_KEY']
      };
      let formParams = {
      };

      let authNames = ['adminApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ApiResponse;
      return this.apiClient.callApi(
        '/members/{spaceName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteMembersByQuery operation.
     * @callback module:api/MembersApi~deleteMembersByQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Members from CompetitionLabs database by unique Members ID's or any other POST body parameters using the POST method
     * @param {String} spaceName This is the space name which is linked to the account
     * @param {Object} opts Optional parameters
     * @param {String} opts.X_API_KEY The admin API Key generated from CompetitionLabs back office
     * @param {module:model/QueryRequest} opts.body Delete Members from CompetitionLabs database by unique Members ID's or any other POST body parameters using the POST method
     * @param {module:api/MembersApi~deleteMembersByQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    deleteMembersByQuery(spaceName, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'spaceName' is set
      if (spaceName === undefined || spaceName === null) {
        throw new Error("Missing the required parameter 'spaceName' when calling deleteMembersByQuery");
      }

      let pathParams = {
        'spaceName': spaceName
      };
      let queryParams = {
      };
      let headerParams = {
        'X-API-KEY': opts['X_API_KEY']
      };
      let formParams = {
      };

      let authNames = ['adminApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ApiResponse;
      return this.apiClient.callApi(
        '/members/{spaceName}/delete', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAchievementsForMembers operation.
     * @callback module:api/MembersApi~getAchievementsForMembersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AchievementReducedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of Achievements for the Member id provided
     * @param {String} spaceName This is the space name which is linked to the account
     * @param {String} id Unique identifier of the resource
     * @param {Object} opts Optional parameters
     * @param {String} opts.X_API_KEY The admin API Key generated from CompetitionLabs back office
     * @param {String} opts.achievementId Id of an Achievement
     * @param {Number} opts.limit Limit the returned total records found (default to 20)
     * @param {Number} opts.skip Skip the returned records found and return the next batch of records (default to 0)
     * @param {module:api/MembersApi~getAchievementsForMembersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AchievementReducedResponse}
     */
    getAchievementsForMembers(spaceName, id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'spaceName' is set
      if (spaceName === undefined || spaceName === null) {
        throw new Error("Missing the required parameter 'spaceName' when calling getAchievementsForMembers");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getAchievementsForMembers");
      }

      let pathParams = {
        'spaceName': spaceName,
        'id': id
      };
      let queryParams = {
        'achievementId': opts['achievementId'],
        '_limit': opts['limit'],
        '_skip': opts['skip']
      };
      let headerParams = {
        'X-API-KEY': opts['X_API_KEY']
      };
      let formParams = {
      };

      let authNames = ['adminApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = AchievementReducedResponse;
      return this.apiClient.callApi(
        '/members/{spaceName}/{id}/achievements', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAwardsForMembers operation.
     * @callback module:api/MembersApi~getAwardsForMembersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MemberAwardResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of Awards for the Member id provided
     * @param {String} spaceName This is the space name which is linked to the account
     * @param {String} id Unique identifier of the resource
     * @param {Object} opts Optional parameters
     * @param {String} opts.X_API_KEY The admin API Key generated from CompetitionLabs back office
     * @param {String} opts.awardId Id of an Award
     * @param {Number} opts.limit Limit the returned total records found (default to 20)
     * @param {Number} opts.skip Skip the returned records found and return the next batch of records (default to 0)
     * @param {module:api/MembersApi~getAwardsForMembersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MemberAwardResponse}
     */
    getAwardsForMembers(spaceName, id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'spaceName' is set
      if (spaceName === undefined || spaceName === null) {
        throw new Error("Missing the required parameter 'spaceName' when calling getAwardsForMembers");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getAwardsForMembers");
      }

      let pathParams = {
        'spaceName': spaceName,
        'id': id
      };
      let queryParams = {
        'awardId': opts['awardId'],
        '_limit': opts['limit'],
        '_skip': opts['skip']
      };
      let headerParams = {
        'X-API-KEY': opts['X_API_KEY']
      };
      let formParams = {
      };

      let authNames = ['adminApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MemberAwardResponse;
      return this.apiClient.callApi(
        '/members/{spaceName}/{id}/awards', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCompetitionsForMembers operation.
     * @callback module:api/MembersApi~getCompetitionsForMembersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CompetitionReducedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list Competitions for the Member id provided
     * @param {String} spaceName This is the space name which is linked to the account
     * @param {String} id Unique identifier of the resource
     * @param {Object} opts Optional parameters
     * @param {String} opts.X_API_KEY The admin API Key generated from CompetitionLabs back office
     * @param {String} opts.competitionId Id of a Competition
     * @param {Number} opts.limit Limit the returned total records found (default to 20)
     * @param {Number} opts.skip Skip the returned records found and return the next batch of records (default to 0)
     * @param {module:api/MembersApi~getCompetitionsForMembersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CompetitionReducedResponse}
     */
    getCompetitionsForMembers(spaceName, id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'spaceName' is set
      if (spaceName === undefined || spaceName === null) {
        throw new Error("Missing the required parameter 'spaceName' when calling getCompetitionsForMembers");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getCompetitionsForMembers");
      }

      let pathParams = {
        'spaceName': spaceName,
        'id': id
      };
      let queryParams = {
        'competitionId': opts['competitionId'],
        '_limit': opts['limit'],
        '_skip': opts['skip']
      };
      let headerParams = {
        'X-API-KEY': opts['X_API_KEY']
      };
      let formParams = {
      };

      let authNames = ['adminApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CompetitionReducedResponse;
      return this.apiClient.callApi(
        '/members/{spaceName}/{id}/competitions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getContestsForMembers operation.
     * @callback module:api/MembersApi~getContestsForMembersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContestReducedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of Contests for the Member id provided
     * @param {String} spaceName This is the space name which is linked to the account
     * @param {String} id Unique identifier of the resource
     * @param {Object} opts Optional parameters
     * @param {String} opts.X_API_KEY The admin API Key generated from CompetitionLabs back office
     * @param {String} opts.contestId Id of a Contest
     * @param {Number} opts.limit Limit the returned total records found (default to 20)
     * @param {Number} opts.skip Skip the returned records found and return the next batch of records (default to 0)
     * @param {module:api/MembersApi~getContestsForMembersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContestReducedResponse}
     */
    getContestsForMembers(spaceName, id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'spaceName' is set
      if (spaceName === undefined || spaceName === null) {
        throw new Error("Missing the required parameter 'spaceName' when calling getContestsForMembers");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getContestsForMembers");
      }

      let pathParams = {
        'spaceName': spaceName,
        'id': id
      };
      let queryParams = {
        'contestId': opts['contestId'],
        '_limit': opts['limit'],
        '_skip': opts['skip']
      };
      let headerParams = {
        'X-API-KEY': opts['X_API_KEY']
      };
      let formParams = {
      };

      let authNames = ['adminApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ContestReducedResponse;
      return this.apiClient.callApi(
        '/members/{spaceName}/{id}/contests', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getMembers operation.
     * @callback module:api/MembersApi~getMembersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MemberResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of Members. This assumes that members have first been uploaded via a POST request or web console
     * @param {String} spaceName This is the space name which is linked to the account
     * @param {Object} opts Optional parameters
     * @param {String} opts.X_API_KEY The admin API Key generated from CompetitionLabs back office
     * @param {Array.<String>} opts.id The unique identifiers of the resources
     * @param {Number} opts.limit Limit the returned total records found (default to 20)
     * @param {Number} opts.skip Skip the returned records found and return the next batch of records (default to 0)
     * @param {module:api/MembersApi~getMembersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MemberResponse}
     */
    getMembers(spaceName, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'spaceName' is set
      if (spaceName === undefined || spaceName === null) {
        throw new Error("Missing the required parameter 'spaceName' when calling getMembers");
      }

      let pathParams = {
        'spaceName': spaceName
      };
      let queryParams = {
        'id': this.apiClient.buildCollectionParam(opts['id'], 'multi'),
        '_limit': opts['limit'],
        '_skip': opts['skip']
      };
      let headerParams = {
        'X-API-KEY': opts['X_API_KEY']
      };
      let formParams = {
      };

      let authNames = ['adminApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MemberResponse;
      return this.apiClient.callApi(
        '/members/{spaceName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getMembersByQuery operation.
     * @callback module:api/MembersApi~getMembersByQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MemberResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Members from CompetitionLabs database by unique Member ID's or any other POST body parameters using the POST method
     * @param {String} spaceName This is the space name which is linked to the account
     * @param {Object} opts Optional parameters
     * @param {String} opts.X_API_KEY The admin API Key generated from CompetitionLabs back office
     * @param {module:model/QueryRequest} opts.body Retrieve Products from CompetitionLabs database by unique Product ID's or any other POST body parameters using the POST method
     * @param {module:api/MembersApi~getMembersByQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MemberResponse}
     */
    getMembersByQuery(spaceName, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'spaceName' is set
      if (spaceName === undefined || spaceName === null) {
        throw new Error("Missing the required parameter 'spaceName' when calling getMembersByQuery");
      }

      let pathParams = {
        'spaceName': spaceName
      };
      let queryParams = {
      };
      let headerParams = {
        'X-API-KEY': opts['X_API_KEY']
      };
      let formParams = {
      };

      let authNames = ['adminApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = MemberResponse;
      return this.apiClient.callApi(
        '/members/{spaceName}/query', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getMessagesForMembers operation.
     * @callback module:api/MembersApi~getMessagesForMembersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MemberMessageResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * NOT AVAILABLE IN CURRENT RELEASE
     * Returns a list of Messages for the Member id provided
     * @param {String} spaceName This is the space name which is linked to the account
     * @param {String} id Unique identifier of the resource
     * @param {Object} opts Optional parameters
     * @param {String} opts.X_API_KEY The admin API Key generated from CompetitionLabs back office
     * @param {String} opts.messageId Id of a Message
     * @param {Number} opts.limit Limit the returned total records found (default to 20)
     * @param {Number} opts.skip Skip the returned records found and return the next batch of records (default to 0)
     * @param {module:api/MembersApi~getMessagesForMembersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MemberMessageResponse}
     */
    getMessagesForMembers(spaceName, id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'spaceName' is set
      if (spaceName === undefined || spaceName === null) {
        throw new Error("Missing the required parameter 'spaceName' when calling getMessagesForMembers");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getMessagesForMembers");
      }

      let pathParams = {
        'spaceName': spaceName,
        'id': id
      };
      let queryParams = {
        'messageId': opts['messageId'],
        '_limit': opts['limit'],
        '_skip': opts['skip']
      };
      let headerParams = {
        'X-API-KEY': opts['X_API_KEY']
      };
      let formParams = {
      };

      let authNames = ['adminApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MemberMessageResponse;
      return this.apiClient.callApi(
        '/members/{spaceName}/{id}/inbox', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateMembers operation.
     * @callback module:api/MembersApi~updateMembersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update existing Members in the CompetitionLabs database
     * @param {String} spaceName This is the space name which is linked to the account
     * @param {Array.<module:model/UpdateMemberRequest>} body Update member details in the CompetitionLabs database for a given Member identifier. * Member Ref Id can not be changed after creation * A member Id must exist in the CompetitionLabs database to update the member
     * @param {Object} opts Optional parameters
     * @param {String} opts.X_API_KEY The admin API Key generated from CompetitionLabs back office
     * @param {module:api/MembersApi~updateMembersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    updateMembers(spaceName, body, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'spaceName' is set
      if (spaceName === undefined || spaceName === null) {
        throw new Error("Missing the required parameter 'spaceName' when calling updateMembers");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateMembers");
      }

      let pathParams = {
        'spaceName': spaceName
      };
      let queryParams = {
      };
      let headerParams = {
        'X-API-KEY': opts['X_API_KEY']
      };
      let formParams = {
      };

      let authNames = ['adminApiKey'];
      let contentTypes = ['application/json', 'file/csv'];
      let accepts = ['application/json'];
      let returnType = ApiResponse;
      return this.apiClient.callApi(
        '/members/{spaceName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
