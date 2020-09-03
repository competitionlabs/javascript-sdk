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
import Metadata from './Metadata';
import UnitOfMeasureType from './UnitOfMeasureType';
import UpdateActionTypeRequestAllOf from './UpdateActionTypeRequestAllOf';
import UpdateModelDefault from './UpdateModelDefault';

/**
 * The UpdateActionTypeRequest model module.
 * @module model/UpdateActionTypeRequest
 * @version 1.0.4
 */
class UpdateActionTypeRequest {
    /**
     * Constructs a new <code>UpdateActionTypeRequest</code>.
     * @alias module:model/UpdateActionTypeRequest
     * @implements module:model/UpdateModelDefault
     * @implements module:model/UpdateActionTypeRequestAllOf
     * @param id {String} A unique system generated identifier
     */
    constructor(id) { 
        UpdateModelDefault.initialize(this, id);UpdateActionTypeRequestAllOf.initialize(this);
        UpdateActionTypeRequest.initialize(this, id);
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

        obj['id'];
        obj['name'];
        obj['description'];
        obj['key'];
        obj['unitOfMeasureType'];
        obj['metadata'];

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

        obj["fields"]['id'];
        obj["fields"]['name'];
        obj["fields"]['description'];
        obj["fields"]['key'];
        obj["fields"]['unitOfMeasureType'];
        obj["fields"]['metadata'];

        
        obj["requiredFields"]['id'];

        return obj;
    }

    /**
     * Constructs a <code>UpdateActionTypeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateActionTypeRequest} obj Optional instance to populate.
     * @return {module:model/UpdateActionTypeRequest} The populated <code>UpdateActionTypeRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateActionTypeRequest();
            UpdateModelDefault.constructFromObject(data, obj);
            UpdateActionTypeRequestAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('unitOfMeasureType')) {
                obj['unitOfMeasureType'] = UnitOfMeasureType.constructFromObject(data['unitOfMeasureType']);
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
UpdateActionTypeRequest.prototype['id'] = undefined;

/**
 * The name of the Action Helper
 * @member {String} name
 */
UpdateActionTypeRequest.prototype['name'] = undefined;

/**
 * The description of the rule action helper for your reference
 * @member {String} description
 */
UpdateActionTypeRequest.prototype['description'] = undefined;

/**
 * A unique key that represents an action helper
 * @member {String} key
 */
UpdateActionTypeRequest.prototype['key'] = undefined;

/**
 * @member {module:model/UnitOfMeasureType} unitOfMeasureType
 */
UpdateActionTypeRequest.prototype['unitOfMeasureType'] = undefined;

/**
 * @member {Array.<module:model/Metadata>} metadata
 */
UpdateActionTypeRequest.prototype['metadata'] = undefined;


// Implement UpdateModelDefault interface:
/**
 * A unique system generated identifier
 * @member {String} id
 */
UpdateModelDefault.prototype['id'] = undefined;
// Implement UpdateActionTypeRequestAllOf interface:
/**
 * The name of the Action Helper
 * @member {String} name
 */
UpdateActionTypeRequestAllOf.prototype['name'] = undefined;
/**
 * The description of the rule action helper for your reference
 * @member {String} description
 */
UpdateActionTypeRequestAllOf.prototype['description'] = undefined;
/**
 * A unique key that represents an action helper
 * @member {String} key
 */
UpdateActionTypeRequestAllOf.prototype['key'] = undefined;
/**
 * @member {module:model/UnitOfMeasureType} unitOfMeasureType
 */
UpdateActionTypeRequestAllOf.prototype['unitOfMeasureType'] = undefined;
/**
 * @member {Array.<module:model/Metadata>} metadata
 */
UpdateActionTypeRequestAllOf.prototype['metadata'] = undefined;




export default UpdateActionTypeRequest;

