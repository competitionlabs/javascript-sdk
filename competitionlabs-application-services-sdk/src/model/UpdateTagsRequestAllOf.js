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
import Metadata from './Metadata';

/**
 * The UpdateTagsRequestAllOf model module.
 * @module model/UpdateTagsRequestAllOf
 * @version 3.0.1
 */
class UpdateTagsRequestAllOf {
    /**
     * Constructs a new <code>UpdateTagsRequestAllOf</code>.
     * @alias module:model/UpdateTagsRequestAllOf
     * @param name {String} The name of the tag
     */
    constructor(name) { 
        
        UpdateTagsRequestAllOf.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>UpdateTagsRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateTagsRequestAllOf} obj Optional instance to populate.
     * @return {module:model/UpdateTagsRequestAllOf} The populated <code>UpdateTagsRequestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateTagsRequestAllOf();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('entityTypes')) {
                obj['entityTypes'] = ApiClient.convertToType(data['entityTypes'], ['String']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], [Metadata]);
            }
        }
        return obj;
    }


}

/**
 * The name of the tag
 * @member {String} name
 */
UpdateTagsRequestAllOf.prototype['name'] = undefined;

/**
 * The description of the tag for your reference
 * @member {String} description
 */
UpdateTagsRequestAllOf.prototype['description'] = undefined;

/**
 * The model name the tag refers to
 * @member {Array.<String>} entityTypes
 */
UpdateTagsRequestAllOf.prototype['entityTypes'] = undefined;

/**
 * @member {Array.<module:model/Metadata>} metadata
 */
UpdateTagsRequestAllOf.prototype['metadata'] = undefined;






export default UpdateTagsRequestAllOf;

