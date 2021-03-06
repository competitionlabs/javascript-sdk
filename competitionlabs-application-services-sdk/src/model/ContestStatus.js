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
* Enum class ContestStatus.
* @enum {}
* @readonly
*/
export default class ContestStatus {
    
        /**
         * value: "Deleted"
         * @const
         */
        "Deleted" = "Deleted";

    
        /**
         * value: "NotStarted"
         * @const
         */
        "NotStarted" = "NotStarted";

    
        /**
         * value: "Active"
         * @const
         */
        "Active" = "Active";

    
        /**
         * value: "Finished"
         * @const
         */
        "Finished" = "Finished";

    
        /**
         * value: "Finalised"
         * @const
         */
        "Finalised" = "Finalised";

    
        /**
         * value: "Cancelled"
         * @const
         */
        "Cancelled" = "Cancelled";

    

    /**
    * Returns a <code>ContestStatus</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ContestStatus} The enum <code>ContestStatus</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

