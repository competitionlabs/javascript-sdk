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


import ApiClient from "../ApiClient";
import ApiResponse from '../model/ApiResponse';
import RuleDescriptor from '../model/RuleDescriptor';
import RuleSet from '../model/RuleSet';

/**
* Rules service.
* @module api/RulesApi
* @version 3.0.1
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
     * @param {String} ruleScope The rule scope to assess the ruleset against
     * @param {module:api/RulesApi~getRulesByRuleScopeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RuleDescriptor}
     */
    getRulesByRuleScope(ruleScope, callback) {
      let postBody = null;
      // verify the required parameter 'ruleScope' is set
      if (ruleScope === undefined || ruleScope === null) {
        throw new Error("Missing the required parameter 'ruleScope' when calling getRulesByRuleScope");
      }

      let pathParams = {
        'ruleScope': ruleScope
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = RuleDescriptor;
      return this.apiClient.callApi(
        '/rules/{ruleScope}', 'GET',
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
     * @param {String} ruleScope The rule scope to assess the ruleset against
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/RuleSet>} opts.body Post a Rules Set to validate if the contest rules are valid
     * @param {module:api/RulesApi~validateRulesByRuleScopeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponse}
     */
    validateRulesByRuleScope(ruleScope, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'ruleScope' is set
      if (ruleScope === undefined || ruleScope === null) {
        throw new Error("Missing the required parameter 'ruleScope' when calling validateRulesByRuleScope");
      }

      let pathParams = {
        'ruleScope': ruleScope
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ApiResponse;
      return this.apiClient.callApi(
        '/rules/{ruleScope}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
