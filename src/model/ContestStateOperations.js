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
* Enum class ContestStateOperations.
* @enum {}
* @readonly
*/
export default class ContestStateOperations {
    
        /**
         * value: "Start"
         * @const
         */
        "Start" = "Start";

    
        /**
         * value: "Cancel"
         * @const
         */
        "Cancel" = "Cancel";

    
        /**
         * value: "Finish"
         * @const
         */
        "Finish" = "Finish";

    
        /**
         * value: "Finalise"
         * @const
         */
        "Finalise" = "Finalise";

    

    /**
    * Returns a <code>ContestStateOperations</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ContestStateOperations} The enum <code>ContestStateOperations</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

