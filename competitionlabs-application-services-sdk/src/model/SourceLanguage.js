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

import ApiClient from '../ApiClient';
/**
* Enum class SourceLanguage.
* @enum {}
* @readonly
*/
export default class SourceLanguage {
    
        /**
         * value: "Scala"
         * @const
         */
        "Scala" = "Scala";

    

    /**
    * Returns a <code>SourceLanguage</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/SourceLanguage} The enum <code>SourceLanguage</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

