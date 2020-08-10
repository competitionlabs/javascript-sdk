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

import ApiClient from '../ApiClient';
/**
* Enum class Role.
* @enum {}
* @readonly
*/
export default class Role {
    
        /**
         * value: "Owner"
         * @const
         */
        "Owner" = "Owner";

    
        /**
         * value: "Administrator"
         * @const
         */
        "Administrator" = "Administrator";

    
        /**
         * value: "Web"
         * @const
         */
        "Web" = "Web";

    
        /**
         * value: "user"
         * @const
         */
        "user" = "user";

    

    /**
    * Returns a <code>Role</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/Role} The enum <code>Role</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

