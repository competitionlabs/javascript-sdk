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

import ApiClient from '../ApiClient';
/**
* Enum class RuleScope.
* @enum {}
* @readonly
*/
export default class RuleScope {
    
        /**
         * value: "Contest"
         * @const
         */
        "Contest" = "Contest";

    
        /**
         * value: "Achievement"
         * @const
         */
        "Achievement" = "Achievement";

    
        /**
         * value: "Competition"
         * @const
         */
        "Competition" = "Competition";

    

    /**
    * Returns a <code>RuleScope</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/RuleScope} The enum <code>RuleScope</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

