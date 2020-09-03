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
import AppliesTo from './AppliesTo';
import FieldType from './FieldType';
import UpdateCustomFieldRequestAllOf from './UpdateCustomFieldRequestAllOf';
import UpdateModelDefault from './UpdateModelDefault';

/**
 * The UpdateCustomFieldRequest model module.
 * @module model/UpdateCustomFieldRequest
 * @version 1.0.5
 */
class UpdateCustomFieldRequest {
    /**
     * Constructs a new <code>UpdateCustomFieldRequest</code>.
     * @alias module:model/UpdateCustomFieldRequest
     * @implements module:model/UpdateModelDefault
     * @implements module:model/UpdateCustomFieldRequestAllOf
     * @param id {String} A unique system generated identifier
     */
    constructor(id) { 
        UpdateModelDefault.initialize(this, id);UpdateCustomFieldRequestAllOf.initialize(this);
        UpdateCustomFieldRequest.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['id'] = null;
        obj['name'] = null;
        obj['description'] = null;
        obj['fieldType'] = new FieldType().model();
        obj['appliesTo'] = new AppliesTo().model();

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

        obj["fields"]['id'] = { "type": 'String', "system": true };
        obj["fields"]['name'] = { "type": 'String', "system": false };
        obj["fields"]['description'] = { "type": 'String', "system": false };
        obj["fields"]['fieldType'] = new FieldType().modelMap();
        obj["fields"]['appliesTo'] = new AppliesTo().modelMap();

        
        obj["requiredFields"]['id'] = { "type": 'String', "system": true };

        return obj;
    }

    /**
     * Constructs a <code>UpdateCustomFieldRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateCustomFieldRequest} obj Optional instance to populate.
     * @return {module:model/UpdateCustomFieldRequest} The populated <code>UpdateCustomFieldRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateCustomFieldRequest();
            UpdateModelDefault.constructFromObject(data, obj);
            UpdateCustomFieldRequestAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
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
 * A unique system generated identifier
 * @member {String} id
 */
UpdateCustomFieldRequest.prototype['id'] = undefined;

/**
 * The name of a Custom field
 * @member {String} name
 */
UpdateCustomFieldRequest.prototype['name'] = undefined;

/**
 * The description of a Custom field
 * @member {String} description
 */
UpdateCustomFieldRequest.prototype['description'] = undefined;

/**
 * @member {module:model/FieldType} fieldType
 */
UpdateCustomFieldRequest.prototype['fieldType'] = undefined;

/**
 * @member {module:model/AppliesTo} appliesTo
 */
UpdateCustomFieldRequest.prototype['appliesTo'] = undefined;


// Implement UpdateModelDefault interface:
/**
 * A unique system generated identifier
 * @member {String} id
 */
UpdateModelDefault.prototype['id'] = undefined;
// Implement UpdateCustomFieldRequestAllOf interface:
/**
 * The name of a Custom field
 * @member {String} name
 */
UpdateCustomFieldRequestAllOf.prototype['name'] = undefined;
/**
 * The description of a Custom field
 * @member {String} description
 */
UpdateCustomFieldRequestAllOf.prototype['description'] = undefined;
/**
 * @member {module:model/FieldType} fieldType
 */
UpdateCustomFieldRequestAllOf.prototype['fieldType'] = undefined;
/**
 * @member {module:model/AppliesTo} appliesTo
 */
UpdateCustomFieldRequestAllOf.prototype['appliesTo'] = undefined;




export default UpdateCustomFieldRequest;

