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
import Role from './Role';

/**
 * The CreateApiKeyRequest model module.
 * @module model/CreateApiKeyRequest
 * @version 1.0.5
 */
class CreateApiKeyRequest {
    /**
     * Constructs a new <code>CreateApiKeyRequest</code>.
     * @alias module:model/CreateApiKeyRequest
     * @param active {Boolean} To enable or dissable an Api key
     * @param role {module:model/Role} 
     * @param _default {Boolean} To enable the Api key to be default
     */
    constructor(active, role, _default) { 
        
        CreateApiKeyRequest.initialize(this, active, role, _default);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, active, role, _default) { 
        obj['active'] = active;
        obj['role'] = role;
        obj['default'] = _default;
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

        obj["fields"]['active'] = { "type": 'Boolean', "system": false };
        obj["fields"]['description'] = { "type": 'String', "system": false };
        obj["fields"]['whiteListIPs'] = [{ "type": 'String', "system": false }];
        obj["fields"]['key'] = { "type": 'String', "system": false };
        obj["fields"]['role'] = new Role().modelMap();
        obj["fields"]['default'] = { "type": 'Boolean', "system": false };
        obj["fields"]['metadata'] = [new Metadata().modelMap()];

        
        obj["requiredFields"]['active'] = { "type": 'Boolean', "system": false };
        obj["requiredFields"]['role'] = new Role().modelMap();
        obj["requiredFields"]['default'] = { "type": 'Boolean', "system": false };

        return obj;
    }

    /**
     * Constructs a <code>CreateApiKeyRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateApiKeyRequest} obj Optional instance to populate.
     * @return {module:model/CreateApiKeyRequest} The populated <code>CreateApiKeyRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateApiKeyRequest();

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
 * To enable or dissable an Api key
 * @member {Boolean} active
 */
CreateApiKeyRequest.prototype['active'] = undefined;

/**
 * The description of an Api key
 * @member {String} description
 */
CreateApiKeyRequest.prototype['description'] = undefined;

/**
 * the IP's that need to be whitelisted with the Api key
 * @member {Array.<String>} whiteListIPs
 */
CreateApiKeyRequest.prototype['whiteListIPs'] = undefined;

/**
 * An Api key hash
 * @member {String} key
 */
CreateApiKeyRequest.prototype['key'] = undefined;

/**
 * @member {module:model/Role} role
 */
CreateApiKeyRequest.prototype['role'] = undefined;

/**
 * To enable the Api key to be default
 * @member {Boolean} default
 */
CreateApiKeyRequest.prototype['default'] = undefined;

/**
 * @member {Array.<module:model/Metadata>} metadata
 */
CreateApiKeyRequest.prototype['metadata'] = undefined;






export default CreateApiKeyRequest;

