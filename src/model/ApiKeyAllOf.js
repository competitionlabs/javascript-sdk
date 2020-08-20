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
import Role from './Role';

/**
 * The ApiKeyAllOf model module.
 * @module model/ApiKeyAllOf
 * @version 1.0.1
 */
class ApiKeyAllOf {
    /**
     * Constructs a new <code>ApiKeyAllOf</code>.
     * @alias module:model/ApiKeyAllOf
     * @param active {Boolean} To enable or dissable an Api key
     */
    constructor(active) { 
        
        ApiKeyAllOf.initialize(this, active);
    }

    /**
    * Constructs a full object with all available fields.
    */
    model(){
        var obj = {};

        obj['active'] = null;
        obj['description'] = null;
        obj['whiteListIPs'] = [null];
        obj['key'] = null;
        obj['role'] = new Role().model();
        obj['default'] = null;

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

        obj["fields"]['active'] = { "type": 'Boolean', "system": false };
        obj["fields"]['description'] = { "type": 'String', "system": false };
        obj["fields"]['whiteListIPs'] = [{ "type": 'String', "system": false }];
        obj["fields"]['key'] = { "type": 'String', "system": false };
        obj["fields"]['role'] = new Role().modelMap();
        obj["fields"]['default'] = { "type": 'Boolean', "system": false };

        
        obj["requiredFields"]['active'] = { "type": 'Boolean', "system": false };

        return obj;
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, active) { 
        obj['active'] = active;
    }

    /**
     * Constructs a <code>ApiKeyAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiKeyAllOf} obj Optional instance to populate.
     * @return {module:model/ApiKeyAllOf} The populated <code>ApiKeyAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiKeyAllOf();

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
        }
        return obj;
    }


}

/**
 * To enable or dissable an Api key
 * @member {Boolean} active
 * @default true
 */
ApiKeyAllOf.prototype['active'] = true;

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
 * @default false
 */
ApiKeyAllOf.prototype['default'] = false;






export default ApiKeyAllOf;

