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
 * The EventMetadataRequest model module.
 * @module model/EventMetadataRequest
 * @version 1.0.5
 */
class EventMetadataRequest {
    /**
     * Constructs a new <code>EventMetadataRequest</code>.
     * @alias module:model/EventMetadataRequest
     * @param key {String} The name of the key for the metadata entry
     */
    constructor(key) { 
        
        EventMetadataRequest.initialize(this, key);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, key) { 
        obj['key'] = key;
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['key'] = null;
        obj['textValue'] = null;
        obj['numberValue'] = null;
        obj['textArrayValues'] = [null];
        obj['numberArrayValues'] = [null];

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

        obj["fields"]['key'] = { "type": 'String', "system": false };
        obj["fields"]['textValue'] = { "type": 'String', "system": false };
        obj["fields"]['numberValue'] = { "type": 'Number', "system": false };
        obj["fields"]['textArrayValues'] = [{ "type": 'String', "system": false }];
        obj["fields"]['numberArrayValues'] = [{ "type": 'Number', "system": false }];

        
        obj["requiredFields"]['key'] = { "type": 'String', "system": false };

        return obj;
    }

    /**
     * Constructs a <code>EventMetadataRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventMetadataRequest} obj Optional instance to populate.
     * @return {module:model/EventMetadataRequest} The populated <code>EventMetadataRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventMetadataRequest();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('textValue')) {
                obj['textValue'] = ApiClient.convertToType(data['textValue'], 'String');
            }
            if (data.hasOwnProperty('numberValue')) {
                obj['numberValue'] = ApiClient.convertToType(data['numberValue'], 'Number');
            }
            if (data.hasOwnProperty('textArrayValues')) {
                obj['textArrayValues'] = ApiClient.convertToType(data['textArrayValues'], ['String']);
            }
            if (data.hasOwnProperty('numberArrayValues')) {
                obj['numberArrayValues'] = ApiClient.convertToType(data['numberArrayValues'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * The name of the key for the metadata entry
 * @member {String} key
 */
EventMetadataRequest.prototype['key'] = undefined;

/**
 * The data that is identified
 * @member {String} textValue
 */
EventMetadataRequest.prototype['textValue'] = undefined;

/**
 * The data that is identified
 * @member {Number} numberValue
 */
EventMetadataRequest.prototype['numberValue'] = undefined;

/**
 * Metadata as text array
 * @member {Array.<String>} textArrayValues
 */
EventMetadataRequest.prototype['textArrayValues'] = undefined;

/**
 * Metadata as number array
 * @member {Array.<Number>} numberArrayValues
 */
EventMetadataRequest.prototype['numberArrayValues'] = undefined;






export default EventMetadataRequest;

