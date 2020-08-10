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
import CreateRepositoryRequest from '../model/CreateRepositoryRequest';
import QueryRequest from '../model/QueryRequest';
import RepositoryResponse from '../model/RepositoryResponse';
import UpdateRepositoryRequest from '../model/UpdateRepositoryRequest';

/**
* Repositories service.
* @module api/RepositoriesApi
* @version 1.0.0
*/
export default class RepositoriesApi {

    /**
    * Constructs a new RepositoriesApi. 
    * @alias module:api/RepositoriesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createFileObjectRepository operation.
     * @callback module:api/RepositoriesApi~createFileObjectRepositoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new file object repository in your CompetitionLabs space
     * @param {String} spaceName This is the space name which is linked to the account
     * @param {Array.<module:model/CreateRepositoryRequest>} body Create a new file object repository in your CompetitionLabs space
     * @param {Object} opts Optional parameters
     * @param {String} opts.X_API_KEY The admin API Key generated from CompetitionLabs back office
     * @param {module:api/RepositoriesApi~createFileObjectRepositoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    createFileObjectRepository(spaceName, body, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'spaceName' is set
      if (spaceName === undefined || spaceName === null) {
        throw new Error("Missing the required parameter 'spaceName' when calling createFileObjectRepository");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createFileObjectRepository");
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
      let basePaths = ['https://web-assets.competitionlabs.com', 'https://web-assets-demo.competitionlabs.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index']  >= basePaths.length || opts['_base_path_index'] <  0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/repositories/{spaceName}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteFileObjectRepositoriesByQuery operation.
     * @callback module:api/RepositoriesApi~deleteFileObjectRepositoriesByQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete repositories nby query. Delete repositories by query and/or unique repository ID's or any other body parameters
     * @param {String} spaceName This is the space name which is linked to the account
     * @param {Object} opts Optional parameters
     * @param {String} opts.X_API_KEY The admin API Key generated from CompetitionLabs back office
     * @param {module:model/QueryRequest} opts.body Delete repositories from a CompetitionLabs space by unique repository ID's or any other POST body parameters using the POST method
     * @param {module:api/RepositoriesApi~deleteFileObjectRepositoriesByQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    deleteFileObjectRepositoriesByQuery(spaceName, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'spaceName' is set
      if (spaceName === undefined || spaceName === null) {
        throw new Error("Missing the required parameter 'spaceName' when calling deleteFileObjectRepositoriesByQuery");
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
      let basePaths = ['https://web-assets.competitionlabs.com', 'https://web-assets-demo.competitionlabs.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index']  >= basePaths.length || opts['_base_path_index'] <  0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/repositories/{spaceName}/delete', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteFileObjectRepositoryById operation.
     * @callback module:api/RepositoriesApi~deleteFileObjectRepositoryByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the file repository for a given identifier specified
     * @param {String} spaceName This is the space name which is linked to the account
     * @param {Object} opts Optional parameters
     * @param {String} opts.X_API_KEY The admin API Key generated from CompetitionLabs back office
     * @param {Array.<String>} opts.id The unique identifiers of the resources
     * @param {Boolean} opts.permanent Permanently delete the file object. Default is false
     * @param {module:api/RepositoriesApi~deleteFileObjectRepositoryByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    deleteFileObjectRepositoryById(spaceName, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'spaceName' is set
      if (spaceName === undefined || spaceName === null) {
        throw new Error("Missing the required parameter 'spaceName' when calling deleteFileObjectRepositoryById");
      }

      let pathParams = {
        'spaceName': spaceName
      };
      let queryParams = {
        'id': this.apiClient.buildCollectionParam(opts['id'], 'multi'),
        'permanent': opts['permanent']
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
      let basePaths = ['https://web-assets.competitionlabs.com', 'https://web-assets-demo.competitionlabs.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index']  >= basePaths.length || opts['_base_path_index'] <  0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/repositories/{spaceName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath, callback
      );
    }

    /**
     * Callback function to receive the result of the getFileObjectRepositoriesByQuery operation.
     * @callback module:api/RepositoriesApi~getFileObjectRepositoriesByQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RepositoryResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find file object repositories by query
     * @param {String} spaceName This is the space name which is linked to the account
     * @param {Object} opts Optional parameters
     * @param {String} opts.X_API_KEY The admin API Key generated from CompetitionLabs back office
     * @param {module:model/QueryRequest} opts.body Retrieve file object repositories from CompetitionLabs by unique repository ID's or any other POST body parameters using the POST method
     * @param {module:api/RepositoriesApi~getFileObjectRepositoriesByQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RepositoryResponse}
     */
    getFileObjectRepositoriesByQuery(spaceName, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'spaceName' is set
      if (spaceName === undefined || spaceName === null) {
        throw new Error("Missing the required parameter 'spaceName' when calling getFileObjectRepositoriesByQuery");
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
      let returnType = RepositoryResponse;
      let basePaths = ['https://web-assets.competitionlabs.com', 'https://web-assets-demo.competitionlabs.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index']  >= basePaths.length || opts['_base_path_index'] <  0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/repositories/{spaceName}/query', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath, callback
      );
    }

    /**
     * Callback function to receive the result of the getListOfFileObjectRepositories operation.
     * @callback module:api/RepositoriesApi~getListOfFileObjectRepositoriesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RepositoryResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of file object repositories. This assumes that repositories have first been uploaded via a POST request or web console
     * @param {String} spaceName This is the space name which is linked to the account
     * @param {Object} opts Optional parameters
     * @param {String} opts.X_API_KEY The admin API Key generated from CompetitionLabs back office
     * @param {Number} opts.limit Limit the returned total records found (default to 20)
     * @param {Number} opts.skip Skip the returned records found and return the next batch of records (default to 0)
     * @param {Array.<String>} opts.id The unique identifiers of the resources
     * @param {module:api/RepositoriesApi~getListOfFileObjectRepositoriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RepositoryResponse}
     */
    getListOfFileObjectRepositories(spaceName, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'spaceName' is set
      if (spaceName === undefined || spaceName === null) {
        throw new Error("Missing the required parameter 'spaceName' when calling getListOfFileObjectRepositories");
      }

      let pathParams = {
        'spaceName': spaceName
      };
      let queryParams = {
        '_limit': opts['limit'],
        '_skip': opts['skip'],
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
      let returnType = RepositoryResponse;
      let basePaths = ['https://web-assets.competitionlabs.com', 'https://web-assets-demo.competitionlabs.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index']  >= basePaths.length || opts['_base_path_index'] <  0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/repositories/{spaceName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath, callback
      );
    }

    /**
     * Callback function to receive the result of the updateFileObjectRepository operation.
     * @callback module:api/RepositoriesApi~updateFileObjectRepositoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a file object repository in your CompetitionLabs space.
     * @param {String} spaceName This is the space name which is linked to the account
     * @param {Array.<module:model/UpdateRepositoryRequest>} body Update a file object repository in your CompetitionLabs space.
     * @param {Object} opts Optional parameters
     * @param {String} opts.X_API_KEY The admin API Key generated from CompetitionLabs back office
     * @param {module:api/RepositoriesApi~updateFileObjectRepositoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    updateFileObjectRepository(spaceName, body, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'spaceName' is set
      if (spaceName === undefined || spaceName === null) {
        throw new Error("Missing the required parameter 'spaceName' when calling updateFileObjectRepository");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateFileObjectRepository");
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
      let basePaths = ['https://web-assets.competitionlabs.com', 'https://web-assets-demo.competitionlabs.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index']  >= basePaths.length || opts['_base_path_index'] <  0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[opts['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/repositories/{spaceName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath, callback
      );
    }


}
