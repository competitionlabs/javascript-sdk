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
* Enum class AchievementLiveStatus.
* @enum {}
* @readonly
*/
export default class AchievementLiveStatus {
    
        /**
         * value: "Live"
         * @const
         */
        "Live" = "Live";

    
        /**
         * value: "Draft"
         * @const
         */
        "Draft" = "Draft";

    

    /**
    * Returns a <code>AchievementLiveStatus</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/AchievementLiveStatus} The enum <code>AchievementLiveStatus</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

