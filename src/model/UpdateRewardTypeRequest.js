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
import UpdateModelDefault from './UpdateModelDefault';
import UpdateRewardTypeRequestAllOf from './UpdateRewardTypeRequestAllOf';

/**
 * The UpdateRewardTypeRequest model module.
 * @module model/UpdateRewardTypeRequest
 * @version 1.0.0
 */
class UpdateRewardTypeRequest {
    /**
     * Constructs a new <code>UpdateRewardTypeRequest</code>.
     * @alias module:model/UpdateRewardTypeRequest
     * @implements module:model/UpdateModelDefault
     * @implements module:model/UpdateRewardTypeRequestAllOf
     * @param id {String} A unique system generated identifier
     */
    constructor(id) { 
        UpdateModelDefault.initialize(this, id);UpdateRewardTypeRequestAllOf.initialize(this);
        UpdateRewardTypeRequest.initialize(this, id);
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['id'] = null;
        obj['name'] = null;
        obj['description'] = null;
        obj['unitOfMeasureType'] = new UnitOfMeasureType().model();
        obj['metadata'] = [new Metadata().model()];
        obj['providers'] = null;

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

        obj["fields"]['id'] = { "type": 'String' };
        obj["fields"]['name'] = { "type": 'String' };
        obj["fields"]['description'] = { "type": 'String' };
        obj["fields"]['unitOfMeasureType'] = new UnitOfMeasureType().modelMap();
        obj["fields"]['metadata'] = [new Metadata().modelMap()];
        obj["fields"]['providers'] = { "type": 'String' };

        
        obj["requiredFields"]['id'] = { "type": 'String' };

        return obj;
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
     * Constructs a <code>UpdateRewardTypeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateRewardTypeRequest} obj Optional instance to populate.
     * @return {module:model/UpdateRewardTypeRequest} The populated <code>UpdateRewardTypeRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateRewardTypeRequest();
            UpdateModelDefault.constructFromObject(data, obj);
            UpdateRewardTypeRequestAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('unitOfMeasureType')) {
                obj['unitOfMeasureType'] = UnitOfMeasureType.constructFromObject(data['unitOfMeasureType']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], [Metadata]);
            }
            if (data.hasOwnProperty('providers')) {
                obj['providers'] = ApiClient.convertToType(data['providers'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A unique system generated identifier
 * @member {String} id
 */
UpdateRewardTypeRequest.prototype['id'] = undefined;

/**
 * The name of the Reward type
 * @member {String} name
 */
UpdateRewardTypeRequest.prototype['name'] = undefined;

/**
 * The description of a reward type
 * @member {String} description
 */
UpdateRewardTypeRequest.prototype['description'] = undefined;

/**
 * @member {module:model/UnitOfMeasureType} unitOfMeasureType
 */
UpdateRewardTypeRequest.prototype['unitOfMeasureType'] = undefined;

/**
 * @member {Array.<module:model/Metadata>} metadata
 */
UpdateRewardTypeRequest.prototype['metadata'] = undefined;

/**
 * The providers of the reward type
 * @member {String} providers
 */
UpdateRewardTypeRequest.prototype['providers'] = undefined;


// Implement UpdateModelDefault interface:
/**
 * A unique system generated identifier
 * @member {String} id
 */
UpdateModelDefault.prototype['id'] = undefined;
// Implement UpdateRewardTypeRequestAllOf interface:
/**
 * The name of the Reward type
 * @member {String} name
 */
UpdateRewardTypeRequestAllOf.prototype['name'] = undefined;
/**
 * The description of a reward type
 * @member {String} description
 */
UpdateRewardTypeRequestAllOf.prototype['description'] = undefined;
/**
 * @member {module:model/UnitOfMeasureType} unitOfMeasureType
 */
UpdateRewardTypeRequestAllOf.prototype['unitOfMeasureType'] = undefined;
/**
 * @member {Array.<module:model/Metadata>} metadata
 */
UpdateRewardTypeRequestAllOf.prototype['metadata'] = undefined;
/**
 * The providers of the reward type
 * @member {String} providers
 */
UpdateRewardTypeRequestAllOf.prototype['providers'] = undefined;




export default UpdateRewardTypeRequest;
