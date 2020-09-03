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
* Enum class EventRefType.
* @enum {}
* @readonly
*/
export default class EventRefType {
    
        /**
         * value: "CompetitionType"
         * @const
         */
        "CompetitionType" = "CompetitionType";

    
        /**
         * value: "ContestType"
         * @const
         */
        "ContestType" = "ContestType";

    
        /**
         * value: "AchievementType"
         * @const
         */
        "AchievementType" = "AchievementType";

    
        /**
         * value: "UserTypeType"
         * @const
         */
        "UserTypeType" = "UserTypeType";

    
        /**
         * value: "MemberMessageType"
         * @const
         */
        "MemberMessageType" = "MemberMessageType";

    

    /**
    * Constructs a full object with all available fields.
    */
    list(){
        var obj = {};

        
        obj['CompetitionType'] = "CompetitionType";
        
        obj['ContestType'] = "ContestType";
        
        obj['AchievementType'] = "AchievementType";
        
        obj['UserTypeType'] = "UserTypeType";
        
        obj['MemberMessageType'] = "MemberMessageType";
        

        return obj;
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        
        obj['CompetitionType'] = null;
        
        obj['ContestType'] = null;
        
        obj['AchievementType'] = null;
        
        obj['UserTypeType'] = null;
        
        obj['MemberMessageType'] = null;
        

        return obj;
    }

    /**
    * Constructs a full object Map for all available fields.
    */
    modelMap(){
        return {"type": 'String'};
    }

    /**
    * Returns a <code>EventRefType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/EventRefType} The enum <code>EventRefType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
