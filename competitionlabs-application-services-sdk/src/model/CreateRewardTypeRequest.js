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
import CreateOptParamModels from './CreateOptParamModels';
import Metadata from './Metadata';
import RewardTypeAllOf from './RewardTypeAllOf';
import TranslationValue from './TranslationValue';
import UnitOfMeasureType from './UnitOfMeasureType';

/**
 * The CreateRewardTypeRequest model module.
 * @module model/CreateRewardTypeRequest
 * @version 1.0.0
 */
class CreateRewardTypeRequest {
    /**
     * Constructs a new <code>CreateRewardTypeRequest</code>.
     * @alias module:model/CreateRewardTypeRequest
     * @implements module:model/CreateOptParamModels
     * @implements module:model/RewardTypeAllOf
     * @param name {String} The name of the Reward type
     * @param key {String} A unique key that represents the reward type
     * @param unitOfMeasureType {module:model/UnitOfMeasureType} 
     * @param constraints {Array.<String>} Additional constraints, if the value is present it means the
     */
    constructor(name, key, unitOfMeasureType, constraints) { 
        CreateOptParamModels.initialize(this);RewardTypeAllOf.initialize(this, name, key, unitOfMeasureType, constraints);
        CreateRewardTypeRequest.initialize(this, name, key, unitOfMeasureType, constraints);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, key, unitOfMeasureType, constraints) { 
        obj['name'] = name;
        obj['key'] = key;
        obj['unitOfMeasureType'] = unitOfMeasureType;
        obj['constraints'] = constraints;
    }

    /**
     * Constructs a <code>CreateRewardTypeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateRewardTypeRequest} obj Optional instance to populate.
     * @return {module:model/CreateRewardTypeRequest} The populated <code>CreateRewardTypeRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateRewardTypeRequest();
            CreateOptParamModels.constructFromObject(data, obj);
            RewardTypeAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('customFields')) {
                obj['customFields'] = ApiClient.convertToType(data['customFields'], ['String']);
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], [Metadata]);
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
            if (data.hasOwnProperty('translations')) {
                obj['translations'] = ApiClient.convertToType(data['translations'], [Object]);
            }
            if (data.hasOwnProperty('constraints')) {
                obj['constraints'] = ApiClient.convertToType(data['constraints'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * A list of id's used to add cutom fields
 * @member {Array.<String>} customFields
 */
CreateRewardTypeRequest.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
CreateRewardTypeRequest.prototype['tags'] = undefined;

/**
 * @member {Array.<module:model/Metadata>} metadata
 */
CreateRewardTypeRequest.prototype['metadata'] = undefined;

/**
 * The name of the Reward type
 * @member {String} name
 */
CreateRewardTypeRequest.prototype['name'] = undefined;

/**
 * The description of a reward type
 * @member {String} description
 */
CreateRewardTypeRequest.prototype['description'] = undefined;

/**
 * A unique key that represents the reward type
 * @member {String} key
 */
CreateRewardTypeRequest.prototype['key'] = undefined;

/**
 * @member {module:model/UnitOfMeasureType} unitOfMeasureType
 */
CreateRewardTypeRequest.prototype['unitOfMeasureType'] = undefined;

/**
 * @member {Array.<Object.<String, module:model/TranslationValue>>} translations
 */
CreateRewardTypeRequest.prototype['translations'] = undefined;

/**
 * Additional constraints, if the value is present it means the
 * @member {Array.<String>} constraints
 */
CreateRewardTypeRequest.prototype['constraints'] = undefined;


// Implement CreateOptParamModels interface:
/**
 * A list of id's used to add cutom fields
 * @member {Array.<String>} customFields
 */
CreateOptParamModels.prototype['customFields'] = undefined;
/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
CreateOptParamModels.prototype['tags'] = undefined;
/**
 * @member {Array.<module:model/Metadata>} metadata
 */
CreateOptParamModels.prototype['metadata'] = undefined;
// Implement RewardTypeAllOf interface:
/**
 * The name of the Reward type
 * @member {String} name
 */
RewardTypeAllOf.prototype['name'] = undefined;
/**
 * The description of a reward type
 * @member {String} description
 */
RewardTypeAllOf.prototype['description'] = undefined;
/**
 * A unique key that represents the reward type
 * @member {String} key
 */
RewardTypeAllOf.prototype['key'] = undefined;
/**
 * @member {module:model/UnitOfMeasureType} unitOfMeasureType
 */
RewardTypeAllOf.prototype['unitOfMeasureType'] = undefined;
/**
 * @member {Array.<Object.<String, module:model/TranslationValue>>} translations
 */
RewardTypeAllOf.prototype['translations'] = undefined;
/**
 * Additional constraints, if the value is present it means the
 * @member {Array.<String>} constraints
 */
RewardTypeAllOf.prototype['constraints'] = undefined;




export default CreateRewardTypeRequest;

