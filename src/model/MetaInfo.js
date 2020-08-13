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
 * The MetaInfo model module.
 * @module model/MetaInfo
 * @version 1.0.1
 */
class MetaInfo {
    /**
     * Constructs a new <code>MetaInfo</code>.
     * @alias module:model/MetaInfo
     * @param objectType {String} 
     * @param resultCount {Number} The count of successful results
     * @param errorCount {Number} The count of errors
     */
    constructor(objectType, resultCount, errorCount) { 
        
        MetaInfo.initialize(this, objectType, resultCount, errorCount);
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['objectType'] = null;
        obj['resultCount'] = null;
        obj['errorCount'] = null;

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

        obj["fields"]['objectType'] = { "type": 'String' };
        obj["fields"]['resultCount'] = { "type": 'Number' };
        obj["fields"]['errorCount'] = { "type": 'Number' };

        
        obj["requiredFields"]['objectType'] = { "type": 'String' };
        obj["requiredFields"]['resultCount'] = { "type": 'Number' };
        obj["requiredFields"]['errorCount'] = { "type": 'Number' };

        return obj;
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objectType, resultCount, errorCount) { 
        obj['objectType'] = objectType;
        obj['resultCount'] = resultCount;
        obj['errorCount'] = errorCount;
    }

    /**
     * Constructs a <code>MetaInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MetaInfo} obj Optional instance to populate.
     * @return {module:model/MetaInfo} The populated <code>MetaInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetaInfo();

            if (data.hasOwnProperty('objectType')) {
                obj['objectType'] = ApiClient.convertToType(data['objectType'], 'String');
            }
            if (data.hasOwnProperty('resultCount')) {
                obj['resultCount'] = ApiClient.convertToType(data['resultCount'], 'Number');
            }
            if (data.hasOwnProperty('errorCount')) {
                obj['errorCount'] = ApiClient.convertToType(data['errorCount'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} objectType
 */
MetaInfo.prototype['objectType'] = undefined;

/**
 * The count of successful results
 * @member {Number} resultCount
 */
MetaInfo.prototype['resultCount'] = undefined;

/**
 * The count of errors
 * @member {Number} errorCount
 */
MetaInfo.prototype['errorCount'] = undefined;






export default MetaInfo;

