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
import MetaInfo from './MetaInfo';

/**
 * The MetaBasic model module.
 * @module model/MetaBasic
 * @version 1.0.4
 */
class MetaBasic {
    /**
     * Constructs a new <code>MetaBasic</code>.
     * @alias module:model/MetaBasic
     * @extends module:model/MetaInfo
     * @implements module:model/MetaInfo
     * @param objectType {String} 
     * @param resultCount {Number} The count of successful results
     * @param errorCount {Number} The count of errors
     */
    constructor(objectType, resultCount, errorCount) { 
        MetaInfo.initialize(this, objectType, resultCount, errorCount);
        MetaBasic.initialize(this, objectType, resultCount, errorCount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objectType, resultCount, errorCount) { 
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};


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


        

        return obj;
    }

    /**
     * Constructs a <code>MetaBasic</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MetaBasic} obj Optional instance to populate.
     * @return {module:model/MetaBasic} The populated <code>MetaBasic</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetaBasic();
            MetaInfo.constructFromObject(data, obj);
            MetaInfo.constructFromObject(data, obj);

        }
        return obj;
    }


}


// Implement MetaInfo interface:
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




export default MetaBasic;

