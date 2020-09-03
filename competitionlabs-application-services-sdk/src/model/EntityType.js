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
* Enum class EntityType.
* @enum {}
* @readonly
*/
export default class EntityType {
    
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
    * Constructs a full object with all available fields.
    */
    list(){
        var obj = {};

        
        obj['Contest'] = "Contest";
        
        obj['Achievement'] = "Achievement";
        
        obj['Competition'] = "Competition";
        

        return obj;
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        
        obj['Contest'] = null;
        
        obj['Achievement'] = null;
        
        obj['Competition'] = null;
        

        return obj;
    }

    /**
    * Constructs a full object Map for all available fields.
    */
    modelMap(){
        return {"type": 'String'};
    }

    /**
    * Returns a <code>EntityType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/EntityType} The enum <code>EntityType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
