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
* Enum class FieldType.
* @enum {}
* @readonly
*/
export default class FieldType {
    
        /**
         * value: "Text"
         * @const
         */
        "Text" = "Text";

    
        /**
         * value: "Number"
         * @const
         */
        "Number" = "Number";

    
        /**
         * value: "TextArray"
         * @const
         */
        "TextArray" = "TextArray";

    
        /**
         * value: "NumberArray"
         * @const
         */
        "NumberArray" = "NumberArray";

    

    /**
    * Returns a <code>FieldType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/FieldType} The enum <code>FieldType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

