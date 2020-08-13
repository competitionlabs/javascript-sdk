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
* Enum class StrategyType.
* @enum {}
* @readonly
*/
export default class StrategyType {
    
        /**
         * value: "TotalCumulative"
         * @const
         */
        "TotalCumulative" = "TotalCumulative";

    
        /**
         * value: "SumBest"
         * @const
         */
        "SumBest" = "SumBest";

    
        /**
         * value: "LimitedTo"
         * @const
         */
        "LimitedTo" = "LimitedTo";

    
        /**
         * value: "FirstTo"
         * @const
         */
        "FirstTo" = "FirstTo";

    

    /**
    * Constructs a full object with all available fields.
    */
    list(){
        var obj = {};

        
        obj['TotalCumulative'] = "TotalCumulative";
        
        obj['SumBest'] = "SumBest";
        
        obj['LimitedTo'] = "LimitedTo";
        
        obj['FirstTo'] = "FirstTo";
        

        return obj;
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        
        obj['TotalCumulative'] = null;
        
        obj['SumBest'] = null;
        
        obj['LimitedTo'] = null;
        
        obj['FirstTo'] = null;
        

        return obj;
    }

    /**
    * Constructs a full object Map for all available fields.
    */
    modelMap(){
        return {"type": 'String'};
    }

    /**
    * Returns a <code>StrategyType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/StrategyType} The enum <code>StrategyType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

