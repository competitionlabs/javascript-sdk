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
import UpdateApiKeyRequestAllOf from './UpdateApiKeyRequestAllOf';
import UpdateModelDefault from './UpdateModelDefault';

/**
 * The UpdateApiKeyRequest model module.
 * @module model/UpdateApiKeyRequest
 * @version 1.0.4
 */
class UpdateApiKeyRequest {
    /**
     * Constructs a new <code>UpdateApiKeyRequest</code>.
     * @alias module:model/UpdateApiKeyRequest
     * @implements module:model/UpdateModelDefault
     * @implements module:model/UpdateApiKeyRequestAllOf
     * @param id {String} A unique system generated identifier
     */
    constructor(id) { 
        UpdateModelDefault.initialize(this, id);UpdateApiKeyRequestAllOf.initialize(this);
        UpdateApiKeyRequest.initialize(this, id);
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
        obj['active'];
        obj['description'];
        obj['whiteListIPs'];
        obj['key'];
        obj['role'];
        obj['default'];
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
        obj["fields"]['active'];
        obj["fields"]['description'];
        obj["fields"]['whiteListIPs'];
        obj["fields"]['key'];
        obj["fields"]['role'];
        obj["fields"]['default'];
        obj["fields"]['metadata'];

        
        obj["requiredFields"]['id'];

        return obj;
    }

    /**
     * Constructs a <code>UpdateApiKeyRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateApiKeyRequest} obj Optional instance to populate.
     * @return {module:model/UpdateApiKeyRequest} The populated <code>UpdateApiKeyRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateApiKeyRequest();
            UpdateModelDefault.constructFromObject(data, obj);
            UpdateApiKeyRequestAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
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
UpdateApiKeyRequest.prototype['id'] = undefined;

/**
 * To enable or dissable an Api key
 * @member {Boolean} active
 */
UpdateApiKeyRequest.prototype['active'] = undefined;

/**
 * The description of an Api key
 * @member {String} description
 */
UpdateApiKeyRequest.prototype['description'] = undefined;

/**
 * the IP's that need to be whitelisted with the Api key
 * @member {Array.<String>} whiteListIPs
 */
UpdateApiKeyRequest.prototype['whiteListIPs'] = undefined;

/**
 * An Api key hash
 * @member {String} key
 */
UpdateApiKeyRequest.prototype['key'] = undefined;

/**
 * @member {module:model/Role} role
 */
UpdateApiKeyRequest.prototype['role'] = undefined;

/**
 * To enable the Api key to be default
 * @member {Boolean} default
 */
UpdateApiKeyRequest.prototype['default'] = undefined;

/**
 * @member {Array.<module:model/Metadata>} metadata
 */
UpdateApiKeyRequest.prototype['metadata'] = undefined;


// Implement UpdateModelDefault interface:
/**
 * A unique system generated identifier
 * @member {String} id
 */
UpdateModelDefault.prototype['id'] = undefined;
// Implement UpdateApiKeyRequestAllOf interface:
/**
 * To enable or dissable an Api key
 * @member {Boolean} active
 */
UpdateApiKeyRequestAllOf.prototype['active'] = undefined;
/**
 * The description of an Api key
 * @member {String} description
 */
UpdateApiKeyRequestAllOf.prototype['description'] = undefined;
/**
 * the IP's that need to be whitelisted with the Api key
 * @member {Array.<String>} whiteListIPs
 */
UpdateApiKeyRequestAllOf.prototype['whiteListIPs'] = undefined;
/**
 * An Api key hash
 * @member {String} key
 */
UpdateApiKeyRequestAllOf.prototype['key'] = undefined;
/**
 * @member {module:model/Role} role
 */
UpdateApiKeyRequestAllOf.prototype['role'] = undefined;
/**
 * To enable the Api key to be default
 * @member {Boolean} default
 */
UpdateApiKeyRequestAllOf.prototype['default'] = undefined;
/**
 * @member {Array.<module:model/Metadata>} metadata
 */
UpdateApiKeyRequestAllOf.prototype['metadata'] = undefined;




export default UpdateApiKeyRequest;

