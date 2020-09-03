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
import CreateRewardTypeRequest from '../model/CreateRewardTypeRequest';
import QueryRequest from '../model/QueryRequest';
import RewardTypeResponse from '../model/RewardTypeResponse';
import UpdateRewardTypeRequest from '../model/UpdateRewardTypeRequest';

/**
* RewardTypes service.
* @module api/RewardTypesApi
* @version 1.0.1
*/
export default class RewardTypesApi {

    /**
    * Constructs a new RewardTypesApi. 
    * @alias module:api/RewardTypesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createRewardTypes operation.
     * @callback module:api/RewardTypesApi~createRewardTypesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create new Reward types in the CompetitionLabs database
     * @param {String} spaceName This is the space name which is linked to the account
     * @param {Array.<module:model/CreateRewardTypeRequest>} body Create Reward Types in the CompetitionLabs database
     * @param {Object} opts Optional parameters
     * @param {String} opts.X_API_KEY The admin API Key generated from CompetitionLabs back office
     * @param {module:api/RewardTypesApi~createRewardTypesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    createRewardTypes(spaceName, body, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'spaceName' is set
      if (spaceName === undefined || spaceName === null) {
        throw new Error("Missing the required parameter 'spaceName' when calling createRewardTypes");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createRewardTypes");
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
        '/reward-types/{spaceName}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteRewardTypes operation.
     * @callback module:api/RewardTypesApi~deleteRewardTypesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Reward types for a given identifier specified
     * @param {String} spaceName This is the space name which is linked to the account
     * @param {Object} opts Optional parameters
     * @param {String} opts.X_API_KEY The admin API Key generated from CompetitionLabs back office
     * @param {Array.<String>} opts.id The unique identifiers of the resources
     * @param {module:api/RewardTypesApi~deleteRewardTypesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    deleteRewardTypes(spaceName, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'spaceName' is set
      if (spaceName === undefined || spaceName === null) {
        throw new Error("Missing the required parameter 'spaceName' when calling deleteRewardTypes");
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
        '/reward-types/{spaceName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteRewardTypesByQuery operation.
     * @callback module:api/RewardTypesApi~deleteRewardTypesByQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Reward types from CompetitionLabs database by unique Reward types ID's or any other POST body parameters using the POST method
     * @param {String} spaceName This is the space name which is linked to the account
     * @param {Object} opts Optional parameters
     * @param {String} opts.X_API_KEY The admin API Key generated from CompetitionLabs back office
     * @param {module:model/QueryRequest} opts.body Delete Reward types from CompetitionLabs database by unique Reward types ID's or any other POST body parameters using the POST method
     * @param {module:api/RewardTypesApi~deleteRewardTypesByQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    deleteRewardTypesByQuery(spaceName, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'spaceName' is set
      if (spaceName === undefined || spaceName === null) {
        throw new Error("Missing the required parameter 'spaceName' when calling deleteRewardTypesByQuery");
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
        '/reward-types/{spaceName}/delete', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getRewardTypes operation.
     * @callback module:api/RewardTypesApi~getRewardTypesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RewardTypeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of Reward Types. This assumes that reward types have first been uploaded via a POST request or web console
     * @param {String} spaceName This is the space name which is linked to the account
     * @param {Object} opts Optional parameters
     * @param {String} opts.X_API_KEY The admin API Key generated from CompetitionLabs back office
     * @param {Array.<String>} opts.id The unique identifiers of the resources
     * @param {Number} opts.limit Limit the returned total records found (default to 20)
     * @param {Number} opts.skip Skip the returned records found and return the next batch of records (default to 0)
     * @param {module:api/RewardTypesApi~getRewardTypesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RewardTypeResponse}
     */
    getRewardTypes(spaceName, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'spaceName' is set
      if (spaceName === undefined || spaceName === null) {
        throw new Error("Missing the required parameter 'spaceName' when calling getRewardTypes");
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
      let returnType = RewardTypeResponse;
      return this.apiClient.callApi(
        '/reward-types/{spaceName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getRewardTypesByQuery operation.
     * @callback module:api/RewardTypesApi~getRewardTypesByQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RewardTypeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Reward types from CompetitionLabs database by unique Reward type ID's or any other POST body parameters using the POST method
     * @param {String} spaceName This is the space name which is linked to the account
     * @param {Object} opts Optional parameters
     * @param {String} opts.X_API_KEY The admin API Key generated from CompetitionLabs back office
     * @param {module:model/QueryRequest} opts.body Retrieve Reward types from CompetitionLabs database by unique Reward type ID's or any other POST body parameters using the POST method
     * @param {module:api/RewardTypesApi~getRewardTypesByQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RewardTypeResponse}
     */
    getRewardTypesByQuery(spaceName, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'spaceName' is set
      if (spaceName === undefined || spaceName === null) {
        throw new Error("Missing the required parameter 'spaceName' when calling getRewardTypesByQuery");
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
      let returnType = RewardTypeResponse;
      return this.apiClient.callApi(
        '/reward-types/{spaceName}/query', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateRewardTypes operation.
     * @callback module:api/RewardTypesApi~updateRewardTypesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update existing Reward types in the CompetitionLabs database
     * @param {String} spaceName This is the space name which is linked to the account
     * @param {Array.<module:model/UpdateRewardTypeRequest>} body Update Reward types in the CompetitionLabs database.
     * @param {Object} opts Optional parameters
     * @param {String} opts.X_API_KEY The admin API Key generated from CompetitionLabs back office
     * @param {module:api/RewardTypesApi~updateRewardTypesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    updateRewardTypes(spaceName, body, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'spaceName' is set
      if (spaceName === undefined || spaceName === null) {
        throw new Error("Missing the required parameter 'spaceName' when calling updateRewardTypes");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateRewardTypes");
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
        '/reward-types/{spaceName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}