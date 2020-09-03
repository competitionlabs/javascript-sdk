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
import RuleDescriptor from '../model/RuleDescriptor';
import RuleSet from '../model/RuleSet';

/**
* Rules service.
* @module api/RulesApi
* @version 1.0.0
*/
export default class RulesApi {

    /**
    * Constructs a new RulesApi. 
    * @alias module:api/RulesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getRulesByRuleScope operation.
     * @callback module:api/RulesApi~getRulesByRuleScopeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RuleDescriptor} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * NOT AVAILABLE IN CURRENT RELEASE
     * Returns a list of either Achievement, Competition or Contest rules.
     * @param {String} spaceName This is the space name which is linked to the account
     * @param {String} ruleScope The rule scope to assess the ruleset against
     * @param {Object} opts Optional parameters
     * @param {String} opts.X_API_KEY The admin API Key generated from CompetitionLabs back office
     * @param {module:api/RulesApi~getRulesByRuleScopeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RuleDescriptor}
     */
    getRulesByRuleScope(spaceName, ruleScope, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'spaceName' is set
      if (spaceName === undefined || spaceName === null) {
        throw new Error("Missing the required parameter 'spaceName' when calling getRulesByRuleScope");
      }
      // verify the required parameter 'ruleScope' is set
      if (ruleScope === undefined || ruleScope === null) {
        throw new Error("Missing the required parameter 'ruleScope' when calling getRulesByRuleScope");
      }

      let pathParams = {
        'spaceName': spaceName,
        'ruleScope': ruleScope
      };
      let queryParams = {
      };
      let headerParams = {
        'X-API-KEY': opts['X_API_KEY']
      };
      let formParams = {
      };

      let authNames = ['adminApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = RuleDescriptor;
      return this.apiClient.callApi(
        '/rules/{spaceName}/{ruleScope}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the validateRulesByRuleScope operation.
     * @callback module:api/RulesApi~validateRulesByRuleScopeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * NOT AVAILABLE IN CURRENT RELEASE
     * Validates either Achievement, Competition or Contest Rules.
     * @param {String} spaceName This is the space name which is linked to the account
     * @param {String} ruleScope The rule scope to assess the ruleset against
     * @param {Object} opts Optional parameters
     * @param {String} opts.X_API_KEY The admin API Key generated from CompetitionLabs back office
     * @param {Array.<module:model/RuleSet>} opts.body Post a Rules Set to validate if the contest rules are valid
     * @param {module:api/RulesApi~validateRulesByRuleScopeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    validateRulesByRuleScope(spaceName, ruleScope, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'spaceName' is set
      if (spaceName === undefined || spaceName === null) {
        throw new Error("Missing the required parameter 'spaceName' when calling validateRulesByRuleScope");
      }
      // verify the required parameter 'ruleScope' is set
      if (ruleScope === undefined || ruleScope === null) {
        throw new Error("Missing the required parameter 'ruleScope' when calling validateRulesByRuleScope");
      }

      let pathParams = {
        'spaceName': spaceName,
        'ruleScope': ruleScope
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
        '/rules/{spaceName}/{ruleScope}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
