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
 * The Metadata model module.
 * @module model/Metadata
 * @version 1.0.0
 */
class Metadata {
    /**
     * Constructs a new <code>Metadata</code>.
     * @alias module:model/Metadata
     * @param key {String} It is a unique identifier
     * @param value {String} The data that is identified
     */
    constructor(key, value) { 
        
        Metadata.initialize(this, key, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, key, value) { 
        obj['key'] = key;
        obj['value'] = value;
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['key'];
        obj['value'];

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

        obj["fields"]['key'];
        obj["fields"]['value'];

        
        obj["requiredFields"]['key'];
        obj["requiredFields"]['value'];

        return obj;
    }

    /**
     * Constructs a <code>Metadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Metadata} obj Optional instance to populate.
     * @return {module:model/Metadata} The populated <code>Metadata</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Metadata();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * It is a unique identifier
 * @member {String} key
 */
Metadata.prototype['key'] = undefined;

/**
 * The data that is identified
 * @member {String} value
 */
Metadata.prototype['value'] = undefined;






export default Metadata;

