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
import ModelDefault from './ModelDefault';
import RewardTypeAllOf from './RewardTypeAllOf';
import UnitOfMeasureType from './UnitOfMeasureType';

/**
 * The RewardType model module.
 * @module model/RewardType
 * @version 1.0.1
 */
class RewardType {
    /**
     * Constructs a new <code>RewardType</code>.
     * @alias module:model/RewardType
     * @implements module:model/ModelDefault
     * @implements module:model/RewardTypeAllOf
     * @param id {String} A unique system generated identifier
     * @param spaceName {String} This is the space name which is linked to the account
     * @param created {Date} ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
     * @param name {String} The name of the Reward type
     * @param key {String} A unique key that represents the reward type
     * @param unitOfMeasureType {module:model/UnitOfMeasureType} 
     * @param system {Boolean} A boolean value (true/false) that represents the Reward type state. A system reserved entry (set to true) cannot be deleted.
     */
    constructor(id, spaceName, created, name, key, unitOfMeasureType, system) { 
        ModelDefault.initialize(this, id, spaceName, created);RewardTypeAllOf.initialize(this, name, key, unitOfMeasureType, system);
        RewardType.initialize(this, id, spaceName, created, name, key, unitOfMeasureType, system);
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['id'] = null;
        obj['spaceName'] = null;
        obj['created'] = null;
        obj['name'] = null;
        obj['description'] = null;
        obj['key'] = null;
        obj['unitOfMeasureType'] = new UnitOfMeasureType().model();
        obj['system'] = null;
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

        obj["fields"]['id'] = { "type": 'String', "system": true };
        obj["fields"]['spaceName'] = { "type": 'String', "system": true };
        obj["fields"]['created'] = { "type": 'Date', "system": true };
        obj["fields"]['name'] = { "type": 'String', "system": false };
        obj["fields"]['description'] = { "type": 'String', "system": false };
        obj["fields"]['key'] = { "type": 'String', "system": false };
        obj["fields"]['unitOfMeasureType'] = new UnitOfMeasureType().modelMap();
        obj["fields"]['system'] = { "type": 'Boolean', "system": false };
        obj["fields"]['metadata'] = [new Metadata().modelMap()];
        obj["fields"]['providers'] = { "type": 'String', "system": false };

        
        obj["requiredFields"]['id'] = { "type": 'String', "system": true };
        obj["requiredFields"]['spaceName'] = { "type": 'String', "system": true };
        obj["requiredFields"]['created'] = { "type": 'Date', "system": true };
        obj["requiredFields"]['name'] = { "type": 'String', "system": false };
        obj["requiredFields"]['key'] = { "type": 'String', "system": false };
        obj["requiredFields"]['unitOfMeasureType'] = new UnitOfMeasureType().modelMap();
        obj["requiredFields"]['system'] = { "type": 'Boolean', "system": false };

        return obj;
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, spaceName, created, name, key, unitOfMeasureType, system) { 
        obj['id'] = id;
        obj['spaceName'] = spaceName;
        obj['created'] = created;
        obj['name'] = name;
        obj['key'] = key;
        obj['unitOfMeasureType'] = unitOfMeasureType;
        obj['system'] = system;
    }

    /**
     * Constructs a <code>RewardType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RewardType} obj Optional instance to populate.
     * @return {module:model/RewardType} The populated <code>RewardType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RewardType();
            ModelDefault.constructFromObject(data, obj);
            RewardTypeAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('spaceName')) {
                obj['spaceName'] = ApiClient.convertToType(data['spaceName'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
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
            if (data.hasOwnProperty('system')) {
                obj['system'] = ApiClient.convertToType(data['system'], 'Boolean');
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
RewardType.prototype['id'] = undefined;

/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
RewardType.prototype['spaceName'] = undefined;

/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
RewardType.prototype['created'] = undefined;

/**
 * The name of the Reward type
 * @member {String} name
 */
RewardType.prototype['name'] = undefined;

/**
 * The description of a reward type
 * @member {String} description
 */
RewardType.prototype['description'] = undefined;

/**
 * A unique key that represents the reward type
 * @member {String} key
 */
RewardType.prototype['key'] = undefined;

/**
 * @member {module:model/UnitOfMeasureType} unitOfMeasureType
 */
RewardType.prototype['unitOfMeasureType'] = undefined;

/**
 * A boolean value (true/false) that represents the Reward type state. A system reserved entry (set to true) cannot be deleted.
 * @member {Boolean} system
 * @default false
 */
RewardType.prototype['system'] = false;

/**
 * @member {Array.<module:model/Metadata>} metadata
 */
RewardType.prototype['metadata'] = undefined;

/**
 * The providers of the reward type
 * @member {String} providers
 */
RewardType.prototype['providers'] = undefined;


// Implement ModelDefault interface:
/**
 * A unique system generated identifier
 * @member {String} id
 */
ModelDefault.prototype['id'] = undefined;
/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
ModelDefault.prototype['spaceName'] = undefined;
/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
ModelDefault.prototype['created'] = undefined;
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
 * A boolean value (true/false) that represents the Reward type state. A system reserved entry (set to true) cannot be deleted.
 * @member {Boolean} system
 * @default false
 */
RewardTypeAllOf.prototype['system'] = false;
/**
 * @member {Array.<module:model/Metadata>} metadata
 */
RewardTypeAllOf.prototype['metadata'] = undefined;
/**
 * The providers of the reward type
 * @member {String} providers
 */
RewardTypeAllOf.prototype['providers'] = undefined;




export default RewardType;

