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
import ApiResponse from '../model/ApiResponse';
import AwardResponse from '../model/AwardResponse';
import ClaimAwardRequest from '../model/ClaimAwardRequest';
import QueryRequest from '../model/QueryRequest';

/**
* Awards service.
* @module api/AwardsApi
* @version 1.0.4
*/
export default class AwardsApi {

    /**
    * Constructs a new AwardsApi. 
    * @alias module:api/AwardsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the claimAwards operation.
     * @callback module:api/AwardsApi~claimAwardsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Claim Awards that need to be actioned at
     * @param {String} spaceName This is the space name which is linked to the account
     * @param {Array.<module:model/ClaimAwardRequest>} body Claim Awards that need to be actioned at in the Competitionlabs database
     * @param {Object} opts Optional parameters
     * @param {String} opts.X_API_KEY The admin API Key generated from CompetitionLabs back office
     * @param {module:api/AwardsApi~claimAwardsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    claimAwards(spaceName, body, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'spaceName' is set
      if (spaceName === undefined || spaceName === null) {
        throw new Error("Missing the required parameter 'spaceName' when calling claimAwards");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling claimAwards");
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
        '/awards/{spaceName}/claim', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAwards operation.
     * @callback module:api/AwardsApi~getAwardsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AwardResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of Awards.
     * @param {String} spaceName This is the space name which is linked to the account
     * @param {Object} opts Optional parameters
     * @param {String} opts.X_API_KEY The admin API Key generated from CompetitionLabs back office
     * @param {Array.<String>} opts.id The unique identifiers of the resources
     * @param {Number} opts.limit Limit the returned total records found
     * @param {Number} opts.skip Skip the returned records found and return the next batch of records
     * @param {module:api/AwardsApi~getAwardsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AwardResponse}
     */
    getAwards(spaceName, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'spaceName' is set
      if (spaceName === undefined || spaceName === null) {
        throw new Error("Missing the required parameter 'spaceName' when calling getAwards");
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
      let returnType = AwardResponse;
      return this.apiClient.callApi(
        '/awards/{spaceName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAwardsByQuery operation.
     * @callback module:api/AwardsApi~getAwardsByQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AwardResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Awards from CompetitionLabs database by unique Awards ID's or any other POST body parameters using the POST method
     * @param {String} spaceName This is the space name which is linked to the account
     * @param {Object} opts Optional parameters
     * @param {String} opts.X_API_KEY The admin API Key generated from CompetitionLabs back office
     * @param {module:model/QueryRequest} opts.body Retrieve Awards from CompetitionLabs database by unique Awards ID's or any other POST body parameters using the POST method
     * @param {module:api/AwardsApi~getAwardsByQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AwardResponse}
     */
    getAwardsByQuery(spaceName, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'spaceName' is set
      if (spaceName === undefined || spaceName === null) {
        throw new Error("Missing the required parameter 'spaceName' when calling getAwardsByQuery");
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
      let returnType = AwardResponse;
      return this.apiClient.callApi(
        '/awards/{spaceName}/query', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
