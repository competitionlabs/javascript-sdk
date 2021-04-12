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


import ApiClient from "../ApiClient";
import ActionTypeResponse from '../model/ActionTypeResponse';
import ApiResponse from '../model/ApiResponse';
import CreateActionTypeRequest from '../model/CreateActionTypeRequest';
import QueryRequest from '../model/QueryRequest';
import UpdateActionTypeRequest from '../model/UpdateActionTypeRequest';

/**
* ActionTypes service.
* @module api/ActionTypesApi
* @version 1.0.0
*/
export default class ActionTypesApi {

    /**
    * Constructs a new ActionTypesApi. 
    * @alias module:api/ActionTypesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createActionTypes operation.
     * @callback module:api/ActionTypesApi~createActionTypesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create new Action types in the CompetitionLabs database
     * @param {Array.<module:model/CreateActionTypeRequest>} body Create Action Types in the CompetitionLabs database
     * @param {Object} opts Optional parameters
     * @param {String} opts.X_API_KEY The admin API Key generated from CompetitionLabs back office
     * @param {module:api/ActionTypesApi~createActionTypesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    createActionTypes(body, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createActionTypes");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'X-API-KEY': opts['X_API_KEY']
      };
      let formParams = {
      };

      let authNames = ['AdminApiKey', 'OAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ApiResponse;
      return this.apiClient.callApi(
        '/action-types', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteActionTypes operation.
     * @callback module:api/ActionTypesApi~deleteActionTypesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Action types for a given identifier specified
     * @param {Object} opts Optional parameters
     * @param {String} opts.X_API_KEY The admin API Key generated from CompetitionLabs back office
     * @param {Array.<String>} opts.id The unique identifiers of the resources
     * @param {module:api/ActionTypesApi~deleteActionTypesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    deleteActionTypes(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'id': this.apiClient.buildCollectionParam(opts['id'], 'multi')
      };
      let headerParams = {
        'X-API-KEY': opts['X_API_KEY']
      };
      let formParams = {
      };

      let authNames = ['AdminApiKey', 'OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ApiResponse;
      return this.apiClient.callApi(
        '/action-types', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteActionTypesByQuery operation.
     * @callback module:api/ActionTypesApi~deleteActionTypesByQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Action types from CompetitionLabs database by unique Action types ID's or any other POST body parameters using the POST method
     * @param {Object} opts Optional parameters
     * @param {String} opts.X_API_KEY The admin API Key generated from CompetitionLabs back office
     * @param {module:model/QueryRequest} opts.body Delete Action types from CompetitionLabs database by unique Action types ID's or any other POST body parameters using the POST method
     * @param {module:api/ActionTypesApi~deleteActionTypesByQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    deleteActionTypesByQuery(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'X-API-KEY': opts['X_API_KEY']
      };
      let formParams = {
      };

      let authNames = ['AdminApiKey', 'OAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ApiResponse;
      return this.apiClient.callApi(
        '/action-types/delete', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getActionTypes operation.
     * @callback module:api/ActionTypesApi~getActionTypesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ActionTypeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of Action Types. This assumes that action types have first been uploaded via a POST request or web console
     * @param {Object} opts Optional parameters
     * @param {String} opts.X_API_KEY The admin API Key generated from CompetitionLabs back office
     * @param {Array.<String>} opts.id The unique identifiers of the resources
     * @param {Number} opts.limit Limit the returned total records found
     * @param {Number} opts.skip Skip the returned records found and return the next batch of records
     * @param {module:api/ActionTypesApi~getActionTypesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ActionTypeResponse}
     */
    getActionTypes(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
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

      let authNames = ['AdminApiKey', 'OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ActionTypeResponse;
      return this.apiClient.callApi(
        '/action-types', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getActionTypesByQuery operation.
     * @callback module:api/ActionTypesApi~getActionTypesByQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ActionTypeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Action types from CompetitionLabs database by unique Action type ID's or any other POST body parameters using the POST method
     * @param {Object} opts Optional parameters
     * @param {String} opts.X_API_KEY The admin API Key generated from CompetitionLabs back office
     * @param {module:model/QueryRequest} opts.body Retrieve Action types from CompetitionLabs database by unique Action type ID's or any other POST body parameters using the POST method
     * @param {module:api/ActionTypesApi~getActionTypesByQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ActionTypeResponse}
     */
    getActionTypesByQuery(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'X-API-KEY': opts['X_API_KEY']
      };
      let formParams = {
      };

      let authNames = ['AdminApiKey', 'OAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ActionTypeResponse;
      return this.apiClient.callApi(
        '/action-types/query', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateActionTypes operation.
     * @callback module:api/ActionTypesApi~updateActionTypesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update existing Action types in the CompetitionLabs database
     * @param {Array.<module:model/UpdateActionTypeRequest>} body Update Action types in the CompetitionLabs database.
     * @param {Object} opts Optional parameters
     * @param {String} opts.X_API_KEY The admin API Key generated from CompetitionLabs back office
     * @param {module:api/ActionTypesApi~updateActionTypesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    updateActionTypes(body, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateActionTypes");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'X-API-KEY': opts['X_API_KEY']
      };
      let formParams = {
      };

      let authNames = ['AdminApiKey', 'OAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ApiResponse;
      return this.apiClient.callApi(
        '/action-types', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
