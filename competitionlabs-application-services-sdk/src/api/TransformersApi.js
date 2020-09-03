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
import CreateTransformerRequest from '../model/CreateTransformerRequest';
import QueryRequest from '../model/QueryRequest';
import TransformerResponse from '../model/TransformerResponse';
import UpdateTransformerRequest from '../model/UpdateTransformerRequest';

/**
* Transformers service.
* @module api/TransformersApi
* @version 1.0.4
*/
export default class TransformersApi {

    /**
    * Constructs a new TransformersApi. 
    * @alias module:api/TransformersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createTransformers operation.
     * @callback module:api/TransformersApi~createTransformersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new Transformer in the CompetitionLabs system
     * @param {String} spaceName This is the space name which is linked to the account
     * @param {module:model/CreateTransformerRequest} body Create a Transformer in the CompetitionLabs system
     * @param {Object} opts Optional parameters
     * @param {String} opts.X_API_KEY The admin API Key generated from CompetitionLabs back office
     * @param {module:api/TransformersApi~createTransformersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    createTransformers(spaceName, body, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'spaceName' is set
      if (spaceName === undefined || spaceName === null) {
        throw new Error("Missing the required parameter 'spaceName' when calling createTransformers");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createTransformers");
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
        '/transformers/{spaceName}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteTransformers operation.
     * @callback module:api/TransformersApi~deleteTransformersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the Transformers for a given identifier specified
     * @param {String} spaceName This is the space name which is linked to the account
     * @param {Object} opts Optional parameters
     * @param {String} opts.X_API_KEY The admin API Key generated from CompetitionLabs back office
     * @param {Array.<String>} opts.id The unique identifiers of the resources
     * @param {module:api/TransformersApi~deleteTransformersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    deleteTransformers(spaceName, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'spaceName' is set
      if (spaceName === undefined || spaceName === null) {
        throw new Error("Missing the required parameter 'spaceName' when calling deleteTransformers");
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
        '/transformers/{spaceName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteTransformersByQuery operation.
     * @callback module:api/TransformersApi~deleteTransformersByQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Transformer or a list of Transformers from CompetitionLabs by unique Transformer ID's or any other POST body parameters using the POST method
     * @param {String} spaceName This is the space name which is linked to the account
     * @param {Object} opts Optional parameters
     * @param {String} opts.X_API_KEY The admin API Key generated from CompetitionLabs back office
     * @param {module:model/QueryRequest} opts.body Delete a Transformer or a list of Transformers from CompetitionLabs by unique Transformer ID's or any other POST body parameters using the POST method
     * @param {module:api/TransformersApi~deleteTransformersByQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    deleteTransformersByQuery(spaceName, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'spaceName' is set
      if (spaceName === undefined || spaceName === null) {
        throw new Error("Missing the required parameter 'spaceName' when calling deleteTransformersByQuery");
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
        '/transformers/{spaceName}/delete', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTransformers operation.
     * @callback module:api/TransformersApi~getTransformersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TransformerResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of Transformers. This assumes that transformers have first been uploaded via a POST request or web console
     * @param {String} spaceName This is the space name which is linked to the account
     * @param {Object} opts Optional parameters
     * @param {String} opts.X_API_KEY The admin API Key generated from CompetitionLabs back office
     * @param {Array.<String>} opts.id The unique identifiers of the resources
     * @param {Number} opts.limit Limit the returned total records found
     * @param {Number} opts.skip Skip the returned records found and return the next batch of records
     * @param {module:api/TransformersApi~getTransformersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TransformerResponse}
     */
    getTransformers(spaceName, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'spaceName' is set
      if (spaceName === undefined || spaceName === null) {
        throw new Error("Missing the required parameter 'spaceName' when calling getTransformers");
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
      let returnType = TransformerResponse;
      return this.apiClient.callApi(
        '/transformers/{spaceName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTransformersByQuery operation.
     * @callback module:api/TransformersApi~getTransformersByQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TransformerResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Transformer or a list of Transformers from CompetitionLabs by unique Transformer ID's or any other POST body parameters using the POST method
     * @param {String} spaceName This is the space name which is linked to the account
     * @param {Object} opts Optional parameters
     * @param {String} opts.X_API_KEY The admin API Key generated from CompetitionLabs back office
     * @param {module:model/QueryRequest} opts.body Retrieve a Transformer or a list of Transformers from CompetitionLabs by unique Transformer ID's or any other Post body parameters using the POST method
     * @param {module:api/TransformersApi~getTransformersByQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TransformerResponse}
     */
    getTransformersByQuery(spaceName, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'spaceName' is set
      if (spaceName === undefined || spaceName === null) {
        throw new Error("Missing the required parameter 'spaceName' when calling getTransformersByQuery");
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
      let returnType = TransformerResponse;
      return this.apiClient.callApi(
        '/transformers/{spaceName}/query', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateTransformers operation.
     * @callback module:api/TransformersApi~updateTransformersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an existing Transformer in the CompetitionLabs system
     * @param {String} spaceName This is the space name which is linked to the account
     * @param {module:model/UpdateTransformerRequest} body Update Transformer details in the CompetitionLabs system
     * @param {Object} opts Optional parameters
     * @param {String} opts.X_API_KEY The admin API Key generated from CompetitionLabs back office
     * @param {module:api/TransformersApi~updateTransformersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    updateTransformers(spaceName, body, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'spaceName' is set
      if (spaceName === undefined || spaceName === null) {
        throw new Error("Missing the required parameter 'spaceName' when calling updateTransformers");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateTransformers");
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
        '/transformers/{spaceName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
