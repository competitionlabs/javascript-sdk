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
import ActionTypeAllOf from './ActionTypeAllOf';
import Metadata from './Metadata';
import ModelDefault from './ModelDefault';
import UnitOfMeasureType from './UnitOfMeasureType';

/**
 * The ActionType model module.
 * @module model/ActionType
 * @version 1.0.0
 */
class ActionType {
    /**
     * Constructs a new <code>ActionType</code>.
     * @alias module:model/ActionType
     * @implements module:model/ModelDefault
     * @implements module:model/ActionTypeAllOf
     * @param id {String} A unique system generated identifier
     * @param spaceName {String} This is the space name which is linked to the account
     * @param created {Date} ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
     * @param name {String} The name of the Action Helper
     * @param key {String} A unique key that represents an action helper
     * @param unitOfMeasureType {module:model/UnitOfMeasureType} 
     */
    constructor(id, spaceName, created, name, key, unitOfMeasureType) { 
        ModelDefault.initialize(this, id, spaceName, created);ActionTypeAllOf.initialize(this, name, key, unitOfMeasureType);
        ActionType.initialize(this, id, spaceName, created, name, key, unitOfMeasureType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, spaceName, created, name, key, unitOfMeasureType) { 
        obj['id'] = id;
        obj['spaceName'] = spaceName;
        obj['created'] = created;
        obj['name'] = name;
        obj['key'] = key;
        obj['unitOfMeasureType'] = unitOfMeasureType;
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['id'];
        obj['spaceName'];
        obj['created'];
        obj['name'];
        obj['key'];
        obj['description'];
        obj['system'];
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
        obj["fields"]['spaceName'];
        obj["fields"]['created'];
        obj["fields"]['name'];
        obj["fields"]['key'];
        obj["fields"]['description'];
        obj["fields"]['system'];
        obj["fields"]['unitOfMeasureType'];
        obj["fields"]['metadata'];

        
        obj["requiredFields"]['id'];
        obj["requiredFields"]['spaceName'];
        obj["requiredFields"]['created'];
        obj["requiredFields"]['name'];
        obj["requiredFields"]['key'];
        obj["requiredFields"]['unitOfMeasureType'];

        return obj;
    }

    /**
     * Constructs a <code>ActionType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionType} obj Optional instance to populate.
     * @return {module:model/ActionType} The populated <code>ActionType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActionType();
            ModelDefault.constructFromObject(data, obj);
            ActionTypeAllOf.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('system')) {
                obj['system'] = ApiClient.convertToType(data['system'], 'Boolean');
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
ActionType.prototype['id'] = undefined;

/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
ActionType.prototype['spaceName'] = undefined;

/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
ActionType.prototype['created'] = undefined;

/**
 * The name of the Action Helper
 * @member {String} name
 */
ActionType.prototype['name'] = undefined;

/**
 * A unique key that represents an action helper
 * @member {String} key
 */
ActionType.prototype['key'] = undefined;

/**
 * The description of the rule action helper for your reference
 * @member {String} description
 */
ActionType.prototype['description'] = undefined;

/**
 * A boolean value (true/false) that represents the Action Helpers state. A system reserved entry (set to true) cannot be deleted.
 * @member {Boolean} system
 */
ActionType.prototype['system'] = undefined;

/**
 * @member {module:model/UnitOfMeasureType} unitOfMeasureType
 */
ActionType.prototype['unitOfMeasureType'] = undefined;

/**
 * @member {Array.<module:model/Metadata>} metadata
 */
ActionType.prototype['metadata'] = undefined;


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
// Implement ActionTypeAllOf interface:
/**
 * The name of the Action Helper
 * @member {String} name
 */
ActionTypeAllOf.prototype['name'] = undefined;
/**
 * A unique key that represents an action helper
 * @member {String} key
 */
ActionTypeAllOf.prototype['key'] = undefined;
/**
 * The description of the rule action helper for your reference
 * @member {String} description
 */
ActionTypeAllOf.prototype['description'] = undefined;
/**
 * A boolean value (true/false) that represents the Action Helpers state. A system reserved entry (set to true) cannot be deleted.
 * @member {Boolean} system
 */
ActionTypeAllOf.prototype['system'] = undefined;
/**
 * @member {module:model/UnitOfMeasureType} unitOfMeasureType
 */
ActionTypeAllOf.prototype['unitOfMeasureType'] = undefined;
/**
 * @member {Array.<module:model/Metadata>} metadata
 */
ActionTypeAllOf.prototype['metadata'] = undefined;




export default ActionType;

