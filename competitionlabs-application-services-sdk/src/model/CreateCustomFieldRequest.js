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
import AppliesTo from './AppliesTo';
import FieldType from './FieldType';

/**
 * The CreateCustomFieldRequest model module.
 * @module model/CreateCustomFieldRequest
 * @version 1.0.0
 */
class CreateCustomFieldRequest {
    /**
     * Constructs a new <code>CreateCustomFieldRequest</code>.
     * @alias module:model/CreateCustomFieldRequest
     * @param name {String} The name of a Custom field
     * @param key {String} The key of a Custom field
     * @param fieldType {module:model/FieldType} 
     * @param appliesTo {module:model/AppliesTo} 
     */
    constructor(name, key, fieldType, appliesTo) { 
        
        CreateCustomFieldRequest.initialize(this, name, key, fieldType, appliesTo);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, key, fieldType, appliesTo) { 
        obj['name'] = name;
        obj['key'] = key;
        obj['fieldType'] = fieldType;
        obj['appliesTo'] = appliesTo;
    }

    /**
     * Constructs a <code>CreateCustomFieldRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCustomFieldRequest} obj Optional instance to populate.
     * @return {module:model/CreateCustomFieldRequest} The populated <code>CreateCustomFieldRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateCustomFieldRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('fieldType')) {
                obj['fieldType'] = FieldType.constructFromObject(data['fieldType']);
            }
            if (data.hasOwnProperty('appliesTo')) {
                obj['appliesTo'] = AppliesTo.constructFromObject(data['appliesTo']);
            }
        }
        return obj;
    }


}

/**
 * The name of a Custom field
 * @member {String} name
 */
CreateCustomFieldRequest.prototype['name'] = undefined;

/**
 * The key of a Custom field
 * @member {String} key
 */
CreateCustomFieldRequest.prototype['key'] = undefined;

/**
 * The description of a Custom field
 * @member {String} description
 */
CreateCustomFieldRequest.prototype['description'] = undefined;

/**
 * @member {module:model/FieldType} fieldType
 */
CreateCustomFieldRequest.prototype['fieldType'] = undefined;

/**
 * @member {module:model/AppliesTo} appliesTo
 */
CreateCustomFieldRequest.prototype['appliesTo'] = undefined;






export default CreateCustomFieldRequest;

