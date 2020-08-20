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
 * The LanguageAllOf model module.
 * @module model/LanguageAllOf
 * @version 1.0.1
 */
class LanguageAllOf {
    /**
     * Constructs a new <code>LanguageAllOf</code>.
     * @alias module:model/LanguageAllOf
     */
    constructor() { 
        
        LanguageAllOf.initialize(this);
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['references'] = [null];

        return obj;
    }

    /**
    * Constructs a full object Map for all available fields.
    */
    modelMap(){
        var obj = {
            "fields": {},
            "requiredFields": {}
        };

        obj["fields"]['references'] = [{ "type": 'String', "system": false }];

        

        return obj;
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LanguageAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LanguageAllOf} obj Optional instance to populate.
     * @return {module:model/LanguageAllOf} The populated <code>LanguageAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LanguageAllOf();

            if (data.hasOwnProperty('references')) {
                obj['references'] = ApiClient.convertToType(data['references'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * A reference to the pre created language keys
 * @member {Array.<String>} references
 */
LanguageAllOf.prototype['references'] = undefined;






export default LanguageAllOf;

