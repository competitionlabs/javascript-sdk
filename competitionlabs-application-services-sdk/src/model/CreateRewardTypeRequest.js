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

/**
 * The CreateRewardTypeRequest model module.
 * @module model/CreateRewardTypeRequest
 * @version 1.0.1
 */
class CreateRewardTypeRequest {
    /**
     * Constructs a new <code>CreateRewardTypeRequest</code>.
     * @alias module:model/CreateRewardTypeRequest
     * @param name {String} The name of the Reward type
     * @param key {String} A unique key that represents the reward type
     * @param unitOfMeasureType {module:model/UnitOfMeasureType} 
     */
    constructor(name, key, unitOfMeasureType) { 
        
        CreateRewardTypeRequest.initialize(this, name, key, unitOfMeasureType);
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['name'] = null;
        obj['description'] = null;
        obj['key'] = null;
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

        obj["fields"]['name'] = { "type": 'String', "system": false };
        obj["fields"]['description'] = { "type": 'String', "system": false };
        obj["fields"]['key'] = { "type": 'String', "system": false };
        obj["fields"]['unitOfMeasureType'] = new UnitOfMeasureType().modelMap();
        obj["fields"]['metadata'] = [new Metadata().modelMap()];
        obj["fields"]['providers'] = { "type": 'String', "system": false };

        
        obj["requiredFields"]['name'] = { "type": 'String', "system": false };
        obj["requiredFields"]['key'] = { "type": 'String', "system": false };
        obj["requiredFields"]['unitOfMeasureType'] = new UnitOfMeasureType().modelMap();

        return obj;
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, key, unitOfMeasureType) { 
        obj['name'] = name;
        obj['key'] = key;
        obj['unitOfMeasureType'] = unitOfMeasureType;
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
            if (data.hasOwnProperty('providers')) {
                obj['providers'] = ApiClient.convertToType(data['providers'], 'String');
            }
        }
        return obj;
    }


}

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
 * @member {Array.<module:model/Metadata>} metadata
 */
CreateRewardTypeRequest.prototype['metadata'] = undefined;

/**
 * The providers of the reward type
 * @member {String} providers
 */
CreateRewardTypeRequest.prototype['providers'] = undefined;






export default CreateRewardTypeRequest;
