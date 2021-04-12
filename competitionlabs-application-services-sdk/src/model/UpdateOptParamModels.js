/**
 * CompetitionLabs Application Services
 * CompetitionLabs Application Services are used to manage and configure spaces.
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
import Metadata from './Metadata';

/**
 * The UpdateOptParamModels model module.
 * @module model/UpdateOptParamModels
 * @version 1.0.0
 */
class UpdateOptParamModels {
    /**
     * Constructs a new <code>UpdateOptParamModels</code>.
     * @alias module:model/UpdateOptParamModels
     */
    constructor() { 
        
        UpdateOptParamModels.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateOptParamModels</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateOptParamModels} obj Optional instance to populate.
     * @return {module:model/UpdateOptParamModels} The populated <code>UpdateOptParamModels</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateOptParamModels();

            if (data.hasOwnProperty('customFields')) {
                obj['customFields'] = ApiClient.convertToType(data['customFields'], ['String']);
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], [Metadata]);
            }
        }
        return obj;
    }


}

/**
 * A list of id's used to add cutom fields
 * @member {Array.<String>} customFields
 */
UpdateOptParamModels.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
UpdateOptParamModels.prototype['tags'] = undefined;

/**
 * @member {Array.<module:model/Metadata>} metadata
 */
UpdateOptParamModels.prototype['metadata'] = undefined;






export default UpdateOptParamModels;

