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
 * The CountResponse model module.
 * @module model/CountResponse
 * @version 1.0.1
 */
class CountResponse {
    /**
     * Constructs a new <code>CountResponse</code>.
     * @alias module:model/CountResponse
     * @param entityId {String} A unique identifier of a Entity
     * @param countValue {Number} The value in how many times the achievemnt was issued
     */
    constructor(entityId, countValue) { 
        
        CountResponse.initialize(this, entityId, countValue);
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['entityId'] = null;
        obj['countValue'] = null;

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

        obj["fields"]['entityId'] = { "type": 'String' };
        obj["fields"]['countValue'] = { "type": 'Number' };

        
        obj["requiredFields"]['entityId'] = { "type": 'String' };
        obj["requiredFields"]['countValue'] = { "type": 'Number' };

        return obj;
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, entityId, countValue) { 
        obj['entityId'] = entityId;
        obj['countValue'] = countValue;
    }

    /**
     * Constructs a <code>CountResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CountResponse} obj Optional instance to populate.
     * @return {module:model/CountResponse} The populated <code>CountResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CountResponse();

            if (data.hasOwnProperty('entityId')) {
                obj['entityId'] = ApiClient.convertToType(data['entityId'], 'String');
            }
            if (data.hasOwnProperty('countValue')) {
                obj['countValue'] = ApiClient.convertToType(data['countValue'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * A unique identifier of a Entity
 * @member {String} entityId
 */
CountResponse.prototype['entityId'] = undefined;

/**
 * The value in how many times the achievemnt was issued
 * @member {Number} countValue
 */
CountResponse.prototype['countValue'] = undefined;






export default CountResponse;

