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
import ApiKeyAllOf from './ApiKeyAllOf';
import Metadata from './Metadata';
import ModelDefault from './ModelDefault';
import Role from './Role';

/**
 * The ApiKey model module.
 * @module model/ApiKey
 * @version 1.0.5
 */
class ApiKey {
    /**
     * Constructs a new <code>ApiKey</code>.
     * @alias module:model/ApiKey
     * @implements module:model/ModelDefault
     * @implements module:model/ApiKeyAllOf
     * @param id {String} A unique system generated identifier
     * @param spaceName {String} This is the space name which is linked to the account
     * @param created {Date} ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
     * @param active {Boolean} To enable or dissable an Api key
     */
    constructor(id, spaceName, created, active) { 
        ModelDefault.initialize(this, id, spaceName, created);ApiKeyAllOf.initialize(this, active);
        ApiKey.initialize(this, id, spaceName, created, active);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, spaceName, created, active) { 
        obj['id'] = id;
        obj['spaceName'] = spaceName;
        obj['created'] = created;
        obj['active'] = active;
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['id'] = null;
        obj['spaceName'] = null;
        obj['created'] = null;
        obj['active'] = null;
        obj['description'] = null;
        obj['whiteListIPs'] = [null];
        obj['key'] = null;
        obj['role'] = new Role().model();
        obj['default'] = null;
        obj['metadata'] = [new Metadata().model()];

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
        obj["fields"]['active'] = { "type": 'Boolean', "system": false };
        obj["fields"]['description'] = { "type": 'String', "system": false };
        obj["fields"]['whiteListIPs'] = [{ "type": 'String', "system": false }];
        obj["fields"]['key'] = { "type": 'String', "system": false };
        obj["fields"]['role'] = new Role().modelMap();
        obj["fields"]['default'] = { "type": 'Boolean', "system": false };
        obj["fields"]['metadata'] = [new Metadata().modelMap()];

        
        obj["requiredFields"]['id'] = { "type": 'String', "system": true };
        obj["requiredFields"]['spaceName'] = { "type": 'String', "system": true };
        obj["requiredFields"]['created'] = { "type": 'Date', "system": true };
        obj["requiredFields"]['active'] = { "type": 'Boolean', "system": false };

        return obj;
    }

    /**
     * Constructs a <code>ApiKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiKey} obj Optional instance to populate.
     * @return {module:model/ApiKey} The populated <code>ApiKey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiKey();
            ModelDefault.constructFromObject(data, obj);
            ApiKeyAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('spaceName')) {
                obj['spaceName'] = ApiClient.convertToType(data['spaceName'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('whiteListIPs')) {
                obj['whiteListIPs'] = ApiClient.convertToType(data['whiteListIPs'], ['String']);
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = Role.constructFromObject(data['role']);
            }
            if (data.hasOwnProperty('default')) {
                obj['default'] = ApiClient.convertToType(data['default'], 'Boolean');
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
ApiKey.prototype['id'] = undefined;

/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
ApiKey.prototype['spaceName'] = undefined;

/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
ApiKey.prototype['created'] = undefined;

/**
 * To enable or dissable an Api key
 * @member {Boolean} active
 */
ApiKey.prototype['active'] = undefined;

/**
 * The description of an Api key
 * @member {String} description
 */
ApiKey.prototype['description'] = undefined;

/**
 * the IP's that need to be whitelisted with the Api key
 * @member {Array.<String>} whiteListIPs
 */
ApiKey.prototype['whiteListIPs'] = undefined;

/**
 * An Api key hash
 * @member {String} key
 */
ApiKey.prototype['key'] = undefined;

/**
 * @member {module:model/Role} role
 */
ApiKey.prototype['role'] = undefined;

/**
 * To enable the Api key to be default
 * @member {Boolean} default
 */
ApiKey.prototype['default'] = undefined;

/**
 * @member {Array.<module:model/Metadata>} metadata
 */
ApiKey.prototype['metadata'] = undefined;


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
// Implement ApiKeyAllOf interface:
/**
 * To enable or dissable an Api key
 * @member {Boolean} active
 */
ApiKeyAllOf.prototype['active'] = undefined;
/**
 * The description of an Api key
 * @member {String} description
 */
ApiKeyAllOf.prototype['description'] = undefined;
/**
 * the IP's that need to be whitelisted with the Api key
 * @member {Array.<String>} whiteListIPs
 */
ApiKeyAllOf.prototype['whiteListIPs'] = undefined;
/**
 * An Api key hash
 * @member {String} key
 */
ApiKeyAllOf.prototype['key'] = undefined;
/**
 * @member {module:model/Role} role
 */
ApiKeyAllOf.prototype['role'] = undefined;
/**
 * To enable the Api key to be default
 * @member {Boolean} default
 */
ApiKeyAllOf.prototype['default'] = undefined;
/**
 * @member {Array.<module:model/Metadata>} metadata
 */
ApiKeyAllOf.prototype['metadata'] = undefined;




export default ApiKey;

