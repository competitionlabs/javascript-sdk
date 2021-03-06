/**
 * CompetitionLabs Admin Services
 * CompetitionLabs Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.1
 * Contact: support@competitionlabs.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CustomFieldReduced from './CustomFieldReduced';
import Metadata from './Metadata';
import TagsReduced from './TagsReduced';

/**
 * The OptParamModels model module.
 * @module model/OptParamModels
 * @version 3.0.1
 */
class OptParamModels {
    /**
     * Constructs a new <code>OptParamModels</code>.
     * @alias module:model/OptParamModels
     */
    constructor() { 
        
        OptParamModels.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OptParamModels</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OptParamModels} obj Optional instance to populate.
     * @return {module:model/OptParamModels} The populated <code>OptParamModels</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OptParamModels();

            if (data.hasOwnProperty('customFields')) {
                obj['customFields'] = ApiClient.convertToType(data['customFields'], [CustomFieldReduced]);
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], [TagsReduced]);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], [Metadata]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/CustomFieldReduced>} customFields
 */
OptParamModels.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<module:model/TagsReduced>} tags
 */
OptParamModels.prototype['tags'] = undefined;

/**
 * @member {Array.<module:model/Metadata>} metadata
 */
OptParamModels.prototype['metadata'] = undefined;






export default OptParamModels;

