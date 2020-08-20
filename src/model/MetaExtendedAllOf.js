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
 * The MetaExtendedAllOf model module.
 * @module model/MetaExtendedAllOf
 * @version 1.0.1
 */
class MetaExtendedAllOf {
    /**
     * Constructs a new <code>MetaExtendedAllOf</code>.
     * @alias module:model/MetaExtendedAllOf
     * @param skip {Number} Number of records to skip
     * @param limit {Number} Number of records to return
     */
    constructor(skip, limit) { 
        
        MetaExtendedAllOf.initialize(this, skip, limit);
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['skip'] = null;
        obj['limit'] = null;

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

        obj["fields"]['skip'] = { "type": 'Number', "system": false };
        obj["fields"]['limit'] = { "type": 'Number', "system": false };

        
        obj["requiredFields"]['skip'] = { "type": 'Number', "system": false };
        obj["requiredFields"]['limit'] = { "type": 'Number', "system": false };

        return obj;
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, skip, limit) { 
        obj['skip'] = skip;
        obj['limit'] = limit;
    }

    /**
     * Constructs a <code>MetaExtendedAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MetaExtendedAllOf} obj Optional instance to populate.
     * @return {module:model/MetaExtendedAllOf} The populated <code>MetaExtendedAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetaExtendedAllOf();

            if (data.hasOwnProperty('skip')) {
                obj['skip'] = ApiClient.convertToType(data['skip'], 'Number');
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Number of records to skip
 * @member {Number} skip
 */
MetaExtendedAllOf.prototype['skip'] = undefined;

/**
 * Number of records to return
 * @member {Number} limit
 */
MetaExtendedAllOf.prototype['limit'] = undefined;






export default MetaExtendedAllOf;

