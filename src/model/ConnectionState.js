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
* Enum class ConnectionState.
* @enum {}
* @readonly
*/
export default class ConnectionState {
    
        /**
         * value: "Start"
         * @const
         */
        "Start" = "Start";

    
        /**
         * value: "Stop"
         * @const
         */
        "Stop" = "Stop";

    

    /**
    * Returns a <code>ConnectionState</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ConnectionState} The enum <code>ConnectionState</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

