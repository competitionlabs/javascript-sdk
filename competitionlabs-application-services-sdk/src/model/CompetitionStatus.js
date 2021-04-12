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
* Enum class CompetitionStatus.
* @enum {}
* @readonly
*/
export default class CompetitionStatus {
    
        /**
         * value: "Unknown"
         * @const
         */
        "Unknown" = "Unknown";

    
        /**
         * value: "Deleting"
         * @const
         */
        "Deleting" = "Deleting";

    
        /**
         * value: "Deleted"
         * @const
         */
        "Deleted" = "Deleted";

    
        /**
         * value: "Draft"
         * @const
         */
        "Draft" = "Draft";

    
        /**
         * value: "Template"
         * @const
         */
        "Template" = "Template";

    
        /**
         * value: "Preparing"
         * @const
         */
        "Preparing" = "Preparing";

    
        /**
         * value: "Ready"
         * @const
         */
        "Ready" = "Ready";

    
        /**
         * value: "Starting"
         * @const
         */
        "Starting" = "Starting";

    
        /**
         * value: "Active"
         * @const
         */
        "Active" = "Active";

    
        /**
         * value: "Finishing"
         * @const
         */
        "Finishing" = "Finishing";

    
        /**
         * value: "Finished"
         * @const
         */
        "Finished" = "Finished";

    
        /**
         * value: "Cancelling"
         * @const
         */
        "Cancelling" = "Cancelling";

    
        /**
         * value: "Cancelled"
         * @const
         */
        "Cancelled" = "Cancelled";

    

    /**
    * Returns a <code>CompetitionStatus</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/CompetitionStatus} The enum <code>CompetitionStatus</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

