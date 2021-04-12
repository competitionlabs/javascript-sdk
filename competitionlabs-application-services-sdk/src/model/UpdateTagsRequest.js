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
import UpdateModelDefault from './UpdateModelDefault';
import UpdateTagsRequestAllOf from './UpdateTagsRequestAllOf';

/**
 * The UpdateTagsRequest model module.
 * @module model/UpdateTagsRequest
 * @version 1.0.0
 */
class UpdateTagsRequest {
    /**
     * Constructs a new <code>UpdateTagsRequest</code>.
     * @alias module:model/UpdateTagsRequest
     * @implements module:model/UpdateModelDefault
     * @implements module:model/UpdateTagsRequestAllOf
     * @param id {String} A unique system generated identifier
     * @param name {String} The name of the tag
     * @param entity {Array.<String>} The model name the tag refers to
     */
    constructor(id, name, entity) { 
        UpdateModelDefault.initialize(this, id);UpdateTagsRequestAllOf.initialize(this, name, entity);
        UpdateTagsRequest.initialize(this, id, name, entity);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name, entity) { 
        obj['id'] = id;
        obj['name'] = name;
        obj['entity'] = entity;
    }

    /**
     * Constructs a <code>UpdateTagsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateTagsRequest} obj Optional instance to populate.
     * @return {module:model/UpdateTagsRequest} The populated <code>UpdateTagsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateTagsRequest();
            UpdateModelDefault.constructFromObject(data, obj);
            UpdateTagsRequestAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('entity')) {
                obj['entity'] = ApiClient.convertToType(data['entity'], ['String']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], [Metadata]);
            }
        }
        return obj;
    }


}

/**
 * A unique system generated identifier
 * @member {String} id
 */
UpdateTagsRequest.prototype['id'] = undefined;

/**
 * The name of the tag
 * @member {String} name
 */
UpdateTagsRequest.prototype['name'] = undefined;

/**
 * The description of the tag for your reference
 * @member {String} description
 */
UpdateTagsRequest.prototype['description'] = undefined;

/**
 * The model name the tag refers to
 * @member {Array.<String>} entity
 */
UpdateTagsRequest.prototype['entity'] = undefined;

/**
 * @member {Array.<module:model/Metadata>} metadata
 */
UpdateTagsRequest.prototype['metadata'] = undefined;


// Implement UpdateModelDefault interface:
/**
 * A unique system generated identifier
 * @member {String} id
 */
UpdateModelDefault.prototype['id'] = undefined;
// Implement UpdateTagsRequestAllOf interface:
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
 * @member {Array.<String>} entity
 */
UpdateTagsRequestAllOf.prototype['entity'] = undefined;
/**
 * @member {Array.<module:model/Metadata>} metadata
 */
UpdateTagsRequestAllOf.prototype['metadata'] = undefined;




export default UpdateTagsRequest;

