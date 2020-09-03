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
* Enum class EntrantStatus.
* @enum {}
* @readonly
*/
export default class EntrantStatus {
    
        /**
         * value: "Unknown"
         * @const
         */
        "Unknown" = "Unknown";

    
        /**
         * value: "Deleted"
         * @const
         */
        "Deleted" = "Deleted";

    
        /**
         * value: "WrongGroups"
         * @const
         */
        "WrongGroups" = "WrongGroups";

    
        /**
         * value: "Disqualified"
         * @const
         */
        "Disqualified" = "Disqualified";

    
        /**
         * value: "Substituted"
         * @const
         */
        "Substituted" = "Substituted";

    
        /**
         * value: "Injured"
         * @const
         */
        "Injured" = "Injured";

    
        /**
         * value: "OptInRequired"
         * @const
         */
        "OptInRequired" = "OptInRequired";

    
        /**
         * value: "Registered"
         * @const
         */
        "Registered" = "Registered";

    
        /**
         * value: "Entered"
         * @const
         */
        "Entered" = "Entered";

    
        /**
         * value: "Playing"
         * @const
         */
        "Playing" = "Playing";

    
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
    * Constructs a full object with all available fields.
    */
    list(){
        var obj = {};

        
        obj['Unknown'] = "Unknown";
        
        obj['Deleted'] = "Deleted";
        
        obj['WrongGroups'] = "WrongGroups";
        
        obj['Disqualified'] = "Disqualified";
        
        obj['Substituted'] = "Substituted";
        
        obj['Injured'] = "Injured";
        
        obj['OptInRequired'] = "OptInRequired";
        
        obj['Registered'] = "Registered";
        
        obj['Entered'] = "Entered";
        
        obj['Playing'] = "Playing";
        
        obj['Finished'] = "Finished";
        
        obj['Finalised'] = "Finalised";
        

        return obj;
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        
        obj['Unknown'] = null;
        
        obj['Deleted'] = null;
        
        obj['WrongGroups'] = null;
        
        obj['Disqualified'] = null;
        
        obj['Substituted'] = null;
        
        obj['Injured'] = null;
        
        obj['OptInRequired'] = null;
        
        obj['Registered'] = null;
        
        obj['Entered'] = null;
        
        obj['Playing'] = null;
        
        obj['Finished'] = null;
        
        obj['Finalised'] = null;
        

        return obj;
    }

    /**
    * Constructs a full object Map for all available fields.
    */
    modelMap(){
        return {"type": 'String'};
    }

    /**
    * Returns a <code>EntrantStatus</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/EntrantStatus} The enum <code>EntrantStatus</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
